/*
    SURFCAM PLAYER VIDEO JS
    updated: 09.11.20

    * Vue example from docs: https://docs.videojs.com/tutorial-vue.html
    * video fit: https://stackoverflow.com/questions/18169473/video-js-size-to-fit-div
    * https://codepen.io/heff/pen/EarCt
    * extend controls: https://github.com/videojs/video.js/issues/3473
    * midroll lead: https://stackoverflow.com/questions/48406996/show-mid-roll-ads-in-video-player-using-plugin
    * Jira: https://swellnet.atlassian.net/jira/software/projects/WV2/boards/37?selectedIssue=WV2-6
    * events: https://docs.videojs.com/docs/api/player.html#Eventserror

    USAGE:

        <surfcam-player-video-js
            id="surfcam-player"
            :options="{
                ads: {
                    enabled: true,
                    cooldown: 20*1000,
                    midrolls: 2,
                    tagUrl: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=',
                    timeout: true
                },
                autoplay: true,
                error: {
                    heading: "Some heading text can go here",
                    body: "Sorry! We're experiencing technical difficulties with this surfcam. We'll have it back up ASAP.",
                },
                inactivityTimeout: 5*60*1000,
                muted: true,
                pauseTimeout: 5*60*1000,
                watermark: false,
                watermarkPosition: 'tr'
            }"
        >
        </surfcam-player-video-js>
*/
//-----------------------------------------------------------------
// VIDEO PLAYER
//
// 1. component will either load video stream via selectedVideo (API)
// 2. OR component will load stream through props set on the template
//-----------------------------------------------------------------

Vue.component('surfcam-player-video-js', {
    template: `
        <div
            id="surfcam-player"
            class="video-js-player collapse-sm-down"
        >
            <!-- ERRORS -->
            <div
                v-show="errors"
                class="video-player-overlay video-player-overlay-error"
            >
                <div class="video-player-overlay-inner">
                    <h3>{{ options.error?.heading }}</h3>
                    <p>{{ options.error?.body }}</p>
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
    `,

    //-----------------------------------------------------------------
    // PROPS
    //-----------------------------------------------------------------

    props: {
        options: {
            type: Object,
            default: () => ({})
        }
    },

    //-----------------------------------------------------------------
    // DATA
    //-----------------------------------------------------------------

    data() {
        return {
            adCooldownTimeoutInstance: null,
            errors: false,
            midrollCount: 0,
            prerollComplete: null,
            pauseTimeoutInstance: null,
            playerInstance: null,
            poster: '/assets/img/layout/placeholder-video-1280x720.svg',
            startEvent: 'click', // from SDK Autoplay example
            theatreMode: false,
            userActive: null, // for logo placement with controls
            videoEl: null,
            videoObj: null,

            defaultOptions: {
                ads: {
                    enabled: false
                },
                autoplay: true,
                bigPlayButton: true,
                children: { // https://github.com/videojs/video.js/blob/master/docs/guides/components.md#default-component-tree
                    controlBar: {
                        audioTrackButton: false,
                        captionsButton: false,
                        fullscreenToggle: true,
                        pictureInPictureToggle: false,
                        subsCapsButton: false,
                        volumePanel: false
                    }
                },
                controls: true,
                debug: true,
                inactivityTimeout: 5000,
                muted: true,
                pauseTimeout: 5*60*1000,
                preload: 'auto',
                volumePanel: false,
                watermark: false,
                watermarkPosition: 'tr',
                width: '100%'
            }
        }
    },

    //-----------------------------------------------------------------
    // COMPUTED
    //-----------------------------------------------------------------

    computed: {
        mergedOptions() {

            const defOptions = Object.assign({}, this.defaultOptions, this.options);

            return defOptions;
            // return {
                // ...this.defaultOptions,
                // ...this.options,
                // children: {
                //     controlBar: {
                //         ...this.defaultOptions.children.controlBar,
                //         ...(this.options.children && this.options.children.controlBar)
                //     }
                // }
            // }
        }
    },

    //-----------------------------------------------------------------
    // MOUNTED
    //-----------------------------------------------------------------

    mounted() {

        // Store video element.
        this.videoEl = this.$refs.videoPlayer;

        // WIDGET CALLS THIS
        bus.$on('initPlayer', this.initPlayer);
        bus.$on('loadVideo', this.loadVideo);
    },

    //-----------------------------------------------------------------
    // BEFORE DESTROY
    //-----------------------------------------------------------------

    beforeDestroy() {
        this.clearPauseTimeout();

        if (this.playerInstance) {
            this.playerInstance.dispose();
            this.playerInstance = null;
        }
    },

    //-----------------------------------------------------------------
    // METHODS
    //-----------------------------------------------------------------

    methods: {

        //-----------------------------------------------------------------
        // CLEAR PAUSE TIMEOUT
        //-----------------------------------------------------------------

        clearPauseTimeout() {
            // console.log('Pause Timeout cleared.');
            clearTimeout(this.pauseTimeoutInstance);
            // this.errors = false; // reset --> this shouldn't be responsible for errors.
        },

        //-----------------------------------------------------------------
        // CREATE EXPAND BUTTON
        //-----------------------------------------------------------------

        createExpandButton(player) {

            const Button = videojs.getComponent('Button');

            const MyButton = videojs.extend(Button, {
                constructor: function() {
                    Button.apply(this, arguments);
                    this.addClass('vjs-button');
                    this.addClass('vjs-control');
                    this.addClass('btn-expand');
                    this.controlText('Toggle Expand');
                },
                handleClick: event => {
                    this.onTheatreMode();
                    console.log('event', event.currentTarget);
                    const el = event.currentTarget.querySelector('.text');
                    el.textContent = this.theatreMode ? 'SHRINK' : 'EXPAND';
                }
            });

            // Register button.
            videojs.registerComponent('MyButton', MyButton);

            // Add expand button to controls.
            const expandBtn = player.getChild('controlBar').addChild('myButton', {});
            const expandBtnEl = expandBtn.el();
            expandBtnEl.innerHTML = '<span class="text mr-1">EXPAND</span> <i class="fa fa-arrows-h"></i>';
        },

        //-----------------------------------------------------------------
        // INIT PLAYER
        //-----------------------------------------------------------------

        initPlayer() {

            // Init video.js player instance.
            this.playerInstance = videojs(this.videoEl, this.mergedOptions);

            // CREATE EXPAND BUTTON
            this.createExpandButton(this.playerInstance);

            // SETUP ADS (might go into loadVideo)
            this.setupAds();

            // ON PLAY (VIDEO SUCCESS)
            this.playerInstance.on('play', () => {
                this.onPlayVideo();

                // SETUP USER INACTIVITY
                this.setupUserInactivity();
            });

            // ON PAUSE
            this.playerInstance.on('pause', this.onPauseVideo);

            // ON ERROR
            this.playerInstance.on('error', error => {
                console.log('Oops! There were errors loading video:', error);
                this.clearPauseTimeout();
                this.errors = true; // uncomment this when thumbnails are HTTPS - errors occur with it
                // this.poster = '/assets/img/layout/placeholder-video-1280x720.svg'; // iOS fix for weirdly large height image
                // this.$emit('log-errors');
            });

            // ON RESET
            this.playerInstance.on('reset', () => this.errors = false);
        },

        //-----------------------------------------------------------------
        // LOAD VIDEO
        //-----------------------------------------------------------------

        loadVideo(videoObj) {

            const videoType = videoObj.format === 'mp4' ? 'video/mp4' : 'application/x-mpegURL';

            this.videoObj = videoObj; // Store object event from event bus.
            this.poster = videoObj.image; // Old note ? = set poster - can't set until https on images - Safari doesn't like it
            // this.poster = '/assets/img/layout/placeholder-video-logo.svg';
            // this.poster = '/assets/img/layout/placeholder-video-1280x720.svg'; // fix for short term

            // Set source of video or stream.
            this.playerInstance.src({
                type: videoType,
                src: videoObj.stream //'/assets/img/content/loop-test.mp4'
            });

            // Time until player pause.
            this.startPauseTimeout();
        },

        //-----------------------------------------------------------------
        // THEATRE MODE
        // JQuery not ideal but saves a tonne of time.
        //-----------------------------------------------------------------

        onTheatreMode() {
            const $body = $('body');
            const $heading = $('.page-title');
            const $player = $('#surfcam-player');
            const $playerHolder = $('#surfcam-player-holder');
            const $top = $('#top-contents-wrapper');

            // Scroll to top of main body to avoid page jump.
            $.scrollTo($('.main-body').offset().top - 74, 0);

            if (!this.theatreMode) {
                $top.find('.spacer').hide();
                $('#vue-app > div > h2').removeClass('my-4').addClass('mb-4 mt-0');
                $heading.prependTo('.main-body > .container');
                $top.insertAfter($heading);
                $player.insertAfter($top).addClass('mb-4');
                $body.addClass('has-plyr-expanded');
            }
            else {
                $top.find('.spacer').show();
                $('#vue-app > div > h2').removeClass('mb-4 mt-0').addClass('my-4');
                $heading.prependTo('.main-body > .container .col-lg-8');
                $top.insertAfter($heading);
                $player.appendTo($playerHolder).removeClass('mb-4');
                $body.removeClass('has-plyr-expanded');
            }

            // Toggle theatreMode.
            this.theatreMode = !this.theatreMode;
        },

        //-----------------------------------------------------------------
        // PAUSE VIDEO
        //-----------------------------------------------------------------

        onPauseVideo() {
            this.clearPauseTimeout();
            // console.log('onPauseVideo');
        },

        //-----------------------------------------------------------------
        // PLAY VIDEO
        //-----------------------------------------------------------------

        onPlayVideo() {
            this.startPauseTimeout();
            // console.log('onPlayVideo');
        },

        //-----------------------------------------------------------------
        // SETUP ADS
        // https://github.com/googleads/videojs-ima
        //-----------------------------------------------------------------

        setupAds() {
            if (this.mergedOptions.ads &&
                this.mergedOptions.ads.enabled &&
                this.mergedOptions.ads.tagUrl) {

                // Run IMA ads preroll.
                this.playerInstance.ima({
                    adTagUrl: this.mergedOptions.ads.tagUrl,
                });

                //==================================================
                // ON AD END
                // Autoplay video after ad run.
                // http://videojs.github.io/videojs-contrib-ads/integrator/api.html
                //==================================================

                this.playerInstance.on('adend', () => {

                    console.log('AD ENDED...');

                    // To determine whether preroll or midroll ad fails below.
                    this.prerollComplete = true;

                    // Force player to play.
                    this.playerInstance.play();

                    // If midrolls...
                    if (this.mergedOptions.ads.midrolls !== -1) {

                        // Clear timeout to be safe.
                        clearTimeout(this.adCooldownTimeoutInstance);

                        // Cool down before next ad.
                        this.adCooldownTimeoutInstance = setTimeout(() => {

                            // If midrolls left, play them.
                            if (this.midrollCount < parseInt(this.mergedOptions.ads.midrolls)) {
                                this.playerInstance.pause();
                                this.playerInstance.ima.changeAdTag(this.options.ads.tagUrl);
                                this.playerInstance.ima.requestAds();
                                this.midrollCount += 1;
                                console.log('midrollCount', this.midrollCount);
                            }

                            // Else midrolls completed, timeout.
                            else if (this.mergedOptions.ads.timeout) {
                                timeoutPlayer();
                            }
                        }, this.mergedOptions.ads.cooldown);
                    }
                });

                //==================================================
                // ON ADS ERROR
                // https://github.com/googleads/videojs-ima/issues/690
                //==================================================

                this.playerInstance.on('adserror', err => {

                    //==================================================
                    // The midroll has failed. Timeout immediately.
                    //==================================================

                    if (this.prerollComplete) {
                        console.warn('Midroll not found. Player will timeout immediately.');
                        timeoutPlayer();
                    }

                    //==================================================
                    // The preroll has failed. Play video but timeout after cooldown.
                    //==================================================

                    else {

                        console.warn('Preroll not found. Player will timeout shortly after play.');

                        // Clear timeout to be safe.
                        clearTimeout(this.adCooldownTimeoutInstance);

                        // Timeout earlier.
                        this.adCooldownTimeoutInstance = setTimeout(() => {
                            timeoutPlayer();
                        }, this.mergedOptions.ads.cooldown);
                    }

                    console.log('AD ERROR...', err.data.AdError.g, err.data.AdError.g.errorCode);
                });

                //==================================================
                // TIMEOUT PLAYER
                //==================================================

                const timeoutPlayer = () => {

                    // Clear player.
                    this.playerInstance.dispose();
                    this.playerInstance.ima = null;
                    this.playerInstance = null;

                    const playerOverlayTimeoutEl = document.getElementById('video-player-overlay-timeout');

                    // Reveal timeout overlay.
                    playerOverlayTimeoutEl.removeAttribute('hidden');

                    // Clicking player reloads video/page and reinits.
                    playerOverlayTimeoutEl.addEventListener('click', () => location.reload());
                }

                //==================================================
                // TOUCH DEVICES
                // Handle autoplay on touch devices (from SDK example).
                //
                // From docs: On mobile devices, you must call initializeAdDisplayContainer as the result
                // of a user action (e.g. button click). If you do not make this call, the SDK
                // will make it for you, but not as the result of a user action.
                //==================================================

                if (navigator.userAgent.match(/iPhone/i) ||
                    navigator.userAgent.match(/iPad/i) ||
                    navigator.userAgent.match(/Android/i)) {
                        this.startEvent = 'touchend';
                }

                const initAdDisplayContainer = () => {
                    this.playerInstance.ima.initializeAdDisplayContainer();
                    this.videoEl.removeEventListener(this.startEvent, initAdDisplayContainer);
                }

                this.videoEl.addEventListener(this.startEvent, initAdDisplayContainer);
            }
        },

        //-----------------------------------------------------------------
        // SETUP USER INACTIVITY
        // (Not related to the userInactivity option)
        //-----------------------------------------------------------------

        setupUserInactivity() {

            //================================================
            // UNPAID USERS HAVE OFF-FOCUS EVENTS (INTRUSIVE)
            //================================================

            if (this.mergedOptions.ads &&
                this.mergedOptions.ads.enabled &&
                this.mergedOptions.ads.tagUrl) {

                // Start timeout when user isn't focused.
                window.addEventListener('blur', () => {
                    if (this.playerInstance) {
                        try {
                            // console.log('Pausing Ad');
                            this.playerInstance.pause();
                            this.playerInstance.ima.pauseAd();
                        }
                        catch(err) {
                            console.warn("playerInstance or ima not available. Cannot pause.");
                        }
                    }
                });

                // Return focus to window. -- perhaps not necessary anymore
                window.addEventListener('focus', () => {
                    if (this.playerInstance) {
                        try {
                            // Since there's no way to reliably tell if a user has invoked the play event we disable for non-autoplay.
                            if (this.mergedOptions.autoplay) {

                                console.log('Resuming ad or video.');
                                this.playerInstance.play();
                                this.playerInstance.ima.resumeAd();
                            }
                            else {
                                this.playerInstance.ima.resumeAd();
                            }
                        }
                        catch(err) {
                            console.warn("playerInstance or ima not available. Cannot resume.");
                        }
                    }
                });
            }

            //================================================
            // PAID USERS HAVE
            //================================================

            else {

                document.addEventListener('visibilitychange', () => {
                    // document.title = document.hidden ? "I'm away" : "I'm here";

                    if (document.hidden) {

                        console.log('Resetting player');
                        this.clearPauseTimeout();
                        // https://github.com/googleads/videojs-ima/issues/430
                        this.playerInstance.reset();
                    }
                    else {
                        this.startPauseTimeout();
                        this.loadVideo(this.videoObj);
                        console.log('Loading Video');
                    }
                });
            }

            //-----------------------------------------------------------------
            // SETUP USER INACTIVITY
            //-----------------------------------------------------------------

            // ON USER ACTIVE
            // this.playerInstance.on('useractive', () => this.userActive = true);

            // ON USER INACTIVE
            // this.playerInstance.on('userinactive', () => this.userActive = false);
        },

        //-----------------------------------------------------------------
        // START PAUSE TIMEOUT
        // Start timeout for pausing video after idle time.
        // Only works for streams with no ads (since ads negate pause need).
        //-----------------------------------------------------------------

        startPauseTimeout() {
            if (this.mergedOptions.pauseTimeout &&
                !(this.mergedOptions.ads && this.mergedOptions.ads.enabled && this.mergedOptions.ads.tagUrl)) {

                // console.log('New Pause Timeout starting.', Number(this.mergedOptions.pauseTimeout));
                this.clearPauseTimeout();
                this.pauseTimeoutInstance = setTimeout(() => this.playerInstance.pause(), parseInt(this.mergedOptions.pauseTimeout));
            }
        }
    }
});