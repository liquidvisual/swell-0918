/*
    MAIN.JS - Last updated: 08.10.18
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------

var headroom = null;
var lvPage = document.querySelector(".lv-page");
var resizeTimer;

var $lvPage = $('.lv-page');
var $globalHeader = $('.global-header');
var $html = $('html');

//-----------------------------------------------------------------
// ON READY
//-----------------------------------------------------------------

$(document).ready(function() {

    // Tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // onResize
    $(window).on('resize', setPagePaddingTop);

    // Set the page padding based on header
    setPagePaddingTop();

    // Headroom
    initHeadroom();

    // Remove page loader
    if (!$html.hasClass('has-loaded')) {
        $html.addClass('has-loaded');
    }
});

//-----------------------------------------------------------------
// ADJUST PAGE FOR STICKY HEADER (REFACTOR)
//-----------------------------------------------------------------

function setPagePaddingTop() {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(function(){
        $lvPage.css({
            'paddingTop': $globalHeader.height() + 40, // 40 is the top gutter.
            'visibility': 'visible'
        });

        // If headroom has init - set offsets
        if (headroom) {
            setHeadroomOffset();
        }
    }, 250)
}

//-----------------------------------------------------------------
// HEADROOM.js
//-----------------------------------------------------------------

function initHeadroom() {

    var headroomOptions = {
        // vertical offset in px before element is first unpinned
        offset : 50,
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
    };

    // Init only if no headroom and return
    if (!headroom) {
        headroom = new Headroom(lvPage, headroomOptions);
        setHeadroomOffset(); // here?
        headroom.init();
        return;
    }
}

//-----------------------------------------------------------------
// SET HEADROOM OFFSET
// 1050px is where the header is fixed by default
// Mobile and tablet, the header is dynamic with scroll
//-----------------------------------------------------------------

function setHeadroomOffset() {
    if ($(window).width() >= 1050) {
        headroom.offset = $('.global-header-top').height();
    }
    else {
        headroom.offset = $('.global-header').height();
    }
}

//-----------------------------------------------------------------
// PAGE SWITCHER (DEV ONLY)
//-----------------------------------------------------------------

$('.page-state-switcher input').click(function(event) {
    var $body = $('body');
    var $this = $(this);
    var val = $this.attr('value');

    if ($this.is(':checked')) {
        $body.addClass(val);
    } else {
        $body.removeClass(val);
    }
    setPagePaddingTop();
    setHeadroomOffset();
});

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
//==================================================
//
//==================================================