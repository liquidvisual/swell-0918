/*
    MEGA-MENU-REPORTS.JS - Last updated: 08.10.18
*/
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

;(function($) {
    'use strict';

    //-----------------------------------------------------------------
    // VARIABLES
    //-----------------------------------------------------------------

    var perfectScrollbar;
    var $mainBody = $('.main-body');
    var $reportsMegaMenu = $('.lv-nav .is-reports-mega-menu > .dropdown');
    var $megaListItems = $('.lv-nav li.is-mega');
    var $megaListItemAnchors = $('> a', $megaListItems);
    var $topSelection = $reportsMegaMenu.find('> li:first-child');
    var $listItems = $('li', $reportsMegaMenu);

    //-----------------------------------------------------------------
    // INIT ON READY
    //-----------------------------------------------------------------

    $(function() {
        // var currentURL = window.location.pathname.split('/')[1];

        // if (currentURL != 'reports') { // because trailing links are not in json
            if ($topSelection.length) {
                setActive($topSelection);
            }
        // }
    });

    //-----------------------------------------------------------------
    // IS-MEGA ANCHORS OPEN MEGA MENUS
    //-----------------------------------------------------------------

    $megaListItemAnchors.click(function(e) {

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
    })

    //-----------------------------------------------------------------
    // ENABLE EXIT
    //-----------------------------------------------------------------

    function enableExit(enabled) {
        if (enabled) {
            // Create exit clicker for mega menu (once only)
            $mainBody.one('click', function(event) {
                // Reset all states
                $megaListItems.removeClass('is-open');
            });
        }
    }

    //-----------------------------------------------------------------
    // CLICK
    //-----------------------------------------------------------------

    $listItems.on('click', function(event) {
        var $this = $(this); // list item

        // End of the line, launch url
        if (!$this.hasClass('has-dropdown')) {
            var url = $this.find('a').attr('href');
            window.location = url;
            return;
        }

        // Otherwise continue drilling
        setActive($this);

        // Prevent Default
        return false;
    });

    //-----------------------------------------------------------------
    // SET ACTIVE
    //-----------------------------------------------------------------

    function setActive($target) {

        // Remove all actives
        $listItems.removeClass('active');

        // Apply current active
        $target.addClass('active');

        // Drill left
        getActiveDescendant($target);

        // Drill right
        setActiveAscendant($target);

        // Set Dropdown height based on largest column
        setDropdownHeight();

        // Prevent default
        return false;
    }

    //-----------------------------------------------------------------
    // SET ACTIVE DESCENDANTS
    //-----------------------------------------------------------------

    function getActiveDescendant($target) {
        if ($target.hasClass('has-dropdown')) {
            var $nextDropdownListItem = $('> .dropdown > li.has-dropdown:first-child', $target);
            $nextDropdownListItem.addClass('active');

            // Recursively apply active to decendant until none
            getActiveDescendant($nextDropdownListItem);
        }
    }

    //-----------------------------------------------------------------
    // SET ACTIVE ASCENDANTS
    //-----------------------------------------------------------------

    function setActiveAscendant($target) {
        if (!$target.parent().parent().hasClass('is-mega')) {
            var $prevDropdownListItem = $target.parent().parent();
            $prevDropdownListItem.addClass('active');

            // Recursively apply active to ascendant until none
            setActiveAscendant($prevDropdownListItem);
        }
    }

    //-----------------------------------------------------------------
    // SET DROPDOWN HEIGHT
    //-----------------------------------------------------------------

    function setDropdownHeight() {
        var activeDropdownHeights = [];
        var activeDropdowns = $('.lv-nav .is-mega .dropdown > li.active > .dropdown');

        // Vars for calculation of available height between header and viewport bottom
        var windowHeight = $(window).height();
        var globalHeaderHeight = $('.global-header').height();
        var megaMenuHeight = $reportsMegaMenu.outerHeight();
        var maxAvailableHeight = windowHeight - globalHeaderHeight - 100; // 100 magic, stops hitting flush bottom

        // Push all heights into array to analyze
        activeDropdowns.each(function() {
            activeDropdownHeights.push($(this).height());
        })

        // Find the largest height of the dropdown
        var largestHeight = Math.max.apply(Math, activeDropdownHeights);
        var finalHeight = 429;

        // Don't let height reduce past the default of 429 (height of first column)
        if (largestHeight > 429) {

            // If the final height exceeds available safe height, cap it. Otherwise take largest height.
            finalHeight = largestHeight > maxAvailableHeight ? maxAvailableHeight : largestHeight;
        }

        // Apply height
        $reportsMegaMenu.height(finalHeight);

        // If scrollbar exists, destroy and reset
        if (perfectScrollbar) {
            perfectScrollbar.destroy();
            perfectScrollbar = null;
        }

        // Apply scrollbar
        perfectScrollbar = new PerfectScrollbar('.lv-nav li.has-dropdown.is-reports-mega-menu > .dropdown');
    }

//--
}(jQuery));

//==================================================
//
//==================================================