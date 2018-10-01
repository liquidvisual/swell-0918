/*
    MULTICAM INDEX
    updated: 10.09.18

    DEPENDENCIES
        https://unpkg.com/vue/dist/vue.js
        https://unpkg.com/axios/dist/axios.min.js
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// EVENT BUS
//-----------------------------------------------------------------

const multicamBus = new Vue();

//-----------------------------------------------------------------
// MULTICAM WIDGET
//-----------------------------------------------------------------

Vue.component('multicam-widget', {
    props: {
        paywallEnabled: { // paywall exists?
            type: [String, Boolean],
            default: false,
        },
    },
    data() {
        return {
            paywallActive: false, // trigger!
        }
    },
    created() {
        multicamBus.$on('invoke-paywall', () => {
            this.paywallActive = true; // for styles
        });
    }
});