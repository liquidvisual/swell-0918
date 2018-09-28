/*
    MAIN.JS - Last updated: 27.08.18
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
// const player = new Plyr('audio', {});

// Expose player so it can be used from the console
// window.player = player;

//-----------------------------------------------------------------
// ONLOAD - TOOLTIP
//-----------------------------------------------------------------

$(function() {
    $('[data-toggle="tooltip"]').tooltip();

    setPagePaddingTop();
    initHeadroom();
})

//-----------------------------------------------------------------
// SCROLL TO
// Exclude empty links, sitemap and tabs
//-----------------------------------------------------------------

// $('a[href*="#"]:not([href="#"], [href="#sitemap"], [data-toggle="tab"])').click(function() {
//     var id = $(this).attr('href');
//     var endPos = $(id);

//     if (endPos.length) {
//         $.scrollTo(endPos.offset().top - 50, 500);
//         // return false;
//     }
// });



$('.page-state-switcher input').click(function(event){
    var $body = $('body');
    var $this = $(this);
    var val = $this.attr('value');

    if ($this.is(':checked')) {
        $body.addClass(val);
    } else {
        $body.removeClass(val);
    }
    setPagePaddingTop();
    initHeadroom();
})

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
// ADJUST PAGE FOR STICKY HEADER
//-----------------------------------------------------------------

var $lvPage = $('.lv-page');
var $globalHeader = $('.global-header');

$(window).on('resize', setPagePaddingTop);

function setPagePaddingTop() {
    $lvPage.css('paddingTop', $globalHeader.height() + 40); // 40 is the top gutter
}

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
        onTop : setPagePaddingTop,
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