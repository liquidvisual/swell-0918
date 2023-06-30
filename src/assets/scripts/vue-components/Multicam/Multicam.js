/*
    MULTICAM SELECT
    updated: 07.10.18
*/
//-----------------------------------------------------------------
// MULTICAM
//-----------------------------------------------------------------

Vue.component('multicam', {
    template: `
        <div
            class="multicam-widget"
            :class="{ 'is-editing': editing }"
            :style="{ zIndex: open ? 2 : 1 }"
            @mouseleave="hovering = false">

            <!-- EDIT BTN -->
            <transition name="multicam-select-entrance">
                <button
                    v-if="errors || liveStreamPath && (showEditBtn || hovering)"
                    class="multicam-edit-btn"
                    @click="edit"
                    @mouseover="hovering = true">

                    <div class="icon">
                        <i v-if="!editing" class="fa fa-edit"></i>
                    </div>
                </button>
            </transition>

            <!-- MULTICAM SELECT -->
            <transition name="multicam-select-entrance">
                <multicam-select
                    v-show="editing"
                    :multicam-id="multicamId"
                    :editing="editing"
                    :style="{ backgroundImage: 'url(' + poster + ')'}"
                    :surfcam-id="surfcamId"
                    @open="open = $event"
                    @select-stream="storeStreamObj">
                </multicam-select>
            </transition>

            <!-- MULTICAM PLAYER PLYR -->
            <multicam-player-plyr
                :source="liveStreamPath"
                :poster="poster"
                :errors="errors"
                @log-errors="errors = editing ? false : true"
                @show-controls="showEditBtn = hovering ? true : $event">
            </multicam-player-plyr>

        </div>
    `,
    props: {
        multicamId: [String, Number], // used to identify multicam - shown in select placeholder
        path: {
            type: String,
            default: '//stream.n1.au.swellnet.com/surfcams/' // can be overriden
        },
        paywallEnabled: Boolean,
        poster: String,
        surfcamId: [String, Number]
    },
    data() {
        return {
            editing: null,
            errors: null,
            hovering: false,
            firstRun: true,
            liveStreamObj: null,
            liveStreamPath: null,
            open: false, // will trigger z-index on open select panels
            showEditBtn: false
        }
    },
    created() {
        // on INIT, check if cam has saved ID. If yes, disable editing mode
        this.editing = this.surfcamId ? false : true;
    },
    methods: {

        //==================================================
        // EDIT MODE
        //==================================================

        edit() {
            this.editing = true;
            this.errors = null; // reset errors
            this.removeStreamObj();
        },
        //==================================================
        // STORE STREAM OBJ
        //==================================================

        storeStreamObj(event) {

            this.liveStreamObj = event; // store obj
            this.hovering = false;

            // Hault everything if paywall is enabled
            // trigger the overlay
            if (this.paywallEnabled) {
                multicamBus.$emit('invoke-paywall');
                return;
            }
            else if (event == null) {
                this.removeStreamObj();
            }
            else {
                this.editing = false;
                this.liveStreamPath = this.path + event.path + '/playlist.m3u8'; // create path

                // If firstRun and surfcam is provided, assume was saved
                if (this.firstRun) {
                    this.firstRun = false;
                    if (this.surfcamId) return;
                }

                this.updateServer('/multi-cam/save/' + event.id + '/' + this.multicamId); // multi-cam/save/[surfcam-id]/[position]
            }
        },
        //==================================================
        // REMOVE STREAM OBJ
        //==================================================

        removeStreamObj() {
            this.liveStreamObj = null;
            this.liveStreamPath = null; // for removal in select & edit
            this.updateServer('/multi-cam/delete/' + this.multicamId); // multi-cam/delete/[position]
        },
        //==================================================
        // UPDATE SERVER
        //==================================================

        updateServer(path) {
            axios.get(path, '', {
                headers: {
                    'Accept': '*/*'
                }
            })
            .then((response) => {
                //**************************************************
            })
            .catch((error) => {

            });
        }
    }
});