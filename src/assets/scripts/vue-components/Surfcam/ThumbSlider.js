/*
    THUMB SLIDER
    updated: 11.09.18
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// THUMB SLIDER
// bg-lazyLoad: https://github.com/metafizzy/flickity/issues/173
// installed separately: https://github.com/metafizzy/flickity-bg-lazyload#install
// Placed onto ON: @click.prevent="selectTimeIndex(index)"
//-----------------------------------------------------------------

Vue.component('thumb-slider', {
    props: {
        feed: {
            // type: Array,
            required: true,
            default: []
        },
        isLoading: Boolean,
        currentIndex: Number, // only the time select can change this
    },
    template: `
        <div class="thumb-slider-wrapper collapse-row-sm-only" :style="isLoading ? {opacity: 0.2} : {}">
            <div class="thumb-slider-track">

                <!-- VUE FLICKITY -->
                <vue-flickity class="thumb-slider" ref="flickity" :options="flickityOptions">
                    <div v-for="(item, index) in feed" :key="index" :title="'#'+index + ' '+item.start_local" :class="getActive(index)" class="thumb-slider-item btn-tile">

                        <img src="/assets/img/layout/placeholder-thumbnail.png">
                        <span class="btn-tile-bg" :data-flickity-bg-lazyload="item.image_url"></span>

                        <div class="btn-tile-overlay">
                            <h3 class="btn-tile-header" v-text="formatTime(item.start_local)"></h3>
                        </div>
                    </div>
                </vue-flickity>

                <!-- SLIDER CONTROLS -->
                <button class="thumb-slider-prev-btn" @click="previous()"><i class="fa fa-angle-left"></i></button>
                <button class="thumb-slider-next-btn" @click="next()"><i class="fa fa-angle-right"></i></button>
            </div>
        </div>
    `,
    data() {
        return {
            flickityOptions: {
                adaptiveHeight: true,
                autoPlay: false,
                // autoPlay: 1500,
                cellAlign: 'left',
                contain: true,
                draggable: true, //(window.innerWidth <= 1024 ? true : false),
                //lazyLoad: true, //10 // <img src="placeholder.jpg" data-flickity-lazyload="full.jpg" />
                bgLazyLoad: 10,
                dragThreshold: 3,
                freeScroll: true,
                freeScrollFriction: 0.075, // lower friction, slides easier
                friction: 0.28, // Higher friction makes the slider feel stickier and less bouncy
                imagesLoaded: true,
                // initialIndex: 35, //this.currentIndex, //1, // originally disabled- problems with rendering
                pageDots: false,
                prevNextButtons: false,
                pauseAutoPlayOnHover: false,
                selectedAttraction: 0.025, // Higher attraction makes the slider move faster
                watchCSS: true, // run/destroy
                wrapAround: false, // infinite
            }
        }
    },

    created(){
        bus.$on('selectThumbnail', this.selectThumbnail);
    },

    mounted(){
        log('[mounted] - thumb-slider')
        this.setClickEvent();
    },

    watch: {

        //==================================================
        // WATCH - FEED
        //==================================================

        feed(){
            this.$refs.flickity.destroy();

            this.$nextTick(() => {
                this.$refs.flickity.rerender();
                this.setClickEvent();
            });
        },
        //==================================================
        // WATCH - CURRENT INDEX
        //==================================================

        currentIndex(){
            this.selectThumbnail(this.currentIndex);
        }
    },
    mixins: [utilities],
    methods: {
        //==================================================
        // GET ACTIVE
        // Bit hacky - but simplest
        //==================================================

        getActive(index) {
            if (index == this.currentIndex) {
                if (window.location.href.indexOf('replays') > -1) {
                    return 'active';
                }
            }
        },
        //==================================================
        // SELECT
        //==================================================

        selectThumbnail(index) {
            this.$refs.flickity.select(index); // set by the time select ONLY - moves slides to index
        },
        //==================================================
        // SET CLICK EVENT
        //==================================================

        setClickEvent(){
            //==================================================
            // STATIC CLICK - to allows clicking and dragging
            //
            // https://flickity.metafizzy.co/events.html#staticclick
            // https://codepen.io/desandro/pen/RNQgxe?editors=1010
            // https://github.com/drewjbartlett/vue-flickity/issues/26
            //==================================================

            this.$refs.flickity.on('staticClick', (event, pointer, cellElement, cellIndex) => {
                if (!cellElement) {
                    return;
                }
                // log('Flickity StaticClick triggered')
                this.selectTimeIndex(cellIndex);
                bus.$emit('setURL'); // call it explicitly so doesn't run on init
            });
        },
        //==================================================
        // SELECT TIME INDEX
        //==================================================

        selectTimeIndex(index) {
            log('[thumb-slider] - Emit Index: '+index);
            bus.$emit('setTimeIndex', index); // send back to the widget

            // Thankfully I don't need this anymore: live pages now direct to URLs so below is uneeded

            // Super Hack - flick time as null and back to index, so first thumbnail can be selected..
            // IN THE EVENT THAT the feed is overriding the player but the data is queued up to be zero
            // TLDR: trigger watcher on widget
            // Downside, first thumbnail will always trigger again, regardless of live or replay mode

            // if (index == 0) {
            //     bus.$emit('setTimeIndex', 1);
            //     setTimeout(() => {
            //         bus.$emit('setTimeIndex', index);
            //     }, 4); // 4ms browser standard?
            // }
        },
        //==================================================
        // NEXT + PREVIOUS
        //==================================================

        next() {
            this.$refs.flickity.next();
        },

        previous() {
            this.$refs.flickity.previous();
        },

        // select: function(index){
        //     this.$refs.flickity('select', index);
        // }
    }
});