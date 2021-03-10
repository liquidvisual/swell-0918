/*
    MEGA-MENU-REPORTS.JS - Last updated: 09.03.21, 11.10.18
*/
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

;window.megaMenu = (function($) {
    'use strict';

    //-----------------------------------------------------------------
    // VARIABLES
    //-----------------------------------------------------------------

    let scrollbarSurfcams;
    let scrollbarReports;

    const scrollbars = [];

    // content area is for wordpress shop (no main body)
    const $mainBody = $('.main-body').length    && $('.main-body') ||
                    $('.content-area').length && $('.content-area');

    const $megaMenu = $('.lv-nav .is-mega > .dropdown');

    const $megaListItems = $('.lv-nav li.is-mega');

    let $megaListItemAnchors;
    let $topSelection;
    let $listItems;

    //-----------------------------------------------------------------
    // INIT ON READY
    //-----------------------------------------------------------------

    return {
        init() {

            $megaListItemAnchors = $('> a', $megaListItems);
            $topSelection = $megaMenu.find('> li:first-child');
            $listItems = $('li', $megaMenu);

            // PARENT CLICKS
            $megaListItemAnchors.on('click', megaListItemAnchorsClick);

            // CHILD CLICKS
            $listItems.on('click', listItemsClick);

            // SET TOP ITEMS ACTIVE
            if ($topSelection.length) {
                setActive($topSelection);
            }

            // Init scrollbars
            $megaMenu.each(function(item) {
                const scrollbar = new PerfectScrollbar($(this)[0]);
                scrollbars.push(scrollbar);
            });
        }
    }

    //-----------------------------------------------------------------
    // IS-MEGA ANCHORS OPEN MEGA MENUS
    //-----------------------------------------------------------------

    function megaListItemAnchorsClick() {

        // Target only list items
        var $target = $(this).parent();

        // Store temporary state
        var bool = Boolean($target.hasClass('is-open'));

        // Reset all states
        $megaListItems.removeClass('is-open');

        // Apply state for mega menu
        $target.toggleClass('is-open', !bool);

        // Handles use case of toggling and menu height getting stuck
        setDropdownHeight();

        // Set up a conditional exit click
        enableExit(!bool);

        // Prevent default on anchors
        return false;
    };

    //-----------------------------------------------------------------
    // ENABLE EXIT
    //-----------------------------------------------------------------

    function enableExit(enabled) {
        if (enabled) {
            // Create exit clicker for mega menu (once only)
            $mainBody.one('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
                // Reset all states
                $megaListItems.removeClass('is-open');
            });
        }
    }

    //-----------------------------------------------------------------
    // CLICK
    //-----------------------------------------------------------------

    function listItemsClick() {
        var $this = $(this); // list item

        // End of the line - so to speak; launch url.
        if (!$this.hasClass('has-dropdown')) {
            var url = $this.find('a').attr('href');
            window.location = url;
            return;
        }

        // Otherwise continue drilling
        setActive($this);

        // Prevent Default
        return false;
    };

    //-----------------------------------------------------------------
    // SET ACTIVE
    //-----------------------------------------------------------------

    function setActive($target) {

        const $scope = $target.parents('.is-mega');
        const $scopedActives = $('.active', $scope);

        // Remove all actives
        $scopedActives.removeClass('active');

        // Apply current active
        $target.addClass('active');

        // Drill left
        setActiveDescendants($target);

        // Drill right
        setActiveAscendants($target);

        // Set Dropdown height based on largest column
        setDropdownHeight();

        // Prevent default
        return false;
    }

    //-----------------------------------------------------------------
    // SET ACTIVE DESCENDANTS
    //-----------------------------------------------------------------

    function setActiveDescendants($target) {
        if ($target.hasClass('has-dropdown')) {
            const $nextDropdownListItem = $('> .dropdown > li.has-dropdown:first-child', $target);
            $nextDropdownListItem.addClass('active');

            // Recursively apply active to decendant until none
            setActiveDescendants($nextDropdownListItem);
        }
    }

    //-----------------------------------------------------------------
    // SET ACTIVE ASCENDANTS
    //-----------------------------------------------------------------

    function setActiveAscendants($target) {
        if (!$target.parent().parent().hasClass('is-mega')) {
            const $prevDropdownListItem = $target.parent().parent();
            $prevDropdownListItem.addClass('active');

            // Recursively apply active to ascendant until none
            setActiveAscendants($prevDropdownListItem);
        }
    }

    //-----------------------------------------------------------------
    // SET DROPDOWN HEIGHT
    //-----------------------------------------------------------------

    function setDropdownHeight() {
        const activeDropdownHeights = [429]; // hardcoded
        const activeDropdowns = $('.lv-nav .is-mega .dropdown > li.active > .dropdown');

        // Vars for calculation of available height between header and viewport bottom
        const windowHeight = $(window).height();
        const globalHeaderHeight = $('.global-header').height();
        const megaMenuHeight = $megaMenu.outerHeight();
        const maxAvailableHeight = windowHeight - globalHeaderHeight - 100; // 100 magic, stops hitting flush bottom

        // Push all heights into array to analyze
        activeDropdowns.each(function() {
            activeDropdownHeights.push($(this).height());
        })

        // Find the largest height of the dropdown
        const largestHeight = Math.max.apply(Math, activeDropdownHeights);

        // If the final height exceeds available safe height, cap it. Otherwise take largest height.
        const finalHeight = largestHeight > maxAvailableHeight
            ? maxAvailableHeight
            : largestHeight;

        // Apply height
        $megaMenu.height(finalHeight);

        // If scrollbar exists update
        if (scrollbars.length) {
            scrollbars.forEach(item => {
                item.update();
            })
        }
    }

//--
}(jQuery));

//==================================================
//
//==================================================