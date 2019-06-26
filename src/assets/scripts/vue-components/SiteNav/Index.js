/*
    SITE NAV INDEX
    updated: 19.11.18

    DEPENDENCIES
        https://unpkg.com/vue/dist/vue.js
        https://unpkg.com/axios/dist/axios.min.js
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// NAV
//-----------------------------------------------------------------

// Vue.component('site-nav', {
//     props: {

//     },
//     template: `
//         <div>
//             <h1>hello</h1>
//         </div>
//     `,
//     data() {
//         return {
//             path: '/assets/sitemap.json',
//             sitemap: null,
//             jsonLoading: null,
//         }
//     },
//     created() {
//         loadData(this.path);
//     },
//     methods: {
//         loadData(path) {
//             log(':: loadData() ::');

//             this.jsonLoading = true;

//             axios.get(path, '', {
//                 headers: {
//                     'Accept': '*/*'
//                 }
//             })
//             .then((response) => {
//                 this.jsonLoading = false;

//                 log('~~~~~~~~~~~~ Server Response: ('+typeof(response.data)+', length: '+response.data.length+') ~~~~~~~~~~~~');

//                 //**************************************************
//                 // SUCCESS / FAILURE
//                 //**************************************************

//                 if (response.data.length){
//                     // log('~~~~~~~~~~~~ Success. Data found ~~~~~~~~~~~~');
//                     this.sitemap = response.data;

//                 } else {
//                     // log('~~~~~~~~~~~~ response.data returned empty or unusable ~~~~~~~~~~~~');
//                 }
//             })
//             .catch((error) => {
//                 // console.log('~~~~~~~~~~~~ Server Error: '+error+' ~~~~~~~~~~~~');
//             });
//         }
//     }
// });