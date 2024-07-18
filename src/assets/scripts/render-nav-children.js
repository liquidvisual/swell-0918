/*
    RENDER-NAV.JS - Last updated: 17.07.24, 09.03.21, 23.11.18

	- Notes:
		* Removed JQuery dependency.

    - USAGE:
    	<ul data-render-nav="{{index}}"></ul>
*/
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

(function () {
    "use strict";

    //-----------------------------------------------------------------
    // VARIABLES
    //-----------------------------------------------------------------

    const pageURL = window.location.pathname;
    const sitemapURL = window.sitemap || "/sitemap.json?v=" + Date.now();
    const fallbackURL =
        "https://swellnet-2018.yourwebvisual.com/sitemap.json?v=" + Date.now();
    let attempts = 0;

    //-----------------------------------------------------------------
    // INIT
    //-----------------------------------------------------------------

    fetchSitemap(sitemapURL);

    //-----------------------------------------------------------------
    // FETCH SITEMAP
    // Using Axios since Fetch not available to IE11.
    //-----------------------------------------------------------------

    function fetchSitemap(path) {
        axios
            .get(path, "", {
                headers: {
                    Accept: "*/*",
                },
            })
            .then((response) => {
                // console.log('Retrieved: V19');
                console.info("%c Success. Sitemap fetched.", "color: green");

                const sitemapJSON = response.data;

                if (sitemapJSON) {
                    document
                        .querySelectorAll("[data-render-nav-children]")
                        .forEach((item) => {
                            const index = parseInt(
                                item.dataset.renderNavChildren
                            );
                            const childArr =
                                sitemapJSON[index] &&
                                sitemapJSON[index].children;

                            if (childArr) {
                                // The shop uses the same codebase for nav rendering
                                // so ensure it defaults to absolute paths for it.

                                const host = window.location.host;
                                const useAbsolutePaths =
                                    host === "shop.swellnet.com" ||
                                    host === "shopdev.swellnet.com" ||
                                    host === "swellnet.myshopify.com" ||
                                    host === "swellnet.local" ||
                                    host.indexOf("yourwebvisual.com") !== -1;

                                let baseUrl = useAbsolutePaths
                                    ? "https://www.swellnet.com"
                                    : "";

                                createList(item, childArr, baseUrl);
                            } else {
                                console.warn(
                                    `Warning! There are no children at index ${index} for node:`,
                                    sitemapJSON[index]
                                );
                            }
                        });

                    // Init Mega Menu
                    megaMenu.init();

                    // Init Offcanvas
                    lvOffcanvas.init();

                    // Tooltips
                    $('[data-toggle="tooltip"]').tooltip();
                }
            })
            .catch((error) => {
                console.warn(
                    "%c Error: failed to fetch sitemap. Retrying...",
                    "color: red"
                );
                attempts++;

                if (attempts > 2) {
                    throw Error(response.statusText);
                } else {
                    fetchSitemap(fallbackURL);
                }
            });
    }

    //-----------------------------------------------------------------
    // CREATE LIST
    //-----------------------------------------------------------------

    function createList(target, arr, baseUrl = "") {
        arr.forEach((item) => {
            const listClasses =
                `${
                    item.url === "/" && pageURL === "/"
                        ? "active active-init"
                        : ""
                }` +
                " " +
                `${
                    pageURL.includes(item.url) && pageURL !== "/"
                        ? `active active-init`
                        : ""
                }` +
                " " +
                `${item.twoByTwo ? "is-2x2" : ""}` +
                " " +
                `${item.alias === "INDEX" ? "is-index" : ""}` +
                " " +
                `${item.children ? "has-dropdown" : ""}` +
                " " +
                `${item.classes ? item.classes : ""}` +
                " " +
                `${item.observed ? "is-observed" : ""}` +
                " " +
                `${item.premium ? "is-premium" : ""}`;

            const listItemString =
                // LIST ITEM
                `<li class="${listClasses.trim()}">` +
                // ANCHOR
                `<a href="${baseUrl + item.url}" data-alias="${
                    item.alias ? item.alias : ""
                }">` +
                // TEXT
                `<span class="text">${item.name}</span>` +
                // SUBMENU ARROW
                `${
                    item.children
                        ? `<span class="submenu-arrow"><i class="fa fa-angle-right"></i></span>`
                        : ""
                }` +
                // INDEX ICON
                `${
                    item.alias === "INDEX"
                        ? `<span class="submenu-index"><i class="fa fa-th"></i></span>`
                        : ""
                }` +
                // OBSERVED ICON
                `${
                    item.observed
                        ? `<img class="obs-icon" title="Observed surf report" src="https://www.swellnet.com/assets/img/ui/obs-icon.svg" data-toggle="tooltip" alt="Observed">`
                        : ""
                }` +
                // PREMIUM ICON
                `${
                    item.premium
                        ? `<img class="premium-icon" title="Premium surfcam for subscribers" src="https://www.swellnet.com/assets/img/ui/premium-icon.svg" data-toggle="tooltip" alt="Premium">`
                        : ""
                }` +
                `</a>` +
                `</li>`;

            const listItemEl = new DOMParser().parseFromString(
                listItemString,
                "text/html"
            ).body.firstChild;
            target.appendChild(listItemEl);

            // RECURSION BEGINS
            if (item.children) {
                const ulItem = `<ul class="dropdown" data-parent="${item.name}"></ul>`;
                const ulItemEl = new DOMParser().parseFromString(
                    ulItem,
                    "text/html"
                ).body.firstChild;

                listItemEl.appendChild(ulItemEl);
                createList(ulItemEl, item.children, baseUrl);
            }
        });
    }
})();

//==================================================
//
//==================================================
