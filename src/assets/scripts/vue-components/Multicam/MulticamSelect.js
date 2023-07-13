/*
    MULTICAM SELECT
    updated: 13.07.23, 04.07.23, 10.09.18
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
                @input="broadcast()"
            >
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
            options: []
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
        // Multicam data is external for easy editing.
        fetch(`/public/multicam-data.js?v=${Date.now()}`)
            .then(response => response.text())
            .then(jsCode => {
                this.options = eval(jsCode);

                // Serve up stream from external id on INIT.
                const stream = this.getStreamFromId(this.surfcamId);
                if (stream) {
                    this.value = stream;
                    this.broadcast();
                }
            })
            .catch(error => {
                console.error("Oops! Multicam data failed:", error);
            });
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