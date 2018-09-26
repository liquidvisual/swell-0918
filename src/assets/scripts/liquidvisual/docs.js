/*
    DOCS.JS
    updated: 26.04.18

    DEPENDENCIES
        https://unpkg.com/vue/dist/vue.js
        https://unpkg.com/axios/dist/axios.min.js
*/
//-----------------------------------------------------------------
// DATE LOGGING
//-----------------------------------------------------------------

const LOGGING_ENABLED = false; // disable on prod

function log(item){
    if (LOGGING_ENABLED) {
        console.log(item);
    }
}

Vue.config.productionTip = false;

//-----------------------------------------------------------------
// EVENT BUS
//-----------------------------------------------------------------

// const bus = new Vue();

//-----------------------------------------------------------------
// DOCS
//-----------------------------------------------------------------

Vue.component('docs', {
	props: {
		files: String,
	},
    data() {
        return {
        	filesArray: [],
        	url: 'https://raw.githubusercontent.com/liquidvisual/inspire-0118/master/src/',
            codeEnabled: false,
            showProperties: false
        }
    },
    created(){
    	var filesArray = this.files.split(',');
    	var filesTotal = filesArray.length;

    	for (let item in filesArray) {

    		var fileObj = {
    			name: filesArray[item],
    			alias: filesArray[item].split('/').pop(),
    			path: this.url + filesArray[item] + '?' + Date.now(), // cache bust
    			active: false,
    			result: 'loading...'
    		}

    		var lastFile = Number(item) +1 === filesTotal;

    		this.fetchDataAXIOS(fileObj, lastFile);
    		this.filesArray.push(fileObj);
    	}
    },
    methods: {
        fetchDataAXIOS(obj) {
        	axios.get(obj.path)
        	.then(response => { // ES6

        		obj.result = response.data;

    			// refactor
    			// let prettify = document.createElement('script');
    			// prettify.setAttribute('src',"//cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js");
    			// document.head.appendChild(prettify);
        	});
        },
        enableCode() {
        	this.codeEnabled = !this.codeEnabled;
        	this.selectFile(0);
        },
        deselectFiles() {
        	for (let item in this.filesArray) {
        		this.filesArray[item].active = false;
        	}
        },
        selectFile(file) {
        	// take object or index
        	var file = Number.isInteger(file) ? this.filesArray[file] : file;
        	this.deselectFiles();
        	file.active = true;
        }
    }
});

//-----------------------------------------------------------------
// VUE INSTANCE (LAST)
//-----------------------------------------------------------------

var docsExist = document.getElementById('docs-app');

if (docsExist) {

    new Vue({
        el: '#docs-app',
        data(){
        	return {
        		themes: [
        			{ name: 'theme-base', label: 'Base', active: false },
        			{ name: 'theme-silverfox', label: 'Base', active: false },
        			{ name: 'theme-skyblue', label: 'Base', active: false },
        			{ name: 'theme-posh', label: 'Base', active: false },
        			{ name: 'theme-midnight', label: 'Base', active: false }
        		],
                modifiers: [
                    { name: 'is-tinted', label: 'Tint', active: false },
                    { name: 'has-image-bg', label: 'Bg Image', active: false },
                    { name: 'is-fixed', label: 'Fixed Image', active: false },
                    { name: 'is-parallax', label: 'Parallax', active: false }
                ]
        	}
        },
        computed: {
        	currentTheme() {
        		return this.themes.find(theme => theme.active === true);
        	}
        },
        created() {
            let prettify = document.createElement('script');
            prettify.setAttribute('src',"//cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js");
            document.head.appendChild(prettify);
        },
        methods: {
        	selectTheme(target) {
        		for (let item in this.themes) {
        			if (this.themes[item] !== target) {
        				this.themes[item].active = false;
        			}
        		}
        		target.active = !target.active;

                var classToggle = target.active ? target.name : '';

        		$('.card-docs-component .section, .global-header, .global-footer, .lv-hero-wrapper .lv-hero-item, .lv-breadcrumb-wrapper').removeClass(function (index, className) {
        			return (className.match (/\btheme-\S+/g) || []).join(' ');
        		}).addClass(classToggle);
        	},

            selectModifier(target){

                if (target.name == 'is-tinted') {
                    var tintClass = target.active ? '' : target.name;
                    $('.card-docs-component .section, .lv-hero-item').removeClass(target.name).addClass(tintClass);
                }

                if (target.name == 'has-image-bg') {
                    var bgImageClass = target.active ? '' : target.name;
                    $('.card-docs-component .section, .parallax-layer, .lv-hero-item').removeClass(target.name).addClass(bgImageClass);

                    if (!target.active) {
                        $('.card-docs-component .section, .parallax-layer, .lv-hero-item').css('background-image', 'url(https://source.unsplash.com/random)');
                    } else {
                        $('.card-docs-component .section, .parallax-layer, .lv-hero-item').css('background-image', 'none');
                    }
                }

                if (target.name == 'is-fixed') {
                    var fixedBgClass = target.active ? '' : target.name;
                    $('.card-docs-component .section, .lv-hero-item').removeClass(target.name).addClass(fixedBgClass);
                }

                if (target.name == 'is-parallax') {
                    var parallaxClass = target.active ? '' : target.name;
                    $('.card-docs-component .section, .lv-hero-item, .lv-hero-wrapper').removeClass(target.name).addClass(parallaxClass);
                }
            }
        }
    });

}
//==================================================
//
//==================================================