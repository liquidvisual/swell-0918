/*
    MULTICAM SELECT
    updated: 10.09.18
*/
//-----------------------------------------------------------------
// MULTICAM SELECT
//-----------------------------------------------------------------

Vue.component('multicam-select', {
    components: {
        Multiselect: window.VueMultiselect.default
    },
    template: `
        <div class="multicam-select">

            <!-- MULTISELECT -->
            <multiselect
                v-model="value"
                label="name"
                group-values="locations"
                group-label="state"
                track-by="name"
                :group-select="true"
                :max-height="250"
                :multiple="false"
                :options="options"
                :placeholder="'Select Surfcam ' + multicamId"
                @open="$emit('open', true)"
                @close="$emit('open', false)"
                @input="broadcast()">
                <span slot="noResult">Sorry, no results.</span>
            </multiselect>
        </div>
    `,
    props: {
        multicamId: [String, Number],
        surfcamId: [String, Number],
        editing: Boolean
    },
    data() {
        return {
            value: null,
            options: [
                {
                    state: 'Queensland',
                    locations: [
                        { id: 876,    name: 'Duranbah',          path: 'duranbah.stream' },
                        { id: 484779, name: 'Tweed Bar',         path: 'tweed-bar.stream' },
                        { id: 250741, name: 'Snapper Rocks',     path: 'snapper-rocks.stream' },
                        { id: 522621, name: 'Superbank',        path: 'superbank.stream' },
                        { id: 250746, name: 'Greenmount',        path: 'greenmount.stream' },
                        { id: 508111, name: 'Coolangatta',       path: 'coolangatta.stream' },
                        { id: 508110, name: 'Spot X',            path: 'spot-x.stream' },
                        { id: 508108, name: 'Kirra Big Groyne',  path: 'kirra-big-groyne.stream' },
                        { id: 464936, name: 'Kirra',             path: 'kirra.stream' },
                        { id: 522620, name: 'North Kirra',       path: 'north-kirra.stream' },
                        { id: 343461, name: 'Currumbin',         path: 'currumbin.stream' },
                        { id: 497132, name: 'Currumbin Alley',   path: 'currumbin-alley.stream' },
                        { id: 497133, name: 'Laceys Lane',       path: 'laceys-lane.stream' },
                        { id: 497134, name: 'South Palm Beach',  path: 'south-palm-beach.stream' },
                        { id: 497135, name: 'Palm Beach',        path: 'palm-beach.stream' },
                        { id: 851,    name: 'Burleigh Heads',    path: 'burleigh.stream' },
                        { id: 508303, name: 'Burleigh Heads Beach',    path: 'burleigh-heads-beach.stream' },
                        { id: 508304, name: 'North Burleigh',    path: 'north-burleigh.stream' },
                        { id: 473908, name: 'Surfers Paradise South', path: 'surfers-paradise-south.stream' },
                        { id: 473909, name: 'Surfers Paradise North', path: 'surfers-paradise-north.stream' },
                        { id: 351381, name: 'Narrowneck',        path: 'narrowneck.stream' },
                        { id: 522777, name: 'Narrowneck Reef',        path: 'narrowneck-reef.stream' },
                        { id: 518798, name: 'Caloundra Bar',     path: 'caloundra-bar.stream' },
                        { id: 518797, name: 'Caloundra',         path: 'caloundra.stream' },
                        { id: 328776, name: 'Kings Beach',       path: 'kings-beach.stream' },
                        /*{ id: 896,    name: 'Moffat Beach',      path: 'moffat-beach.stream' },*/
                        { id: 328632, name: 'Alex Headland',     path: 'alex-headland.stream' },
                        { id: 521440, name: 'Alex Bluff',     path: 'alex-bluff.stream' },
                        { id: 521441, name: 'Alex Beach',     path: 'alex-beach.stream' },
                        { id: 521509, name: 'Maroochydore',     path: 'maroochydore.stream' },
                        { id: 521511, name: 'Maroochy River',     path: 'maroochy-river.stream' },
                        { id: 492649, name: 'Coolum Bays',       path: 'coolum-bays.stream' },
                        { id: 492651, name: 'Point Perry',       path: 'point-perry.stream' },
                        { id: 333699, name: 'Coolum',            path: 'coolum.stream' },
                        { id: 532641, name: 'Peregian',            path: 'peregian.stream' },
                        { id: 532642, name: 'Marcus Beach',            path: 'marcus-beach.stream' },
                        { id: 532709, name: 'Sunshine South',    path: 'sunshine-south.stream' },
                        { id: 334466, name: 'Sunshine Beach',    path: 'sunshine-beach.stream' },
                        { id: 532708, name: 'Sunshine North',    path: 'sunshine-north.stream' },
                        { id: 856,    name: 'Noosa Heads',       path: 'noosa.stream' },
                        { id: 468035, name: 'Agnes Water',       path: 'agnes-water.stream' }
                    ]
                },
                {
                    state: 'New South Wales',
                    locations: [
                        { id: 533893, name: 'Kingscliff North',  path: 'kingscliff-north.stream' },
                        { id: 328177, name: 'Kingscliff',        path: 'kingscliff.stream' },
                        { id: 335898, name: 'Cabarita',          path: 'cabarita.stream' },
                        { id: 497597, name: 'Cabarita Beach',    path: 'cabarita-beach.stream' },
                        { id: 866,    name: 'Byron Bay',         path: 'byron.stream' },
                        { id: 479345, name: 'The Pass',          path: 'the-pass.stream' },
                        { id: 331984, name: 'Yamba',             path: 'yamba.stream' },
                        { id: 523948, name: 'Pippes',             path: 'pippies.stream' },
                        { id: 329830, name: 'Macauleys',        path: 'macauleys.stream' },
                        { id: 329830, name: 'Park Beach',        path: 'park-beach.stream' },
                        { id: 329830, name: 'Park Beach South',        path: 'park-beach-south.stream' },
                        { id: 766,    name: 'Coffs Harbour',     path: 'coffs-harbour.stream' },
                        { id: 530941, name: 'Gallows',     path: 'gallows.stream' },
                        { id: 781,    name: 'Newcastle',         path: 'newcastle.stream' },
                        { id: 548893,    name: 'Newcastle South',         path: 'newcastle-south.stream' },
                        { id: 548891,    name: 'Newcastle Point',         path: 'newcastle-point.stream' },
                        { id: 394603, name: 'Avoca Beach',       path: 'avoca-beach.stream' },
                        { id: 776,    name: 'Narrabeen',         path: 'narrabeen.stream' },
                        { id: 513741,    name: 'Queenscliff',         path: 'queenscliff.stream' },
                        { id: 771,    name: 'Manly',             path: 'manly.stream' },
                        { id: 761,    name: 'Bondi',             path: 'bondi.stream' },
                        { id: 881,    name: 'Maroubra',          path: 'maroubra.stream' },
                        { id: 548942,    name: 'North Maroubra',          path: 'north-maroubra.stream' },
                        { id: 548943,    name: 'South Maroubra',          path: 'south-maroubra.stream' },
                        { id:556914,    name:"Wanda",                       path:"wanda.stream"}
                        { id: 786,    name: 'Shark Island',      path: 'shark-island.stream' },
                        { id: 886,    name: 'Cronulla Point',    path: 'cronulla-point.stream' },
                        { id: 512660, name: 'The Alley',         path: 'the-alley.stream' },
                        { id: 891,    name: 'Cronulla Beaches',  path: 'cronulla-beaches.stream' },
                        { id: 473140, name: 'Thirroul North',    path: 'thirroul-north.stream' },
                        { id: 841,    name: 'Thirroul',          path: 'thirroul.stream' },
                        { id: 791,    name: 'Wollongong',        path: 'wollongong.stream' },
                        { id: 537243,    name: 'City Beach',        path: 'city-beach.stream' },
                        { id: 472578, name: 'Kiama',             path: 'kiama.stream' }
                    ]
                },
                {
                    state: 'Victoria',
                    locations: [
                        { id: 382063, name: 'Woolamai',          path: 'woolamai.stream' },
                        { id: 535211, name: 'Anzacs',          path: 'anzacs.stream' },
                        { id: 535209, name: 'Magiclands',          path: 'magiclands.stream' },
                        { id: 550206, name: 'Smiths Beach',          path: 'smiths-beach.stream' },
                        { id: 506942, name: "Winkipop",  path: "winkipop.stream" },
                        { id: 861,    name: 'Torquay',           path: 'torquay.stream' },
                        { id: 540386, name: "Fishermans Beach", path: "fishermans-beach.stream" },
                        { id: 477963, name: 'Ocean Grove',       path: 'ocean-grove.stream' },
                        { id:553188,    name:"Raffs",           path:"raffs.stream"},
                        { id: 811,    name: 'Portsea',           path: 'portsea.stream' },
                        { id:540522,    name:"Rye",             path:"rye.stream"},
                        { id:796,       name:"13th Beach",      path:"13th-beach.stream"},
                        { id:553189,    name:"Boings",             path:"boings.stream"},
                        { id:553190,    name:"Sign Posts",      path:"sign-posts.stream"}
                        { id: 488207, name: 'Fairhaven',         path: 'fairhaven.stream' },
                        { id: 806,    name: 'Lorne',             path: 'lorne.stream' },
                        { id: 486859, name: "Lorne Point",       path: "lorne-point.stream" },
                        { id: 488323, name: "Wye River", path: "wye-river.stream" },
                        { id: 514231, name: "St Kilda",       path: "st-kilda.stream" }
                    ]
                },
                {
                    state: 'South Australia',
                    locations: [
                        { id: 816,    name: 'Knights',           path: 'knights.stream' },
                        { id: 871,    name: 'Middleton Bay',     path: 'middleton-bay.stream' },
                        { id: 444455, name: 'Middleton Point',   path: 'middleton-point.stream' },
                        { id: 382064, name: 'Triggs',            path: 'triggs.stream' },
                        { id: 494302, name: 'U Turns',           path: 'u-turns.stream' },
                        { id: 382065, name: 'Christies Beach',   path: 'christies-beach.stream' },
                        { id: 493168, name: 'Y Steps',           path: 'y-steps.stream' },
                        { id: 821,    name: 'South Port',        path: 'south-port.stream' },
                        { id: 499745, name: 'The Hump',          path: 'the-hump.stream' },
                        { id: 499744, name: 'Rivermouth',        path: 'rivermouth.stream' },
                        { id: 444456, name: 'Goolwa',            path: 'goolwa.stream' }
                    ]
                },
                {
                    state: 'Western Australia',
                    locations: [
                        { id: 846,    name: 'Margaret River',    path: 'margaret-river.stream' },
                        { id: 537573, name: 'Margaret River Bombie',    path: 'margaret-river-bombie.stream' },
                        { id: 537574, name: 'Boat Ramp',    path: 'boat-ramp.stream' },
                        { id: 831,    name: 'Yallingup',         path: 'yallingup.stream' },
                        { id: 489371, name: 'Mandurah Wedge',    path: 'mandurah-wedge.stream' },
                        { id: 537773, name: "North Floreat", path: "north-floreat.stream" },
                        { id: 489407, name: 'Brighton',          path: 'brighton.stream' },
                        { id: 826,    name: 'Scarborough',       path: 'scarborough.stream' },
                        { id: 537774, name: "Contacio", path: "contacio.stream" },
                        { id: 489408, name: 'South Trigg',       path: 'south-trigg.stream' }
                    ]
                },
                {
                    state: 'Tasmania',
                    locations: [
                        { id: 547735,    name: 'Eaglehawk Neck',    path: 'eaglehawk-neck.stream' },
                        { id: 547737, name: 'Pirates Bay',    path: 'pirates-bay.stream' },
                        { id: 547738, name: 'Bicheno',    path: 'bicheno.stream' },
                        { id: 547739,    name: 'Redbill Beach',         path: 'redbill-beach.stream' },
                        { id: 547740, name: 'Clifton Beach',    path: 'clifton-beach.stream' },
                        { id: 547741, name: 'Clifton Beach South',          path: 'clifton-beach-south.stream' }
                    ]
                }
            ]
        }
    },
    watch: {
        editing() {
            if (this.editing) {
                this.value = null; // clear for new selection
            }
        }
    },
    created() {
        // serve up stream from external id on INIT
        var stream = this.getStreamFromId(this.surfcamId);
        if (stream) {
            this.value = stream;
            this.broadcast();
        }
    },
    methods: {
        //==================================================
        // BROADCAST
        //==================================================

        broadcast() {
            this.$emit('select-stream', this.value); // INSIDE > OUT: send value back out to widget
        },
        //==================================================
        // GET STREAM FROM ID (refactor)
        // eg. array.find(item => item.id === id);
        //==================================================

        getStreamFromId(id) {
            for (item in this.options) {
                var locations = this.options[item].locations;

                for (var i=0; i<locations.length; i++) {
                    if (locations[i].id == id) {
                        return locations[i];
                    }
                }
            }
        }
    }
});