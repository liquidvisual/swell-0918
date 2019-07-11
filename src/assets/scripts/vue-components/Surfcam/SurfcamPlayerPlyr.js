/*
    SURFCAM PLAYER PLYR
    updated: 11.07.19, 27.02.19, 26.11.18

    USAGE:
        <surfcam-player-plyr
            :muted="false"
            :video-timeout="300">
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
        //-----------------------------------------------------------------
        // INIT
        // https://support.jwplayer.com/customer/portal/articles/1480872
        // https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayernext
        //-----------------------------------------------------------------

        initPlayer(command) {

            log(':: initPlayer() ::');
            log('LIMITED DURATION: '+(command == 'limitDuration'));

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
                    // 'mute', // Toggle mute
                    'volume', // Volume control
                    // 'captions', // Toggle captions
                    // 'settings', // Settings menu
                    // 'pip', // Picture-in-picture (currently Safari only)
                    // 'airplay', // Airplay (currently Safari only)
                    'fullscreen', // Toggle fullscreen
                ],
                clickToPlay: true,
                displayDuration: false
            });

            // setup timeout reset on play
            this.playerInstance.on('play', (event) => {
                if (command == 'limitDuration') this.startTimeout();
                this.errors = false; // reset
            });
        },
        //-----------------------------------------------------------------
        // LOAD VIDEO
        //-----------------------------------------------------------------

        loadVideo(video_obj) {
            var isMp4 = video_obj.format == 'mp4';

            // this.poster = video_obj.image; // set poster - can't set until https on images - Safari doesn't like it
            this.poster = '/assets/img/layout/placeholder-video-1280x720.svg'; // fix for short term

            // For more Hls.js options, see https://github.com/dailymotion/hls.js
            if (!Hls.isSupported() || isMp4) { // hls can only handle streams, not mp4s
                this.videoEl.src = video_obj.stream; // eg. iOS

                // Errors for non-hls only (iOS)
                this.playerInstance.on('error', (event) => {
                    // this.$emit('log-errors');
                    this.errors = true;
                    this.poster = '/assets/img/layout/placeholder-video-1280x720.svg'; // iOS fix for weirdly large height image
                });
            }
            else {
                this.hlsInstance = new Hls();
                this.hlsInstance.loadSource(video_obj.stream);
                this.hlsInstance.attachMedia(this.videoEl);

                // Errors for hls only
                this.hlsInstance.on(Hls.Events.ERROR, (event, data) => {
                    // if (data.fatal) this.$emit('log-errors');
                    if (data.fatal) {
                        this.errors = true;
                        this.poster = '/assets/img/layout/placeholder-video-1280x720.svg'; // iOS fix for weirdly large height image
                    }
                });
            }
            this.startTimeout(); // start timer until pause
        },
        //-----------------------------------------------------------------
        // UNLOAD VIDEO
        //-----------------------------------------------------------------

        unloadVideo() {
            this.resetTimeout();
            this.hlsInstance = null;
            this.videoEl.src = '';
        },
        //-----------------------------------------------------------------
        // START TIMEOUT
        //-----------------------------------------------------------------

        startTimeout() {
            if (this.videoTimeout) {
                this.resetTimeout();
                this.timeoutInstance = setTimeout(() => {
                    this.playerInstance.pause();
                    this.resetTimeout();
                }, Number(this.videoTimeout * 1000)); // 300 * 1000 = 300000ms = 5 minute timeout
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