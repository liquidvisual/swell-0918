/*
    RENDER-NAV.JS - Last updated: 20.11.18

    USAGE:
    	<ul data-render-nav></ul>
*/
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
/*
;(function($) {
    'use strict';

	//-----------------------------------------------------------------
	// VARIABLES
	//-----------------------------------------------------------------

	const page_url = window.location.pathname;

	//-----------------------------------------------------------------
	// CREATE LIST
	//-----------------------------------------------------------------

	function createList(target, array) {

	    array.forEach((item) => {

	    	const li_classes =
	    			`${item.url == "/" && page_url == "/" ? `active` : ''}` + ' ' +
	    			`${page_url.includes(item.url) && page_url != "/" ? `active` : ''}` + ' ' +
	    			`${item.children ? `has-dropdown` : ''}` + ' ' +
	    			`${item.classes ? item.classes : ''}` + ' ' +
	    			`${item.observed ? `is-observed` : ''}` + ' ' +
	    			`${item.premium ? `is-premium` : ''}`;

	        const li_item =

	        		// LIST ITEM
	        		`<li class="${li_classes}">` +

	        			// ANCHOR
		        		`<a href="${item.url}" data-alias="${item.alias ? item.alias : ''}">` +

							// TEXT
			        		`<span class="text">${item.name}</span>` +

			        		// SUBMENU ARROW
			        		`${item.children ?
			        			`<span class="submenu-arrow"><i class="fa fa-angle-right"></i></span>` : ''}` +

			        		// OBSERVED ICON
			        		`${item.observed ?
			        			`<img class="obs-icon" title="Observed surf report" src="/assets/img/ui/obs-icon.svg" data-toggle="tooltip" alt="Observed">` : ''}` +

			        		// PREMIUM ICON
			        		`${item.premium ?
			        			`<img class="premium-icon" title="Premium surfcam for subscribers" src="/assets/img/ui/premium-icon.svg" data-toggle="tooltip" alt="Premium">` : ''}` +
			        	`</a>` +

	        		`</li>`;

	        const $li_item = $(li_item);

	        target.append($li_item);

	        // ~~~~ RECURSION BEGINS ~~~~

	        if (item.children) {

	        	const ul_item = `<ul class="dropdown" data-parent="${ item.name }"></ul>`;
	        	const $ul_item = $(ul_item);

	        	$li_item.append($ul_item);
	            createList($ul_item, item.children);
	        }
	    });
	}

	//-----------------------------------------------------------------
	// RENDER NAV
	//-----------------------------------------------------------------

	try {
		$('[data-render-nav]').each(function() {
			// console.time('hello');
			createList($(this), sitemapJSON);
			// console.timeEnd('hello')
		});
	}
	catch(err) {
		// sitemap.json is missing!
	}

//--
}(jQuery));
*/
//==================================================
//
//==================================================