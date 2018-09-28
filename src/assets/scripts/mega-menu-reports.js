/*
    MEGA-MENU-REPORTS.JS - Last updated: 25.09.18
*/
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

;(function($) {
    'use strict';

    //-----------------------------------------------------------------
    // VARIABLES
    //-----------------------------------------------------------------

    var $mainAnchors = $('a[href="/reports/"], a[href="/surfcams/"]');
    var $reportsMegaMenu = $('.lv-nav .is-reports-mega-menu > .dropdown');
    var $listItems = $('li', $reportsMegaMenu);
    var currentURL = window.location.pathname.split('/')[1];

    //-----------------------------------------------------------------
    // INIT
    //-----------------------------------------------------------------

    // if (currentURL != 'reports') { // because trailing links are not in json
        var $topSelection = $reportsMegaMenu.find('> li:first-child');
        setActive($topSelection);
    // }

    // Ignore clicks from /reports and /surfcams
    $mainAnchors.each(function(){
        $(this).click(function(e){
            e.preventDefault();
        })
    })

    //-----------------------------------------------------------------
    // CLICK
    //-----------------------------------------------------------------

    $listItems.on('click', function(event) {

        var $this = $(this); // list item

        if (!$this.hasClass('has-dropdown')) {
            var url = $this.find('a').attr('href');
            window.location = url;
            return;
        }

        setActive($this);
        return false;
    });

    //-----------------------------------------------------------------
    // SET ACTIVE
    //-----------------------------------------------------------------

    function setActive($target) {

        $listItems.removeClass('active'); // remove active
        $target.addClass('active'); // apply active

        //==================================================
        // APPLY ACTIVE TO ANY DESCENDANTS
        //==================================================

        getActiveDescendant($target);
        setActiveAscendant($target);
        setDropdownHeight();

        return false; // prevent clicks
    }

    //-----------------------------------------------------------------
    // SET ACTIVE DESCENDANTS
    //-----------------------------------------------------------------

    function getActiveDescendant($target) {
        if ($target.hasClass('has-dropdown')) {
            var $nextDropdownListItem = $('> .dropdown > li.has-dropdown:first-child', $target);
            $nextDropdownListItem.addClass('active');
            getActiveDescendant($nextDropdownListItem); // recursive
        }
    }

    //-----------------------------------------------------------------
    // SET ACTIVE DESCENDANTS
    //-----------------------------------------------------------------

    function setActiveAscendant($target) {
        if (!$target.parent().parent().hasClass('is-mega')) {
            var $prevDropdownListItem = $target.parent().parent();
            $prevDropdownListItem.addClass('active');
            setActiveAscendant($prevDropdownListItem); // recursive
        }
    }

    //-----------------------------------------------------------------
    // SET DROPDOWN HEIGHT
    //-----------------------------------------------------------------

    function setDropdownHeight() {
        var activeDropdowns = $('.lv-nav .is-mega .dropdown > li.active > .dropdown');
        var activeDropdownHeights = [];

        activeDropdowns.each(function() {
            activeDropdownHeights.push($(this).height());
        })

        // var largestHeight = Math.max(...activeDropdownHeights); // ES6
        var largestHeight = Math.max.apply(Math, activeDropdownHeights);
        var finalHeight = largestHeight > 429 ? largestHeight : 429;

        $reportsMegaMenu.height(finalHeight);
    }

//--
}(jQuery));

//==================================================
//
//==================================================