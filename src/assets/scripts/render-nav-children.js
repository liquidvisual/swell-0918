/*
    RENDER-NAV.JS - Last updated: 23.11.18

    USAGE:
    	<ul data-render-nav="{{index}}"></ul>
*/
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

;(function($) {
    'use strict';

	//-----------------------------------------------------------------
	// VARIABLES
	//-----------------------------------------------------------------

	const pageURL = window.location.pathname;
	const sitemapURL = '/sitemap.json?v='+Date.now();
	const fallbackURL = 'https://swellnet-2018.yourwebvisual.com/sitemap.json?v='+Date.now();
	let attempts = 0;

	fetchSitemap(sitemapURL);

	// FETCH SITEMAP
	function fetchSitemap(path) {
		axios.get(path, '', {
		    headers: {
		        'Accept': '*/*'
		    }
		})
		.then(response => {

			// console.log('Retrieved: V19');
			console.info('Success. Sitemap fetched.');

			const sitemapJSON = response.data;

			if (sitemapJSON) {
				document.querySelectorAll('[data-render-nav-children]').forEach(item => {
					const index = parseInt(item.dataset.renderNavChildren);
					const childArr = sitemapJSON[index].children;

					if (childArr) {

						// The shop uses the same codebase for nav rendering
						// so ensure it defaults to absolute paths for it.

						const host = window.location.host;
						const useAbsolutePaths = host === 'shop.swellnet.com' ||
									             host === 'shopdev.swellnet.com' ||
									             host === 'swellnet.local' ||
									             host.indexOf('yourwebvisual.com') !== -1;

						let baseUrl = useAbsolutePaths ? 'https://www.swellnet.com' : '';

						createList($(item), childArr, baseUrl);
					}
				})

				// Init Mega Menu
				megaMenu.init();

				// Init Offcanvas
				lvOffcanvas.init();

				// Tooltips
				$('[data-toggle="tooltip"]').tooltip();
			}
		})
		.catch(error => {
			console.warn("Error: failed to fetch sitemap. Retrying...");
			attempts++;

			if (attempts > 2)
				throw Error(response.statusText);
			else
				fetchSitemap(fallbackURL);
		})
	}

	//-----------------------------------------------------------------
	// FETCH NOT COMPATIBLE WITH IE11
	//-----------------------------------------------------------------
	/*
	function fetchSitemap(path) {
		fetch(path)
		.then((response) => {
			if (!response.ok) {

				console.warn("Error: failed to fetch sitemap. Retrying...");
				attempts++;

				if (attempts > 2)
					throw Error(response.statusText);
				else
					fetchSitemap(fallbackURL);
			}

			return response.json();
		})
		.then((sitemapJSON) => {

			console.log('TEST: V13');
			console.info('Success. Sitemap fetched.');

			document.querySelectorAll('[data-render-nav-children]').forEach(item => {
				const index = parseInt(item.dataset.renderNavChildren);
				const childArr = sitemapJSON[index].children;

				if (childArr) createList($(item), childArr);
			})

			// Init Mega Menu
			megaMenu.init();

			// Init Offcanvas
			lvOffcanvas.init();

			// Tooltips
			$('[data-toggle="tooltip"]').tooltip();
		});
	}*/

	//-----------------------------------------------------------------
	// CREATE LIST
	//-----------------------------------------------------------------

	function createList(target, arr, baseUrl = '') {

	    arr.forEach(item => {

	    	const li_classes =
	    			`${item.url == "/" && pageURL == "/" ? `active` : ''}` + ' ' +
	    			`${pageURL.includes(item.url) && pageURL != "/" ? `active` : ''}` + ' ' +
	    			`${item.children ? `has-dropdown` : ''}` + ' ' +
	    			`${item.classes ? item.classes : ''}` + ' ' +
	    			`${item.observed ? `is-observed` : ''}` + ' ' +
	    			`${item.premium ? `is-premium` : ''}`;

	        const li_item =

	        		// LIST ITEM
	        		`<li class="${li_classes}">` +

	        			// ANCHOR
		        		`<a href="${baseUrl + item.url}" data-alias="${item.alias ? item.alias : ''}">` +

							// TEXT
			        		`<span class="text">${item.name}</span>` +

			        		// SUBMENU ARROW
			        		`${item.children ?
			        			`<span class="submenu-arrow"><i class="fa fa-angle-right"></i></span>` : ''}` +

			        		// OBSERVED ICON
			        		`${item.observed ?
			        			`<img class="obs-icon" title="Observed surf report" src="https://www.swellnet.com/assets/img/ui/obs-icon.svg" data-toggle="tooltip" alt="Observed">` : ''}` +

			        		// PREMIUM ICON
			        		`${item.premium ?
			        			`<img class="premium-icon" title="Premium surfcam for subscribers" src="https://www.swellnet.com/assets/img/ui/premium-icon.svg" data-toggle="tooltip" alt="Premium">` : ''}` +
			        	`</a>` +

	        		`</li>`;

	        const $li_item = $(li_item);

	        target.append($li_item);

	        // ~~~~ RECURSION BEGINS ~~~~

	        if (item.children) {

	        	const ul_item = `<ul class="dropdown" data-parent="${ item.name }"></ul>`;
	        	const $ul_item = $(ul_item);

	        	$li_item.append($ul_item);
	            createList($ul_item, item.children, baseUrl);
	        }
	    });
	}
//--
}(jQuery));

//==================================================
//
//==================================================