/*
    DATE SELECT
    updated: 10.09.18

    DESC
        Creates select list of last 7 days

*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// DATE SELECT
//-----------------------------------------------------------------

Vue.component('date-select', {
    props: [
        'is-loading',
    ],
    template: `
        <div class="custom-select">
            <select v-model="date" @change="broadcast">
                <option v-for="(item, index) in lastSevenDays" :key="index" :value="item" v-text="item.title"></option>
            </select>

            <i class="fa fa-caret-down"></i>
            <i class="fa fa-calendar-o"></i>

            <!-- LOADER -->
            <transition name="special-fade-in">
                <i v-if="isLoading" class="fa-li fa fa-refresh fa-spin"></i>
            </transition>
        </div>
    `,
    data() {
        return {
            // date: {},
            lastSevenDays: [],
        }
    },
    created() {
        var today = new Date();
        this.lastSevenDays = this.getDates(today, 6);
        this.date = this.getDateObject(); // this ultimately sets the date on init of the app - default zero if empty
        this.broadcast(); // this is now necessary to invoke the widget watchers
        bus.$on('setDate', this.setDate);
    },
    methods: {
        //==================================================
        // broadcast selected date
        //==================================================

        broadcast(){
            this.$emit('input', this.date);
        },
        //==================================================
        // GET DATE OBJECT (FROM HASH)
        //==================================================

        getDateObject(){
            log('[created] date-select: Getting date from hash fragment...');
            var hashBang_arr = window.location.hash.split('/'); // ['#', '2018-02-12', '40367']
            var date = hashBang_arr[1]; // '2018-02-12'
            var dateTitle = moment(date).format('dddd, D MMMM YYYY'); // EG. 'Monday, 12 February 2018' - match title in select - easier than timestamp

            // Search for matching date title in date-select
            for (var i = 0; i < this.lastSevenDays.length; i++) {

                // Success! There was a match - date is available to load into date-select component
                if (this.lastSevenDays[i].title === dateTitle) {
                    return this.lastSevenDays[i];
                }
            }
            return this.lastSevenDays[0]; // set initial option as selected
        },
        //==================================================
        // GET DATES
        //==================================================

        getDates(startDate, totalDays){
            var dates_arr = [];

            for (var i = 0; i <= totalDays; i++) {
                var currentDate = new Date();
                var timeStamp = currentDate.setDate(startDate.getDate() - i);
                var dateStr = moment(timeStamp).format('dddd, D MMMM YYYY');
                dates_arr.push({ title: dateStr, timeStamp: timeStamp });
            }
            return dates_arr;
        },
        //==================================================
        // SET DATE
        // Used for rollback if feed turns up empty
        //==================================================

        setDate(index){
            this.date = this.lastSevenDays[index];
            this.broadcast();
        }
    }
});