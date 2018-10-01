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
                        { id: 250741, name: 'Snapper Rocks',     path: 'snapper-rocks.stream' },
                        { id: 250746, name: 'Greenmount',        path: 'greenmount.stream' },
                        { id: 343461, name: 'Currumbin',         path: 'currumbin.stream' },
                        { id: 851,    name: 'Burleigh Heads',    path: 'burleigh.stream' },
                        { id: 351381, name: 'Narrowneck',        path: 'narrowneck.stream' },
                        { id: 328776, name: 'Kings Beach',       path: 'kings-beach.stream' },
                        { id: 896,    name: 'Moffat Beach',      path: 'moffat-beach.stream' },
                        { id: 328632, name: 'Alex Headland',     path: 'alex-headland.stream' },
                        { id: 333699, name: 'Coolum',            path: 'coolum.stream' },
                        { id: 334466, name: 'Sunshine Beach',    path: 'sunshine-beach.stream' },
                        { id: 856,    name: 'Noosa Heads',       path: 'noosa.stream' }
                    ]
                },
                {
                    state: 'New South Wales',
                    locations: [
                        { id: 328177, name: 'Kingscliff',        path: 'kingscliff.stream' },
                        { id: 335898, name: 'Cabarita',          path: 'cabarita.stream' },
                        { id: 866,    name: 'Byron Bay',         path: 'byron.stream' },
                        { id: 331984, name: 'Yamba',             path: 'yamba.stream' },
                        { id: 329830, name: 'Park Beach',        path: 'park-beach.stream' },
                        { id: 766,    name: 'Coffs Harbour',     path: 'coffs-harbour.stream' },
                        { id: 781,    name: 'Newcastle',         path: 'newcastle.stream' },
                        { id: 394603, name: 'Avoca Beach',       path: 'avoca-beach.stream' },
                        { id: 776,    name: 'Narrabeen',         path: 'narrabeen.stream' },
                        { id: 771,    name: 'Manly',             path: 'manly.stream' },
                        { id: 761,    name: 'Bondi',             path: 'bondi.stream' },
                        { id: 881,    name: 'Maroubra',          path: 'maroubra.stream' },
                        { id: 786,    name: 'Shark Island',      path: 'shark-island.stream' },
                        { id: 886,    name: 'Cronulla Point',    path: 'cronulla-point.stream' },
                        { id: 891,    name: 'Cronulla Beaches',  path: 'cronulla-beaches.stream' },
                        { id: 841,    name: 'Thirroul',          path: 'thirroul.stream' },
                        { id: 791,    name: 'Wollongong',        path: 'wollongong.stream' }
                    ]
                },
                {
                    state: 'Victoria',
                    locations: [
                        { id: 382063, name: 'Woolamai',          path: 'woolamai.stream' },
                        { id: 861,    name: 'Torquay',           path: 'torquay.stream' },
                        { id: 811,    name: 'Portsea',           path: 'portsea.stream' },
                        { id: 796,    name: '13th Beach',        path: '13th-beach.stream' },
                        { id: 806,    name: 'Lorne',             path: 'lorne.stream' }
                    ],
                },
                {
                    state: 'South Australia',
                    locations: [
                        { id: 816,    name: 'Knights',           path: 'knights.stream' },
                        { id: 871,    name: 'Middleton',         path: 'middleton.stream' },
                        { id: 382064, name: 'Trigs',             path: 'trigs.stream' },
                        { id: 382065, name: 'Christies Beach',   path: 'christies-beach.stream' },
                        { id: 821,    name: 'South Port',        path: 'south-port.stream' }
                    ],
                },
                {
                    state: 'Western Australia',
                    locations: [
                        { id: 846,    name: 'Margaret River',    path: 'margaret-river.stream' },
                        { id: 831,    name: 'Yallingup',         path: 'yallingup.stream' },
                        { id: 826,    name: 'Scarborough',       path: 'scarborough.stream' }
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