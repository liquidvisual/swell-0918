/*
    APP.JS
    updated: 04.10.18

    DEPENDENCIES
        https://unpkg.com/vue/dist/vue.js
*/

//-----------------------------------------------------------------
// START
//-----------------------------------------------------------------

Vue.config.productionTip = false;

//-----------------------------------------------------------------
// LOGGING
//-----------------------------------------------------------------

const LOGGING_ENABLED = false; // disable on prod

function log(item) {
    if (LOGGING_ENABLED) {
        console.log(item);
    }
}

//-----------------------------------------------------------------
// VUE INSTANCE
//-----------------------------------------------------------------

if (document.getElementById('vue-app')) {
    new Vue({
        el: '#vue-app',
    })
}

//==================================================
//
//==================================================