/*
    MULTICAM PLAYER PLYR
    updated: 10.09.18

    USAGE:
        <multicam-player-plyr
            :source="liveStreamPath"
            :poster="poster"
            :errors="errors"
            @log-errors="errors = editing ? false : true"
            @show-controls="showEditBtn = hovering ? true : $event">
        </multicam-player-plyr>
*/
//-----------------------------------------------------------------
// VIDEO PLAYER
//-----------------------------------------------------------------

Vue.component('multicam-player-plyr', {
    template: `
        <div class="video-player-plyr">

            <!-- ERRORS -->
            <div
                v-if="errors"
                class="video-player-overlay video-player-overlay-error"
            >
                <div class="video-player-overlay-inner">
                    <i class="fa fa-warning"></i>
                    <p>Sorry! We're experiencing <b>technical difficulties</b> with this surfcam. We'll have it back up ASAP.</p>
                </div>
            </div>

            <!-- WATERMARK -->
            <div class="video-player-watermark"></div>

            <!-- VIDEO -->
            <video
                autoplay
                controls
                crossorigin
                muted
                playsinline
                ref="video"
                :poster="poster"
                width="100%"
            >
            </video>

        </div>
    `,
    props: {
        errors: Boolean,
        source: String,
        poster: {
            type: String,
            default: '/assets/img/layout/placeholder-video-1280x720.svg'
        }
    },
    data() {
        return {
            playerInstance: null,
            hlsInstance: null,
            showControls: null,
            videoEl: null,
            videoPath: null, // * new *
            videoTimeout: 300000 // hardcode 5mins, out of time
        }
    },
    mounted() {
        this.videoEl = this.$refs.video;
        this.initPlayer();
    },
    beforeDestroy() {
        this.playerInstance.destroy();
        this.playerInstance = null;
    },
    watch: {
        source() {
            if (this.source)
                this.loadVideo(this.source); // when source changes, load new video
            else
                this.unloadVideo(); // reset
        }
    },
    methods: {
        initPlayer() {
            this.playerInstance = new Plyr(this.videoEl, {

                // https://github.com/sampotts/plyr/blob/master/controls.md
                controls: [
                    'play-large', // The large play button in the center
                    // 'restart', // Restart playback
                    // 'rewind', // Rewind by the seek time (default 10 seconds)
                    'play', // Play/pause playback
                    // 'fast-forward', // Fast forward by the seek time (default 10 seconds)
                    // 'progress', // The progress bar and scrubber for playback and buffering
                    // 'current-time', // The current time of playback
                    // 'duration', // The full duration of the media
                    //'mute', // Toggle mute
                    //'volume', // Volume control
                    // 'captions', // Toggle captions
                    // 'settings', // Settings menu
                    // 'pip', // Picture-in-picture (currently Safari only)
                    // 'airplay', // Airplay (currently Safari only)
                    //'fullscreen', // Toggle fullscreen
                ],
                clickToPlay: true,
                displayDuration: false
            });

            // ON PLAY
            this.playerInstance.on('play', this.playVideo);

            // ON PAUSE
            this.playerInstance.on('pause', this.pauseVideo);

            // ON CONTROLS SHOWN
            this.playerInstance.on('controlsshown', (event) => {
                this.$emit('show-controls', true);
                this.showControls = true;
            });

            // ON CONTROLS HIDDEN
            this.playerInstance.on('controlshidden', (event) => {
                this.$emit('show-controls', false);
                this.showControls = false;
            });

            // TODO: show loader on stall (for non hls which has a delay)
            // this.playerInstance.on('stalled', (event) => {
                // console.log('stalled! '+event);
            // });
        },
        //-----------------------------------------------------------------
        // LOAD VIDEO
        // https://hls-js.netlify.com/api-docs/
        //-----------------------------------------------------------------

        loadVideo(path) {
            this.videoPath = path; // store path, we'll need it on reload

            // For more Hls.js options, see https://github.com/dailymotion/hls.js
            if (!Hls.isSupported()) {
                this.videoEl.src = path; // eg. iOS

                // Errors for non hls only (iOS)
                this.playerInstance.on('error', (event) => {
                    this.$emit('log-errors');
                });
            }
            else {
                this.hlsInstance = new Hls();
                this.hlsInstance.loadSource(path);
                this.hlsInstance.attachMedia(this.videoEl);

                // Errors for hls only
                this.hlsInstance.on(Hls.Events.ERROR, (event, data) => {
                    if (data.fatal) this.$emit('log-errors');
                });
            }
            this.startTimeout(); // start timer until pause
        },
        //-----------------------------------------------------------------
        // PLAY VIDEO
        //-----------------------------------------------------------------

        playVideo() {
            this.startTimeout();

            if (this.hlsInstance === 'RELOAD_IT')
                this.loadVideo(this.videoPath);
        },
        //-----------------------------------------------------------------
        // PAUSE VIDEO
        // https://jsfiddle.net/Larer8ad/ - reference
        // https://github.com/video-dev/hls.js/issues/741
        // https://github.com/videojs/video.js/issues/5312 - stop buffering
        // https://github.com/videojs/video.js/issues/2121
        //-----------------------------------------------------------------

        pauseVideo() {
            this.resetTimeout();
            this.playerInstance.pause();
            if (this.hlsInstance) {
                this.hlsInstance.stopLoad(); // stop further buffering
                this.hlsInstance = 'RELOAD_IT';
            }
        },
        //-----------------------------------------------------------------
        // UNLOAD VIDEO
        //-----------------------------------------------------------------

        unloadVideo() {
            this.resetTimeout();
            if (this.hlsInstance && typeof(this.hlsInstance) == Object) this.hls.destroy();
            this.hlsInstance = null;
            this.videoEl.src = '';
        },
        //-----------------------------------------------------------------
        // START TIMEOUT
        //-----------------------------------------------------------------

        startTimeout() {
            if (this.videoTimeout) {
                this.resetTimeout();
                this.timeoutInstance = setTimeout(this.pauseVideo, Number(this.videoTimeout));
            }
        },
        //-----------------------------------------------------------------
        // RESET TIMEOUT
        //-----------------------------------------------------------------

        resetTimeout() {
            clearTimeout(this.timeoutInstance);
            this.timeoutInstance = null;
        }
    }
});