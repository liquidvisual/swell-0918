/*
    FLOW-PLAYER.JS - Last updated: 12.05.20
*/
//-----------------------------------------------------------------
// THEATRE MODE FOR FLOW PLAYER ONLY
//-----------------------------------------------------------------

if ($('.video-player-flow').length) {
    flowPlayerTheatreMode();
}

//-----------------------------------------------------------------
// FLOW PLAYER THEATRE MODE
//-----------------------------------------------------------------

function flowPlayerTheatreMode() {

    var $expandBtn = $('#flow-btn-expand');
    var $expandBtnText = $('small .text', $expandBtn);
    var $expandBtnIcon = $('.fa', $expandBtn);
    var $heading = $('.page-title');
    var $top = $('#top-contents-wrapper');
    var $flowPlayer = $('#video-player-flow');
    var $flowPlayerOverlaySponsor = $('#video-player-overlay-sponsor');
    var $flowPlayerOverlayPremiumFeature = $('#video-player-overlay-premium-feature');
    var $body = $('body');

    //==================================================
    // EXPAND
    //==================================================

    $('.flow-btn-expand').on('click', function() {
        $top.find('.spacer').hide();
        $('#vue-app > div > h2').removeClass('mt-4');
        $heading.prependTo('.main-body > .container');
        $top.insertAfter($heading);

        // Scroll to top of main body to avoid page jump.
        $.scrollTo($('.main-body').offset().top - 74, 0);

        // Hide player and sponsor overlay.
        $flowPlayer.hide();
        $flowPlayerOverlaySponsor.hide()

        // Hide premium feature prompt.
        $flowPlayerOverlayPremiumFeature.removeAttr('hidden');

        // We need to hide the separate nag prompt which shows after 30secs.
        $body.addClass('has-flowplayer-expanded');
    });

    //==================================================
    // SHRINK
    //==================================================

    $('.flow-btn-shrink').on('click', function() {
        $top.find('.spacer').show();
        $('#vue-app > div > h2').addClass('mt-4');
        $heading.prependTo('.main-body > .container .col-lg-8');
        $top.insertAfter($heading);

        // Scroll to top of main body to avoid page jump.
        $.scrollTo($('.main-body').offset().top - 74, 0);

        // Hide player and sponsor overlay.
        $flowPlayer.show();
        $flowPlayerOverlaySponsor.show();

        // Show premium feature prompt.
        $flowPlayerOverlayPremiumFeature.attr('hidden', true);

        // We need to hide the separate nag prompt which shows after 30secs.
        $body.removeClass('has-flowplayer-expanded');
    });
}

//==================================================
//
//==================================================