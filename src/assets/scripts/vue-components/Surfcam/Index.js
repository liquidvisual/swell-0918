/*
    SURFCAM INDEX
    updated: 04.07.19, 10.09.18

    DEPENDENCIES
        https://unpkg.com/vue/dist/vue.js
        https://unpkg.com/axios/dist/axios.min.js
        https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js

    NOTES
        empty array for cams
        empty object for no replays at all ?

    KEEP FOR REFERENCE
        // var d = new Date();
        // var yesterday = d.setDate(d.getDate()-1);
        // this.date = { timeStamp: yesterday };
        // this.date = this.lastSevenDays[1]; // set initial option as selected
*/
//-----------------------------------------------------------------
// EVENT BUS
//-----------------------------------------------------------------

const bus = new Vue();

//-----------------------------------------------------------------
// UTILITY MIXINS
//-----------------------------------------------------------------

const utilities = {
    methods: {
        formatTime(time){
            return moment(time).format('hh:mma');
        }
    }
}
//-----------------------------------------------------------------
// SURFCAM WIDGET
//-----------------------------------------------------------------

Vue.component('surfcam-widget', {

    //-----------------------------------------------------------------
    // PROPS
    //-----------------------------------------------------------------

    props: {
        liveStream: String,
        liveStreamImage: String,
        liveStreamPlaylist: String,
        dataPath: String,
        surfcamId: String,
    },
    //-----------------------------------------------------------------
    // DATA
    //-----------------------------------------------------------------

    data() {
        return {
            attempts:          0, // log attempts where data returned blank
            date:              null, // 'date-select' will change this - altering api request string
            feed:              null,
            feedType:          null,
            feedLoading:       null,
            firstRun:          null,
            replaysDisabled:   null,
            rolledBack:        null, // use this to rollback dates if server fails on page load (not on user input)
            selectedTimeIndex: null, // changed by 'time-select' - used to move through thumbs via Flickity
        }
    },
    //-----------------------------------------------------------------
    // CREATED
    // alert watcher to fire new AJAX request on INIT
    // date-select will override this
    //-----------------------------------------------------------------

    created(){
        log('[created] - updating date');
        this.feedType = this.liveStream ? 'live' : 'replay'; // set the type for video-player and tabs

        //==============================
        // FOR REPLAYS TO WORK
        // ATTRS MUST BE SPECIFIED ON THE NODE
        //==============================

        if (this.dataPath && this.surfcamId) {
            this.date = { timeStamp: Date.now() } // spins up the app - goes to server
        } else {
            this.replaysDisabled = true;
            this.feed = false; // invoke the 2nd watcher
        }

        //==============================
        // BUS: ON SET TIME INDEX
        //==============================

        bus.$on('setTimeIndex', (index) => {
            log('setTimeIndex emitted on widget');
            this.selectedTimeIndex = index;
        });

        //==============================
        // BUS: ON SET TIME INDEX (interaction calls this explicitly)
        //==============================

        bus.$on('setURL', this.setURL);
    },
    //-----------------------------------------------------------------
    // WATCH - ORDER MATTERS
    //-----------------------------------------------------------------

    watch: {
        //==============================
        // 01. WATCH: DATE
        // When the date changes, get feed from server
        //==============================

        date(){
            if (!this.replaysDisabled) {
                var path = this.dataPath + this.surfcamId + '/' + moment(this.date.timeStamp).format('YYYY/MM/DD');
                log('[computed:date] Preparing New apiRequest: '+path);

                // :: loadData ::
                this.loadData(path); // request data, just don't loadVideo unless replay
            }
        },
        //==================================================
        // 02. RESET FEED POSITION
        // UPDATES selectTimeIndex -> triggers watcher -> selectVideo
        // ref: trigger watcher to update - self.feed.length-1; //0; // invoke watcher to init at start 0 vid
        //==================================================

        feed() {
            log('[watch:feed] feed changed');

            // emit a select time index to get video to change if on zero
            if (this.selectedTimeIndex === 0) {
                log('[watch:feed] feed changed - selectedTime is zero, skip 3rd watcher and invoke selectVideo');
                this.selectVideo();

            } else {
                log('[watch:feed] selectedTime needs to return to start, invoke 3rd watcher');
                this.selectedTimeIndex = 0; // reset time index when the feed reloads, back to beginning -> 3rd watcher will pick it up
            }

        if (this.firstRun && this.feedType == 'replay') this.setURL(); // has to be firstRun - first link is unsharable by design, too complex otherwise
        },
        //==============================
        // 03. WATCH: SELECTED TIME INDEX
        //==============================

        selectedTimeIndex(){
            log('----------------------------------------------');
            log('[watch:selectedTimeIndex] - selectedTimeIndex changed to: '+this.selectedTimeIndex);
            log('----------------------------------------------');
            this.selectVideo();
        }
    },
    //-----------------------------------------------------------------
    // METHODS
    //-----------------------------------------------------------------

    methods: {
        //==================================================
        // GET VIDEO FROM HASH
        //==================================================

        getVideoIdFromHash(){
            if (!this.firstRun) {
                var hashBang_arr = window.location.hash.split('/');
                var video_id = hashBang_arr[2];
                var feed = this.feed;

                for (var i = 0; i < feed.length; i++) {
                    if (feed[i].id == video_id) {
                        this.selectedTimeIndex = i;
                        log('HASH CHANGE selectedTimeIndex: '+this.selectedTimeIndex);

                        // need a timout to run after mounted (JQuery issue)
                        setTimeout(() => {
                            bus.$emit('selectThumbnail', this.selectedTimeIndex);
                        }, 1000); // 4ms browser standard?
                    }
                }
            }
        },
        //==================================================
        // SET URL FOR LIVE PAGES (OR HASH FOR REPLAY PAGES)
        //==================================================

        setURL() {
            log(':: setURL() :: - Adding Hash on user input');

            var hash = moment(this.date.timeStamp).format('YYYY-MM-DD') + '/' + this.feed[this.selectedTimeIndex].id;

            if (this.feedType == 'live') {
                var pathName = window.location.pathname;
                var lastChar = pathName.substr(pathName.length - 1);
                var slash = lastChar == '/' ? '' : '/';

                pathName += slash; // add a trailing slash if there isn't one

                // surfcams/knights/paid  +
                window.location = pathName + 'replays/#/' + hash;
            } else {
                window.location.hash = '/' + hash; // add id to hash, allows link sharing
            }
        },
        //==================================================
        // SELECT VIDEO
        //==================================================

        selectVideo() {

            // allow hash fragment to intercept on init
            this.getVideoIdFromHash();

            //==================================================
            // VARS
            //==================================================

            var payload;
            var video_obj = this.feed[this.selectedTimeIndex];
            var isLiveOnInit = this.feedType == 'live' && !this.firstRun;

            //==================================================
            // WHEN LIVE AND INIT
            //==================================================

            if (isLiveOnInit) {
                log('IS LIVE ON INIT');
                bus.$emit('initPlayer', 'limitDuration');

                payload = {
                    stream: this.liveStreamPlaylist, // !! WARNING !! - stream doesn't work, only playlist
                    image: this.liveStreamImage
                }

            } else {
                //==================================================
                // WHEN REPLAY
                //==================================================

                if (this.feedType == 'live') {
                    return; // live no longer switches video
                }

                // this.feedType = 'replay'; // set the tabs
                if (!this.firstRun) bus.$emit('initPlayer');

                try {
                    payload = {
                        stream: video_obj.video_url,
                        image: video_obj.image_url, // TODO: video_obj.video_url ??
                        format: 'mp4'
                    }
                }
                catch(error) {
                    payload = {
                        stream: '.mp4',
                        image: '.jpg',
                        format: 'mp4'
                    }
                }
            }
            //==================================================
            // GOOGLE TRACKING
            //==================================================

            if (this.feed && this.firstRun) this.sendTracking(video_obj); // can't report on video_url if LIVE init, or no feed

            //==================================================
            // LOAD VIDEO AFTER INIT
            //==================================================

            log('>> firstRun is true');
            this.firstRun = true;
            bus.$emit('loadVideo', payload);
        },
        //==================================================
        // SEND TRACKING
        //==================================================

        sendTracking(video_obj){
            if (video_obj) {

                var eventLabel = video_obj.video_url.split('/');
                    eventLabel = eventLabel[3] + ' - ' + video_obj.start_local; //+ eventLabel[4]; // EG. snapper-rocks - 2018-02-04

                // console.log(eventLabel);

                setTimeout(() => {
                    window.ga('send', 'event', 'Replays', 'Surfcam replay thumbnail clicked', eventLabel, {
                        nonInteraction: true
                    });
                }, 10);
            }
        },
        //==================================================
        // LOAD DATA - ONLY STORES THE FEED - NOTHING ELSE
        //
        // feed = null  (Searching)
        // feed = [...] (Done)
        // feed = false (N/A)
        //==================================================

        loadData(path) {
            log(':: loadData() ::');

            this.feedLoading = true; // show load indicator

            axios.get(path, '', {
                headers: {
                    'Accept': '*/*'
                }
            })
            .then((response) => {
                this.feedLoading = false; // stop loading

                log('~~~~~~~~~~~~ Server Response: ('+typeof(response.data)+', length: '+response.data.length+') ~~~~~~~~~~~~');

                //++++++++++++++++++++++++++++++++++++++++++++++++
                // TEST FOR EMPTY
                //++++++++++++++++++++++++++++++++++++++++++++++++

                // var random = Math.floor((Math.random() * 2) + 1);

                // if (random == 2) {
                //     response.data.length = 0;
                //     log('X X X X X X X X X  FEED IS NULL  X X X X X X X X X X X X X X X');
                // }
                //++++++++++++++++++++++++++++++++++++++++++++++++

                //**************************************************
                // SUCCESS / FAILURE
                //**************************************************

                if (response.data.length){
                    log('~~~~~~~~~~~~ Success. Data found ~~~~~~~~~~~~');
                    this.feed = response.data;
                    this.attempts = 0;

                } else {
                    log('~~~~~~~~~~~~ response.data returned empty or unusable ~~~~~~~~~~~~');

                    // explicitly clear existing feed | was: null - but now need to invoke 2nd watcher (cam 999 - no replays available) - feed needs to change to trigger selectedTime -> select video
                    // need feed false to have the video player, even when blank and empty
                    this.feed = false;

                    //==================================================
                    // If feed returns empty, set time for yesterday and try again
                    //==================================================

                    if (!this.rolledBack) {
                        log("~~~~~~~~~~~~ RETRYING: rolling back now. ~~~~~~~~~~~~");

                        if (this.attempts < 2) { // change from 6 - attempt only twice
                            this.attempts++;
                            log('Attempt: '+this.attempts);
                            bus.$emit('setDate', this.attempts);
                            this.feed = null; // allows video to play - watcher invoked
                        } else {
                            // stop trying
                            log("~~~~~~~~~~~~ STOPPED: no data to find ~~~~~~~~~~~~");
                            bus.$emit('setDate', 0); // reset to top date
                            this.rolledBack = true; //
                        }
                    }
                    //==================================================
                }
            })
            .catch((error) => {
                console.log('~~~~~~~~~~~~ Server Error: '+error+' ~~~~~~~~~~~~');
                this.feed = false; // black video
            });
        }
    }
    //==================================================
    //
    //==================================================
});