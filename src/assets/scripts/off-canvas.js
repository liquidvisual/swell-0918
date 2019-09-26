/*
    OFF-CANVAS.JS - Last updated: 10.09.19, 14.06.19, 13.02.19, 17.09.18, 16.04.18, 13.12.16

    - NOTES:

    * most recent taken from Workskil
    * 2019 versions delays window.location to finish animation
    * Latest Nov version fixes major problem with 3rd lvls
    * off-canvas closes when clicking hash tag anchor
    * swellnet september version can init on command
*/
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

;window.lvOffcanvas = (function($) {

    'use strict';

    return {
        init: function() {

            //-----------------------------------------------------------------
            // VARIABLES
            //-----------------------------------------------------------------

            var $html = $('html');
            var $lvPage = $('.lv-page');
            var $lvOffCanvas = $('.lv-off-canvas');
            var $dropdowns = $('.dropdown', $lvOffCanvas);
            var $anchors = $('li:not(.has-dropdown) > a', $dropdowns);
            var $submenuTrigger = $('.submenu-arrow');

            //-----------------------------------------------------------------
            // HAMBURGER CLICK
            //-----------------------------------------------------------------

            $('[data-menu-toggle]').on('click', function(event) {
                event.preventDefault();
                $html.toggleClass('has-open-menu');

                $('.lv-nav .is-mega').removeClass('is-open');
            });

            //-----------------------------------------------------------------
            // SUBMENU CLICK
            //-----------------------------------------------------------------

            $submenuTrigger.on('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
                $(this).parent().next('.dropdown').addClass('is-open');
            });

            //-----------------------------------------------------------------
            // ANCHORS
            //-----------------------------------------------------------------

            $anchors.click(function(event) {
                event.preventDefault();
                    var path = $(this).attr('href');
                    $html.removeClass('has-open-menu').addClass('has-closed-menu');

                    setTimeout(function() {
                        window.location = path;
                    }.bind(path), 200);
            });

            //-----------------------------------------------------------------
            // DROPDOWN CLICK (EXIT BACK)
            //-----------------------------------------------------------------

            $dropdowns.on('click', function(event) {
                $(this).removeClass('is-open');
                event.stopPropagation();
            });
        }
    }
//--
}(jQuery));

//==================================================
//
//==================================================