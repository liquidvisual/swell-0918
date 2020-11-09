/*
    SURFCAM PLAYER VIDEO JS
    updated: 09.11.20

    * Vue example from docs: https://docs.videojs.com/tutorial-vue.html
    * video fit: https://stackoverflow.com/questions/18169473/video-js-size-to-fit-div
    * https://codepen.io/heff/pen/EarCt
    * extend controls: https://github.com/videojs/video.js/issues/3473
    * midroll lead: https://stackoverflow.com/questions/48406996/show-mid-roll-ads-in-video-player-using-plugin

    USAGE:

        <surfcam-player-video-js
            id="surfcam-player"
            :options="{
                ads: {
                    enabled: true,
                    tagUrl: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator='
                },
                autoplay: true,
                inactivityTimeout: 5*60*1000
                muted: true,
                pauseTimeout: 5*60*1000,
                watermark: false
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
                v-if="errors"
                class="video-player-overlay video-player-overlay-error"
            >
                <div class="video-player-overlay-inner">
                    <i class="fa fa-warning"></i>
                    <p>Sorry! We're experiencing <b>technical difficulties</b> with this surfcam. We'll have it back up ASAP.</p>
                </div>
            </div>

            <!-- WATERMARK -->
            <div
                v-if="mergedOptions.watermark"
                class="video-player-watermark"
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
            errors: false,
            pauseTimeoutInstance: null,
            playerInstance: null,
            poster: '/assets/img/layout/placeholder-video-1280x720.svg',
            startEvent: 'click', // from SDK Autoplay example
            theatreMode: false,
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
            this.errors = false; // reset
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
                handleClick: () => {
                    this.onTheatreMode();
                }
            });

            // Register button.
            videojs.registerComponent('MyButton', MyButton);

            // Add expand button to controls.
            const expandBtn = player.getChild('controlBar').addChild('myButton', {});
            const expandBtnEl = expandBtn.el();
            expandBtnEl.innerHTML = '<span class="mr-1">EXPAND</span> <i class="fa fa-arrows-h"></i>';
        },

        //-----------------------------------------------------------------
        // INIT PLAYER
        //-----------------------------------------------------------------

        initPlayer() {

            // Init video.js player instance.
            this.playerInstance = videojs(this.videoEl, this.mergedOptions);

            // CREATE EXPAND BUTTON
            this.createExpandButton(this.playerInstance);

            // SETUP USER INACTIVITY
            // this.setupUserInactivity();

            // SETUP ADS (might go into loadVideo)
            this.setupAds();

            // ON PLAY
            this.playerInstance.on('play', this.onPlayVideo);

            // ON PAUSE
            this.playerInstance.on('pause', this.onPauseVideo);
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

            // Errors
            this.playerInstance.on('error', error => {
                // this.$emit('log-errors');
                console.log('Oops! There were errors loading video:', error);
                this.errors = true; // uncomment this when thumbnails are HTTPS - errors occur with it
                // this.poster = '/assets/img/layout/placeholder-video-1280x720.svg'; // iOS fix for weirdly large height image
            });

            // Time until player pause.
            this.startPauseTimeout();
        },

        //-----------------------------------------------------------------
        // THEATRE MODE FOR PLYR
        //-----------------------------------------------------------------

        onTheatreMode() {
            const $body = $('body');
            const $expandBtn = $('#plyr-btn-expand');
            const $expandBtnText = $('small .text', $expandBtn);
            const $expandBtnIcon = $('.fa', $expandBtn);
            const $expandBtnTooltip = $('.plyr__tooltip > .text', $expandBtn);
            const $heading = $('.page-title');
            const $player = $('#surfcam-player');
            const $playerHolder = $('#surfcam-player-holder');
            const $top = $('#top-contents-wrapper');

            // Scroll to top of main body to avoid page jump.
            $.scrollTo($('.main-body').offset().top - 74, 0);

            if (!this.theatreMode) {
                $expandBtnText.text('SHRINK');
                $expandBtnTooltip.text('Shrink screen');
                $expandBtnIcon.removeClass('fa-arrows-h').addClass('fa-compress fa-rotate-45');
                $top.find('.spacer').hide();
                $('#vue-app > div > h2').removeClass('my-4').addClass('mb-4 mt-0');
                $heading.prependTo('.main-body > .container');
                $top.insertAfter($heading);
                $player.insertAfter($top).addClass('mb-4');
                $body.addClass('has-plyr-expanded');
            }
            else {
                $expandBtnText.text('EXPAND');
                $expandBtnTooltip.text('Expand screen');
                $expandBtnIcon.removeClass('a-compress fa-rotate-45').addClass('fa-arrows-h');
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
        //-----------------------------------------------------------------

        setupAds() {

            // https://github.com/googleads/videojs-ima
            if (this.options.ads.enabled) {

                // Run IMA ads.
                this.playerInstance.ima({
                    adTagUrl: this.options.ads.tagUrl,
                    // debug: true
                });

                // Autoplay video after ad run.
                // http://videojs.github.io/videojs-contrib-ads/integrator/api.html
                this.playerInstance.on('adend', () => {

                    // Reset the pause timeout.
                    this.startPauseTimeout();

                    // Force player to play.
                    this.playerInstance.play();
                    console.log('AD ENDED...')
                });

                // Handle autoplay on touch devices (from SDK example).
                if (navigator.userAgent.match(/iPhone/i) ||
                    navigator.userAgent.match(/iPad/i) ||
                    navigator.userAgent.match(/Android/i)) {
                        this.startEvent = 'touchend';
                }

                // On mobile devices, you must call initializeAdDisplayContainer as the result
                // of a user action (e.g. button click). If you do not make this call, the SDK
                // will make it for you, but not as the result of a user action. For more info
                // see our examples, all of which are set up to work on mobile devices.
                const initAdDisplayContainer = () => {
                    this.playerInstance.ima.initializeAdDisplayContainer();
                    this.videoEl.removeEventListener(this.startEvent, initAdDisplayContainer);
                }

                this.videoEl.addEventListener(this.startEvent, initAdDisplayContainer);
            }
        },

        //-----------------------------------------------------------------
        // SETUP USER INACTIVITY
        //-----------------------------------------------------------------

        setupUserInactivity() {

            document.addEventListener('visibilitychange', () => {
                // document.title = document.hidden ? "I'm away" : "I'm here";

                if (document.hidden) {
                    this.clearPauseTimeout();

                    // https://github.com/googleads/videojs-ima/issues/430
                    this.playerInstance.reset();
                    this.playerInstance.ima = null;
                    console.log('Resetting player');
                }
                else {
                    this.loadVideo(this.videoObj);
                    console.log('Loading Video');

                    setTimeout(() => {
                        if (this.options.ads.enabled) {
                            if (this.playerInstance.ima) {
                                this.playerInstance.ima.changeAdTag(this.options.ads.tagUrl);
                                this.playerInstance.ima.requestAds();
                            }
                        }
                    }, 1000);
                }
            });
        },

        //-----------------------------------------------------------------
        // START PAUSE TIMEOUT
        // Start timeout for pausing video after idle time.
        //-----------------------------------------------------------------

        startPauseTimeout() {
            if (this.mergedOptions.pauseTimeout) {
                // console.log('New Pause Timeout starting.', Number(this.mergedOptions.pauseTimeout));
                this.clearPauseTimeout();
                this.pauseTimeoutInstance = setTimeout(() => this.playerInstance.pause(), Number(this.mergedOptions.pauseTimeout));
            }
        }
    }
});