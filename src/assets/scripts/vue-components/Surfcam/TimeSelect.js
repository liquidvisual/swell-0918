/*
    TIME SELECT
    updated: 09.10.18
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// TIME SELECT
//-----------------------------------------------------------------

Vue.component('time-select', {
    props: {
        feed: {},
        isLoading: {},
        index: Number
    },
    template: `
        <div class="custom-select">
            <select v-if="feed" v-model="selectedTimeIndex" @change="broadcast" :disabled="isLoading" :style="isLoading ? {cursor: 'progress'} : {}">
                <option v-for="(item, index) in feed" :key="index" :value="index" v-text="formatTime(item.start_local)"></option>
            </select>

            <!-- FEED UNAVAILABLE -->
            <select v-if="!feed">
                <option>Replays Unavailable</option>
            </select>

            <!-- ICON -->
            <i v-if="!feed" class="fa fa-ban"></i>
            <i v-if="feed" class="fa fa-clock-o"></i>

            <!-- CARET -->
            <i class="fa fa-caret-down"></i>
        </div>
    `,

    data() {
        return {
            selectedTimeIndex: null,
        }
    },
    watch: {
        index(){
            this.selectedTimeIndex = this.index; // OUTSIDE > IN: change <select> (model) to this index value from the outside
        }
    },

    mixins: [utilities],

    methods: {
        broadcast(){
            log('[time-select] is broadcasting - selectedTimeIndex');
            this.$emit('input', this.selectedTimeIndex); // INSIDE > OUT: send value back out to widget
            bus.$emit('setURL'); // call it explicitly so doesn't run on init
        }
    }
});