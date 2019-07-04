/*
    SURFCAM PLAYER JW
    updated: 04.07.19, 26.11.18

    USAGE:
        <surfcam-player-jw
            :muted="false"
            :video-timeout="300">
        </surfcam-player-jw>
*/
//-----------------------------------------------------------------
// VIDEO PLAYER
//
// 1. component will either load video stream via selectedVideo (API)
// 2. OR component will load stream through props set on the template
//-----------------------------------------------------------------

Vue.component('surfcam-player-jw', {
    template: `
        <div class="video-player-jw collapse-sm-down"></div>
    `,
    props: {
        muted: {
            type: Boolean,
            default: true
        },
        videoTimeout: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            playerInstance: null,
        }
    },
    mounted() {

        // WIDGET CALLS THIS
        bus.$on('initPlayer', this.initPlayer);
        bus.$on('loadVideo', this.loadVideo);
    },

    beforeDestroy() {
        this.playerInstance.remove();
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

            var self = this; // used for onTime
            var videoTimeout = this.videoTimeout ? this.videoTimeout : 300; // used to limit video duration through pausing on account types

            this.playerInstance = jwplayer(this.$el);

            //==================================================
            // CONFIG
            //==================================================

            var player_conf = {
                androidhls: true,
                autostart: true,
                fallback: true,
                file: '.mp4', //stream ? stream : '.mp4',  // Fluke, player fails without this unless legit file
                image: '.jpg', //image ? image : '.jpg', // ^ as above
                mute: this.muted,
                // playlist: '',
                primary: 'html5',
                width: '100%',
                height: 421,
                repeat: true,
                stagevideo: false,
                events: {
                    onReady(e) {
                        window.swellnetElapsedTime = 0;
                    },
                    onTime(e) {
                        if (command == 'limitDuration') {

                            // log('LIVE Video Timer Started - ends vid at '+videoTimeout+'s');
                            if ((window.swellnetElapsedTime + e.position) >= videoTimeout) {
                                this.stop();
                            }
                        }
                    },
                    onPause(e) {
                        window.swellnetElapsedTime += this.getPosition();
                    }
                }
            }
            //==================================================
            // SETUP GO!
            //==================================================

            log('Video Player finished setting up')
            this.playerInstance.setup(player_conf);
        },
        //-----------------------------------------------------------------
        // LOAD VIDEO
        //-----------------------------------------------------------------

        loadVideo(video_obj) {
            log(':: loadVideo() ::');

            this.playerInstance.load([{
                file: video_obj.stream,
                image: video_obj.image,
                // playlist: video.playlist
            }]).play();
        }
    }
});