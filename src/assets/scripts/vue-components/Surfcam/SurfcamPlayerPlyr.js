/*
    SURFCAM PLAYER PLYR
    updated: 29.07.19, 11.07.19, 27.02.19, 26.11.18

    - HLS API: https://hls-js.netlify.com/api-docs/

    USAGE:
        <surfcam-player-plyr
            :muted="false"
            :video-timeout="300"
            :controls="['duration']">
        </surfcam-player-plyr>
*/
//-----------------------------------------------------------------
// VIDEO PLAYER
//
// 1. component will either load video stream via selectedVideo (API)
// 2. OR component will load stream through props set on the template
//-----------------------------------------------------------------

Vue.component('surfcam-player-plyr', {
    template: `
        <div class="video-player-plyr collapse-sm-down">

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
            <!-- <div class="video-player-watermark"></div> -->

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
        controls: {
            type: Array,
            required: false,
            default: () => []
        },
        muted: {
            type: Boolean,
            default: true
        },
        videoTimeout: {
            type: Number,
            default: 0 // 300 secs = 5 mins
        }
    },
    data() {
        return {
            errors: false,
            playerInstance: null,
            poster: '/assets/img/layout/placeholder-video-1280x720.svg',
            hlsInstance: null,
            showControls: null,
            videoEl: null,
            videoObj: null,
            theatreMode: false,
            timeoutInstance: null
        }
    },
    mounted() {
        this.videoEl = this.$refs.video;
        // this.initPlayer();

        // https://github.com/vuejs/vue/issues/6887
        if (!this.muted) this.videoEl.removeAttribute('muted');

        // WIDGET CALLS THIS
        bus.$on('loadVideo', this.loadVideo);
        bus.$on('initPlayer', this.initPlayer);
    },
    beforeDestroy() {
        this.playerInstance.destroy();
        this.playerInstance = null;
    },
    methods: {
        initPlayer() {

            // https://github.com/sampotts/plyr/blob/master/controls.md
            const controlDefaults = [
                'play-large', // The large play button in the center
                // 'restart', // Restart playback
                // 'rewind', // Rewind by the seek time (default 10 seconds)
                'play', // Play/pause playback
                // 'fast-forward', // Fast forward by the seek time (default 10 seconds)
                // 'progress', // The progress bar and scrubber for playback and buffering
                // 'current-time', // The current time of playback
                // 'duration', // The full duration of the media
                // 'mute', // Toggle mute
                'volume', // Volume control
                // 'captions', // Toggle captions
                // 'settings', // Settings menu
                // 'pip', // Picture-in-picture (currently Safari only)
                // 'airplay', // Airplay (currently Safari only)
                'fullscreen', // Toggle fullscreen
            ];

            const showForReplays = this.controls.includes('progress', 'duration') ? '' : 'hidden';

            // https://github.com/sampotts/plyr/blob/master/CONTROLS.md
            const controlsHTML = `
                <div class="plyr__controls">

                    <button type="button" class="plyr__control mr-auto" aria-label="Play, {title}" data-plyr="play">
                        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg>
                        <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg>
                        <span class="label--pressed plyr__tooltip" role="tooltip">Pause</span>
                        <span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span>
                    </button>

                    <div class="plyr__progress w-100 ml-2 mr-4" ${showForReplays}>
                        <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
                        <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
                        <span role="tooltip" class="plyr__tooltip">00:00</span>
                    </div>

                    <div class="plyr__time plyr__time--duration mr-2" aria-label="Duration" ${showForReplays}>
                        00:00
                    </div>

                    <button type="button" class="plyr__control mr-1" data-plyr="fullscreen">
                        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-exit-fullscreen"></use></svg>
                        <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-enter-fullscreen"></use></svg>
                        <span class="label--pressed plyr__tooltip" role="tooltip">Exit fullscreen</span>
                        <span class="label--not-pressed plyr__tooltip" role="tooltip">Enter fullscreen</span>
                    </button>

                    <button id="plyr-btn-expand" type="button" class="plyr__control" data-plyr="fullscreen" style="padding-top: 2px; padding-bottom: 2px;">
                        <small><b><span class="text">EXPAND</span></b></small>&nbsp;
                        <i class="fa fa-arrows-h"></i>
                        <span role="tooltip" class="plyr__tooltip">
                            <span class="text">Expand screen</span>
                        </span>
                    </button>

                </div>
            `;

            // merge additional external prop controls
            // const controls = controlDefaults.concat(this.controls);
            const controls = controlsHTML;

            this.playerInstance = new Plyr(this.videoEl, {
                controls,
                clickToPlay: true,
                displayDuration: false,
                hideControls: false // Show controls on init.
            });

            // ON PLAY
            this.playerInstance.on('play', this.playVideo);

            // ON PAUSE
            this.playerInstance.on('pause', this.pauseVideo);
        },
        //-----------------------------------------------------------------
        // LOAD VIDEO
        // https://hls-js.netlify.com/api-docs/
        //-----------------------------------------------------------------

        loadVideo(video_obj) {
            const isMp4 = video_obj.format == 'mp4';

            this.videoObj = video_obj; // store object event from bus

            this.poster = video_obj.image; // set poster - can't set until https on images - Safari doesn't like it
            // this.poster = '/assets/img/layout/placeholder-video-logo.svg';
            // this.poster = '/assets/img/layout/placeholder-video-1280x720.svg'; // fix for short term

            // REPLAYS OR IOS
            // For more Hls.js options, see https://github.com/dailymotion/hls.js
            if (!Hls.isSupported() || isMp4) { // hls can only handle streams, not mp4s
                this.videoEl.src = video_obj.stream; // eg. iOS

                // Errors for non-hls only (iOS)
                this.playerInstance.on('error', (event) => {
                    // this.$emit('log-errors');
                    // this.errors = true; // uncomment this when thumbnails are HTTPS - errors occur with it
                    this.poster = '/assets/img/layout/placeholder-video-1280x720.svg'; // iOS fix for weirdly large height image
                });
            }

            // LIVE
            else {
                this.hlsInstance = new Hls();
                this.hlsInstance.loadSource(video_obj.stream);
                this.hlsInstance.attachMedia(this.videoEl);

                // Errors for hls only
                this.hlsInstance.on(Hls.Events.ERROR, (event, data) => {
                    if (data.fatal) {
                        // this.$emit('log-errors');
                        // there's a bug which causes error data not to write immediately, timeout solves this
                        setTimeout(() => {
                            this.errors = true;
                            this.poster = '/assets/img/layout/placeholder-video-1280x720.svg'; // iOS fix for weirdly large height image
                        }, 100);
                    }
                });
            }
            this.startTimeout(); // start timer until pause
        },
        //-----------------------------------------------------------------
        // PLAY VIDEO
        //-----------------------------------------------------------------

        playVideo() {

            // Hide controls after a short time.
            // https://codepen.io/fullkornslimpa/pen/EpmKga?editors=1010
            setTimeout(() => {

                const playerEl = this.playerInstance.elements.container;
                let playerHideTimeout;

                // Immediately hide the controls via class removal.
                playerEl.classList.add('plyr--hide-controls');

                function hideControls() {
                    playerEl.classList.add('plyr--hide-controls');
                }

                function showControls() {
                    playerEl.classList.remove('plyr--hide-controls');
                }

                // Mouse enter.
                playerEl.addEventListener('mouseover', showControls);

                // Touchstart (hide manually after 3s)
                playerEl.addEventListener('touchstart', function() {
                    showControls();
                    clearTimeout(playerHideTimeout)
                    playerHideTimeout = setTimeout(hideControls, 3000);
                });

                // Mouse leave.
                playerEl.addEventListener('mouseout', hideControls);

            }, 5000);

            // Setup theatre mode
            $('#plyr-btn-expand').on('click', this.onTheatreMode);

            // Start timeout for pausing video after idle time.
            this.startTimeout();

            if (this.hlsInstance === 'RELOAD_IT')
                this.loadVideo(this.videoObj);
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

        // unloadVideo() {
        //     this.resetTimeout();
        //     if (this.hlsInstance && typeof(this.hlsInstance) == Object) this.hls.destroy();
        //     this.hlsInstance = null;
        //     this.videoEl.src = '';
        // },
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
            this.errors = false; // reset
        },

        //-----------------------------------------------------------------
        // THEATRE MODE FOR PLYR
        //-----------------------------------------------------------------

        onTheatreMode() {
            const $expandBtn = $('#plyr-btn-expand');
            const $expandBtnText = $('small .text', $expandBtn);
            const $expandBtnIcon = $('.fa', $expandBtn);
            const $expandBtnTooltip = $('.plyr__tooltip > .text', $expandBtn);
            const $heading = $('.page-heading');
            const $plyr = $('#surfcam-player-plyr');
            const $plyrHolder = $('#surfcam-player-plyr-holder');
            const $top = $('#top-contents-wrapper');

            // Scroll to top of main body to avoid page jump.
            $.scrollTo($('.main-body').offset().top - 74, 0);

            if (!this.theatreMode) {
                $expandBtnText.text('SHRINK');
                $expandBtnTooltip.text('Shrink screen');
                $expandBtnIcon.removeClass('fa-arrows-h').addClass('fa-compress fa-rotate-45');

                $top.find('.spacer').hide();
                $('#vue-app > div > h2').removeClass('my-4').addClass('mb-4 mt-0');
                $heading.insertBefore('.main-body > .container > .row');
                $top.insertAfter($heading);
                $plyr.insertAfter($top).addClass('mb-4');
            }
            else {
                $expandBtnText.text('EXPAND');
                $expandBtnTooltip.text('Expand screen');
                $expandBtnIcon.removeClass('a-compress fa-rotate-45').addClass('fa-arrows-h');

                $top.find('.spacer').show();
                $('#vue-app > div > h2').removeClass('mb-4 mt-0').addClass('my-4');
                $heading.prependTo('.main-body > .container > .row > .col-lg-8');
                $top.insertAfter($heading);
                $plyr.appendTo($plyrHolder).removeClass('mb-4');
            }

            // Toggle theatreMode.
            this.theatreMode = !this.theatreMode;
        }
    }
});