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
                class="video-player-plyr-error">

                <div>
                    <i class="fa fa-warning"></i>
                    <p>Sorry! We're experiencing technical difficulties with this surfcam. We'll have it back up ASAP.</p>
                </div>
            </div>

            <!-- WATERMARK -->
            <div class="video-player-plyr-watermark"></div>

            <!-- VIDEO -->
            <video
                autoplay
                controls
                crossorigin
                muted
                playsinline
                ref="video"
                :poster="poster"
                width="100%">
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
            videoTimeout: null
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
            if (this.source) {
                this.loadVideo(this.source); // when source changes, load new video
            } else {
                this.unloadVideo(); // reset
            }
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

            // setup timeout reset on play
            this.playerInstance.on('play', () => {
                this.startTimeout();
            });

            // TODO: show loader on stall (for non hls which has a delay)
            // this.playerInstance.on('stalled', (event) => {
                // console.log('stalled! '+event);
            // });

            // CONTROLS SHOWN
            this.playerInstance.on('controlsshown', (event) => {
                this.$emit('show-controls', true);
                this.showControls = true;
            });

            // CONTROLS HIDDEN
            this.playerInstance.on('controlshidden', (event) => {
                this.$emit('show-controls', false);
                this.showControls = false;
            });
        },
        //==================================================
        // LOAD VIDEO
        //==================================================

        loadVideo(path) {
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
        //==================================================
        // UNLOAD VIDEO
        //==================================================

        unloadVideo() {
            this.resetTimeout();
            this.hlsInstance = null;
            this.videoEl.src = '';
        },
        //==================================================
        // START TIMEOUT
        //==================================================

        startTimeout() {
            this.resetTimeout();
            this.videoTimeout = setTimeout(() => {
                this.playerInstance.pause();
                this.resetTimeout();
            }, 300000); // 300000ms = 5 minute timeout
        },
        //==================================================
        // RESET TIMEOUT
        //==================================================

        resetTimeout() {
            clearTimeout(this.videoTimeout);
            this.videoTimeout = null;
        }
    }
});