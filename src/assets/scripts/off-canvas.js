/*
    OFF-CANVAS.JS - Last updated: 27.09.18, 13.12.16

    - Notes: Latest Nov version fixes major problem with 3rd lvls
    * off-canvas closes when clicking hash tag anchor
*/
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

;(function($) {
    'use strict';

    //-----------------------------------------------------------------
    // VARIABLES
    //-----------------------------------------------------------------

    var $html = $('html');
    var $lvPage = $('.lv-page');
    var $lvOffCanvas = $('.lv-off-canvas');
    var $dropdowns = $('.dropdown', $lvOffCanvas);
    //var $hashAnchor = $('a[href*="#"]:not([href="#"])', $lvOffCanvas);
    var $anchors = $('li:not(.has-dropdown) > a', $dropdowns);
    // var $submenuTrigger = $('<span class="submenu-arrow"><i class="fa fa-angle-right"></i></span>');
    var $submenuTrigger = $('.submenu-arrow');

    //-----------------------------------------------------------------
    // HAMBURGER CLICK
    //-----------------------------------------------------------------

    $('[data-menu-toggle]').click(function(event) {

        event.preventDefault();
        // event.stopPropagation();

        $html.toggleClass('has-open-menu');

        //==================================================
        // OPEN MENU
        //==================================================

        if (!$('.has-open-menu').length) {
            // $html.removeClass('has-closed-menu').addClass('has-open-menu');

            //==================================================
            // CLOSE MENU
            // Assign the close to .lv-page container
            // Requires timeout so not to contradict above
            //==================================================

            // setTimeout(function() {

            //     $lvPage.click(function(event){
            //         event.stopPropagation();

            //         if ($('.has-open-menu').length) {
            //             $html.removeClass('has-open-menu').addClass('has-closed-menu');
            //             $(this).unbind('click');
            //         }
            //     });
            // }, 10)
        }
    });

    //-----------------------------------------------------------------
    // HASH ANCHOR CLICK - NEW -
    //-----------------------------------------------------------------

    // $hashAnchor.click(function(event){
    //     event.preventDefault();
    //     event.stopPropagation();
    //     $html.removeClass('has-open-menu').addClass('has-closed-menu');
    //     $lvPage.unbind('click');
    // });

    //-----------------------------------------------------------------
    // SUBMENU CLICK
    //-----------------------------------------------------------------

    $submenuTrigger.click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().next('.dropdown').addClass('is-open');
    });

    //-----------------------------------------------------------------
    // ANCHORS
    //-----------------------------------------------------------------

    $anchors.click(function(event) {
        $html.removeClass('has-open-menu');
    });

    //-----------------------------------------------------------------
    // DROPDOWN CLICK (EXIT BACK)
    //-----------------------------------------------------------------

    $dropdowns.click(function(event) {
        $(this).removeClass('is-open');
        event.stopPropagation();
    });

    //-----------------------------------------------------------------
    // CREATE SUBMENU TRIGGER
    // Not sure why, but this has to come LAST
    //-----------------------------------------------------------------

    // $('.lv-off-canvas .has-dropdown > a').append($submenuTrigger);

//--
}(jQuery));

//==================================================
//
//==================================================