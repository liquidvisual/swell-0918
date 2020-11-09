// /*


// !!! Couldn't get FlowPlayer to work with Vue component, so created extra template with vanilla JS !!!



//     SURFCAM PLAYER FLOW
//     updated: 04.07.19

//     USAGE:
//         <surfcam-player-flow
//             :muted="false"
//             :video-timeout="300">
//         </surfcam-player-flow>

    // {% unless page.user_type == 'paid' %}
    //     <link rel="stylesheet" href="//cdn.flowplayer.com/releases/native/stable/style/flowplayer.css">
    //     <script src="//cdn.flowplayer.com/releases/native/stable/flowplayer.min.js"></script>
    //     <!-- OPTIONAL PLUGINS -->
    //     <script src="//cdn.flowplayer.com/releases/native/stable/plugins/hls.min.js"></script>
    //     <script src="//imasdk.googleapis.com/js/sdkloader/ima3.js"></script>
    //     <script src="//cdn.flowplayer.com/releases/native/stable/plugins/ads.min.js"></script>
    //     <!-- <script src="//cdn.flowplayer.com/releases/native/stable/plugins/airplay.min.js"></script> -->
    //     <!-- <script src="//cdn.flowplayer.com/releases/native/stable/plugins/chromecast.min.js"></script> -->
    //     <!-- <script src="//cdn.flowplayer.com/releases/native/edge/plugins/keyboard.min.js"></script> -->
    // {% endunless %}
// */
// //-----------------------------------------------------------------
// // VIDEO PLAYER
// //
// // 1. component will either load video stream via selectedVideo (API)
// // 2. OR component will load stream through props set on the template
// //-----------------------------------------------------------------

// Vue.component('surfcam-player-flow', {
//     template: `
//         <div class="video-player-flow collapse-sm-down">

//             <!-- ERRORS -->
//             <div
//                 v-if="errors"
//                 class="video-player-overlay video-player-error"
//             >
//                 <div video-player-overlay-inner>
//                     <i class="fa fa-warning"></i>
//                     <p>Sorry! We're experiencing <b>technical difficulties</b> with this surfcam. We'll have it back up ASAP.</p>
//                 </div>
//             </div>

//             <!-- WATERMARK -->
//             <div class="video-player-watermark"></div>

//             <!-- PLAYER -->
//             <div
//                 ref="playerEl"
//                 class="use-thin-controlbar use-controlbar-background"
//                 data-player-id="cad9d975-ccae-4757-88a3-a65ebb7419f8"
//             >
//             </div>

//         </div>
//     `,
//     props: {
//         muted: {
//             type: Boolean,
//             default: true
//         },
//         videoTimeout: {
//             type: Number,
//             default: 0 // 300 secs = 5 mins
//         }
//     },
//     data() {
//         return {
//             errors: false,
//             playerInstance: null,
//             poster: '/assets/img/layout/placeholder-video-1280x720.svg',
//             playerEl: null,
//             timeoutInstance: null
//         }
//     },
//     mounted() {
//         this.playerEl = this.$refs.playerEl;

//         // INDEX WIDGET CALLS THESE
//         bus.$on('initPlayer', this.initPlayer);
//         bus.$on('loadVideo', this.loadVideo);
//     },
//     beforeDestroy() {
//         this.playerInstance.destroy();
//         this.playerInstance = null;
//     },
//     methods: {
//         //-----------------------------------------------------------------
//         // INIT PLAYER
//         //-----------------------------------------------------------------

//         initPlayer(command) {

//             log(':: initPlayer() ::');
//             log('LIMITED DURATION: '+(command == 'limitDuration'));

//             this.playerInstance = flowplayer(this.playerEl,
//             {
//                 autoplay: true, // manually do it? - flowplayer won't show play icon when true
//                 hls: { native: true }, // https://flowplayer.com/help/plugins/hls#configuration
//                 loop: true,
//                 muted: this.muted,
//                 poster: this.poster,
//                 src: null, // test: '//streamer.swellnet.com.au/surfcams/byron.stream/playlist.m3u8'
//                 token: 'eyJraWQiOiJuN1JTclNTNVFBaTkiLCJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjIjoie1wiYWNsXCI6NixcImlkXCI6XCJuN1JTclNTNVFBaTlcIn0iLCJpc3MiOiJGbG93cGxheWVyIn0.M837aYfFdkiLKA1FSaPOL8GPip9MIlVOQkxkUDqXpfL15JKGpBEZB_kFNc3BDPeuXa8nJShZcGTXp2nhwOk7tA',
//                 ui: flowplayer.ui.NO_VOLUME_CONTROL | flowplayer.ui.NO_MUTE,
//                 ima: {
//                     ads: [
//                         {
//                             time: 0,
//                             adTag: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator='
//                         }
//                     ]
//                 },
//                 "plugins": [
//                     "ads"
//                 ]
//             });

//             // setup timeout reset on play
//             // this.playerInstance.on('play', (event) => {
//             //     if (command == 'limitDuration') this.startTimeout();
//             //     this.errors = false; // reset
//             // });
//         },
//         //-----------------------------------------------------------------
//         // LOAD VIDEO
//         //-----------------------------------------------------------------

//         loadVideo(video_obj) {
//             this.playerInstance.poster = video_obj.image;
//             this.playerInstance.setSrc(video_obj.stream);
//             this.playerInstance.play();

//             // Errors for non-hls only (iOS)
//             this.playerInstance.on('error', (event) => {
//                 this.$emit('log-errors');
//                 this.errors = true;
//                 this.playerInstance.poster = this.poster; // iOS fix for weirdly large height image - undo the above
//             });

//             // this.startTimeout(); // start timer until pause
//         },
//         //-----------------------------------------------------------------
//         // UNLOAD VIDEO
//         //-----------------------------------------------------------------

//         unloadVideo() {
//             this.resetTimeout();
//             this.playerInstance.setSrc('');
//         },
//         //-----------------------------------------------------------------
//         // START TIMEOUT
//         //-----------------------------------------------------------------

//         startTimeout() {
//             if (this.videoTimeout) {
//                 this.resetTimeout();
//                 this.timeoutInstance = setTimeout(() => {
//                     this.playerInstance.pause();
//                     this.resetTimeout();
//                 }, Number(this.videoTimeout * 1000)); // 300 * 1000 = 300000ms = 5 minute timeout
//             }
//         },
//         //-----------------------------------------------------------------
//         // RESET TIMEOUT
//         //-----------------------------------------------------------------

//         resetTimeout() {
//             clearTimeout(this.timeoutInstance);
//             this.timeoutInstance = null;
//         }
//     }
// });