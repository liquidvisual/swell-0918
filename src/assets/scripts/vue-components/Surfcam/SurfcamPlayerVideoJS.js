/*
    NOTES:
    
    updated: 29.06.23, 09.11.20

    * Jira: https://swellnet.atlassian.net/jira/software/projects/WV2/boards/37?selectedIssue=WV2-6
    * ima ad tags: https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/tags
    * vue example from docs: https://docs.videojs.com/tutorial-vue.html
    * video fit: https://stackoverflow.com/questions/18169473/video-js-size-to-fit-div
    * customise skin: https://codepen.io/heff/pen/EarCt
    * extend controls: https://github.com/videojs/video.js/issues/3473
    * events: https://docs.videojs.com/docs/api/player.html#Eventserror

    USAGE:

      <surfcam-player-video-js
        id="surfcam-player"
        :options="{
          ads: {
            enabled: true,
            tagUrl: 'YOUR_TAG_HERE',
          },
          autoplay: false,
          error: {
            heading: "Some heading text can go here",
            body: "Sorry! We're experiencing technical difficulties with this surfcam. We'll have it back up ASAP.",
          },
          totalSecondsUntilTimeout: 30,
          watermark: false,
          watermarkPosition: 'tr'
        }"
      >
      </surfcam-player-video-js>
*/

//-----------------------------------------------------------------
// PLAYER OPTIONS
// https://videojs.com/guides/options
//-----------------------------------------------------------------

const DEFAULT_OPTIONS = {
  ads: {
    enabled: false,
  },
  autoplay: false,
  bigPlayButton: true,
  children: {
    // https://github.com/videojs/video.js/blob/master/docs/guides/components.md#default-component-tree
    controlBar: {
      audioTrackButton: false,
      captionsButton: false,
      fullscreenToggle: true,
      pictureInPictureToggle: false,
      subsCapsButton: false,
      volumePanel: false,
    },
  },
  controls: true,
  debug: false,
  inactivityTimeout: 5*60*1000,
  muted: true,
  totalSecondsUntilTimeout: 30,
  preload: "auto",
  volumePanel: false,
  watermark: false,
  watermarkPosition: "tr",
  width: "100%",
};

//-----------------------------------------------------------------
// VIDEO PLAYER
//-----------------------------------------------------------------

Vue.component("surfcam-player-video-js", {
  template: `
    <div
      id="surfcam-player"
      class="video-js-player collapse-sm-down"
    >
      <!-- DEBUG -->
      <div 
        v-if="options.debug"
        class="video-player-debug"
      >
        timeoutSecondsRemaining: {{ timeoutSecondsRemaining }} <br>
        hasAdsErrored: {{ !!hasAdsErrored }}
      </div>

      <!-- ERRORS -->
      <div
        v-show="hasErrors"
        class="video-player-overlay video-player-overlay-error"
      >
        <div class="video-player-overlay-inner">
          <h3>{{ options.error?.heading || "Unknown error" }}</h3>
          <p>{{ options.error?.body || "" }}</p>
        </div>
      </div>

      <!-- WATERMARK -->
      <div
        v-if="mergedOptions.watermark"
        class="video-player-watermark"
        :class="{
            'is-top-left': mergedOptions.watermarkPosition === 'tl',
            'is-top-right': mergedOptions.watermarkPosition === 'tr',
            'is-bottom-left': mergedOptions.watermarkPosition === 'bl',
            'is-bottom-right': mergedOptions.watermarkPosition === 'br'
        }"
      >
      </div>

      <!-- VIDEO -->
      <div ref="videoPlayerWrapper">
        <video
            id="content_video"
            class="video-js vjs-16-9 vjs-default-skin vjs-big-play-centered vjs-show-big-play-button-on-pause"
            crossorigin
            playsinline
            :poster="poster"
            ref="videoPlayer"
        >
        </video>
      </div>
    </div>
  `,

  //-----------------------------------------------------------------
  // PROPS
  //-----------------------------------------------------------------

  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },

  //-----------------------------------------------------------------
  // DATA
  //-----------------------------------------------------------------

  data() {
    return {
      hasAdsErrored: null,
      hasErrors: null,
      playerInstance: null,
      poster: "/assets/img/layout/placeholder-video-1280x720.svg",
      startEvent: "click", // from SDK Autoplay example
      timeoutInstance: null,
      timeoutSecondsRemaining: 0,
      videoEl: null,
      videoObj: null,
    };
  },

  //-----------------------------------------------------------------
  // COMPUTED
  //-----------------------------------------------------------------

  computed: {
    mergedOptions() {
      return {
        ...DEFAULT_OPTIONS,
        ...this.options,
      };
    },
  },

  //-----------------------------------------------------------------
  // MOUNTED
  //-----------------------------------------------------------------

  mounted() {
    this.videoEl = this.$refs.videoPlayer;
    
    // Remember: widget calls these (bus)
    bus.$on("initPlayer", this.handleInitPlayer);
    bus.$on("loadVideo", this.handleLoadVideo);
  },
  //-----------------------------------------------------------------
  // BEFORE DESTROY
  //-----------------------------------------------------------------

  beforeDestroy() {
    clearTimeout(this.timeoutInstance);

    if (this.playerInstance) {
      this.playerInstance.dispose();
    }
  },

//-----------------------------------------------------------------
// METHODS
//-----------------------------------------------------------------

methods: {
  
  //-----------------------------------------------------------------
  // HANDLE INIT PLAYER
  //-----------------------------------------------------------------

  handleInitPlayer() {
    this.playerInstance = videojs(this.videoEl, this.mergedOptions);
    this.timeoutSecondsRemaining = this.mergedOptions.totalSecondsUntilTimeout;
    
    this.playerInstance.on("play", this.handlePlay);
    this.playerInstance.on("pause", this.handlePause);
    this.playerInstance.on("error", this.handleError);
    this.playerInstance.on("reset", () => (this.hasErrors = false));
    
    this.setupAds();
  },

  //-----------------------------------------------------------------
  // HANDLE LOAD VIDEO
  //-----------------------------------------------------------------

  handleLoadVideo(videoObj) {
    this.videoObj = videoObj;
    this.poster = videoObj.image;

    this.playerInstance.src({
      src: videoObj.stream,
      type: videoObj.format === "mp4" ? "video/mp4" : "application/x-mpegURL",
    });
  },

   //-----------------------------------------------------------------
  // HANDLE PLAY
  //-----------------------------------------------------------------

  handlePlay() {
    // Replenish pause timer for paid users.
    if (!this.mergedOptions.ads.enabled) {
      this.timeoutSecondsRemaining = this.mergedOptions.totalSecondsUntilTimeout;
    }

    this.startTimeoutCountdown();
    this.setupUserInactivity();
  },

  //-----------------------------------------------------------------
  // START TIMEOUT COUNTDOWN
  //-----------------------------------------------------------------

  startTimeoutCountdown() {
    // Setting 0 or -1 explicitly will disable the timer.
    if (!this.mergedOptions.totalSecondsUntilTimeout) {
      return;
    }

    const countdown = () => {
      clearTimeout(this.timeoutInstance);
      
      if (this.timeoutSecondsRemaining === 0) {
        this.mergedOptions.ads.enabled ? this.showPlayerTimeoutOverlay() : this.playerInstance.pause();
        return;
      }
      
      this.timeoutSecondsRemaining -= 1;
      this.timeoutInstance = setTimeout(countdown, 1000);
    }
    countdown();  
  },

  //-----------------------------------------------------------------
  // SETUP USER INACTIVITY (PUBLIC ONLY)
  // (Not related to video-js `userInactivity` option)
  //-----------------------------------------------------------------

  setupUserInactivity() {
    if (this.mergedOptions.ads.enabled) {

      window.addEventListener("blur", () => {
        try {
          this.playerInstance.pause();
          // this.playerInstance.ima.pauseAd();
        } catch (err) {}
      });
      
      window.addEventListener("focus", () => {
        try {
          if (this.mergedOptions.autoplay) {
            this.playerInstance.play();
          }
        } catch (err) {}
      });
    }
  },

  //-----------------------------------------------------------------
  // HANDLE PAUSE
  //-----------------------------------------------------------------

  handlePause() {
    clearTimeout(this.timeoutInstance);
  },

  //-----------------------------------------------------------------
  // HANDLE ERROR
  //-----------------------------------------------------------------

  handleError(error) {
    console.log("Oops! There were errors loading video:", error);
    clearTimeout(this.timeoutInstance);
    this.hasErrors = true;
  },

  //-----------------------------------------------------------------
  // SETUP ADS
  // https://github.com/googleads/videojs-ima
  //-----------------------------------------------------------------

  setupAds() {
    if (!this.mergedOptions.ads.enabled || !this.mergedOptions.ads.tagUrl) {
      return; 
    }

    try {
      this.playerInstance.ima({ adTagUrl: this.mergedOptions.ads.tagUrl });
    } catch (err) {
      this.hasAdsErrored = true; // Potential adblocker.
    }

    //==================================================
    // HANDLE TOUCH AUTOPLAY
    // Handles autoplay on touch devices (from SDK example).
    //
    // From docs: On mobile devices, you must call `initializeAdDisplayContainer` as result
    // of user action (e.g. button click). If you don't make this call, the SDK
    // will make it for you, but NOT as the result of a user action.
    //==================================================

    if (!this.hasAdsErrored) {
      if (
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/Android/i)
      ) {
        this.startEvent = "touchend";
      }

      this.videoEl.addEventListener(this.startEvent, () => {
        this.playerInstance.ima.initializeAdDisplayContainer();
        this.videoEl.removeEventListener(this.startEvent, initAdDisplayContainer);
      });
    }

    //==================================================
    // ON AD START
    // Will pause timeout until content resumes.
    //==================================================

    this.playerInstance.on("adstart", () => {
      clearTimeout(this.timeoutInstance);
    });
      
    //==================================================
    // ON AD END
    // Autoplay video after ad run.
    // http://videojs.github.io/videojs-contrib-ads/integrator/api.html
    //==================================================

    this.playerInstance.on("adend", () => {
      this.playerInstance.play(); // FYI: Firefox private mode invokes play automatically.
    });

    //==================================================
    // ON ADS ERROR
    // https://github.com/googleads/videojs-ima/issues/690
    //==================================================

    this.playerInstance.on("adserror", (err) => {
      console.warn("OOPS! AD ERROR:", err?.data?.AdError?.g, err?.data?.AdError?.g?.errorCode);
      this.playerInstance.play();
    });    
  },

  //-----------------------------------------------------------------
  // SHOW PLAYER TIMEOUT OVERLAY
  //-----------------------------------------------------------------

  showPlayerTimeoutOverlay() {
    // Hack due to listeners not being cleaned up on ima when ad blockers:
    // https://github.com/googleads/videojs-ima/issues/1106
    this.playerInstance.reset();
    this.$refs.videoPlayerWrapper.style.display = "none";

    const playerOverlayTimeoutEl = document.getElementById("video-player-overlay-timeout");

    // Reveal timeout overlay.
    playerOverlayTimeoutEl.removeAttribute("hidden");

    // Clicking player reloads video/page and reinits.
    playerOverlayTimeoutEl.addEventListener("click", () => location.reload());
  },
},
});
