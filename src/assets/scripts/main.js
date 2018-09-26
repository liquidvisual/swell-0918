/*
    MAIN.JS - Last updated: 15.08.18
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// ON LOAD
//-----------------------------------------------------------------

$(window).on('load', function() {
    $('html').addClass('has-loaded');
});

//-----------------------------------------------------------------
// AUDIO PLAYER
// https://codepen.io/pen
//-----------------------------------------------------------------

// Change "{}" to your options:
// https://github.com/sampotts/plyr/#options
const player = new Plyr('audio', {});

// Expose player so it can be used from the console
window.player = player;

//-----------------------------------------------------------------
// ONLOAD - TOOLTIP
//-----------------------------------------------------------------

$(function() {
    $('[data-toggle="tooltip"]').tooltip();

    initHeadroom();
})

//-----------------------------------------------------------------
// SCROLL TO
// Exclude empty links, sitemap and tabs
//-----------------------------------------------------------------

$('a[href*="#"]:not([href="#"], [href="#sitemap"], [data-toggle="tab"])').click(function() {
    var id = $(this).attr('href');
    var endPos = $(id);

    if (endPos.length) {
        $.scrollTo(endPos.offset().top - 50, 500);
        // return false;
    }
});

//-----------------------------------------------------------------
// SCROLL TOP
//-----------------------------------------------------------------

$('[data-back-top]').click(function() {
    $.scrollTo(0, 500);
});

//-----------------------------------------------------------------
// OPEN SITEMAP (OPTIONAL)
//-----------------------------------------------------------------

// if ($('a[href="#sitemap"]').length) {
//     $('a[href="#sitemap"]').click(function() {
//         var id = $(this).attr('href');
//         var endPos = $(id);
//         $('.fa-angle-down').toggleClass('is-active');
//         setTimeout(function(){
//             $.scrollTo(endPos.offset().top, 300);
//         }, 300);
//     });
// }

//-----------------------------------------------------------------
// HEADROOM.js
//-----------------------------------------------------------------

function initHeadroom() {

    // console.log($('.global-header-top').height())

    $(".lv-page, .btn-back-top").headroom({
        // vertical offset in px before element is first unpinned
        offset : $('.global-header-top').height(),
        // scroll tolerance in px before state changes
        tolerance : 0,
        // or you can specify tolerance individually for up/down scroll
        tolerance : {
            up : 5,
            down : 0
        },
        // css classes to apply
        classes : {
            // when element is initialised
            initial : "headroom",
            // when scrolling up
            pinned : "headroom--pinned",
            // when scrolling down
            unpinned : "headroom--unpinned",
            // when above offset
            top : "headroom--top",
            // when below offset
            notTop : "headroom--not-top",
            // when at bottom of scoll area
            bottom : "headroom--bottom",
            // when not at bottom of scroll area
            notBottom : "headroom--not-bottom"
        },
        // element to listen to scroll events on, defaults to `window`
        // scroller : someElement,
        // callback when pinned, `this` is headroom object
        onPin : function() {},
        // callback when unpinned, `this` is headroom object
        onUnpin : function() {},
        // callback when above offset, `this` is headroom object
        onTop : function() {},
        // callback when below offset, `this` is headroom object
        onNotTop : function() {},
        // callback when at bottom of page, `this` is headroom object
        onBottom : function() {},
        // callback when moving away from bottom of page, `this` is headroom object
        onNotBottom : function() {}
    });
}

//==================================================
//
//==================================================