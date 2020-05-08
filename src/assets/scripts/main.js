/*
    MAIN.JS - Last updated: 09.09.19
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// ON READY
//-----------------------------------------------------------------

$(document).ready(function() {

    // Remove page loader by adding loaded to html
    // document.documentElement.classList.add('has-loaded');

    // Tooltips
    // $('[data-toggle="tooltip"]').tooltip();

    // Flatpickr
    $('.datepicker').flatpickr({
            format: "Y-m-d", // 2018-12-18
            altFormat: "d M Y", // 06 Dec 2018 etc
            altInput: true,
            allowInput: true
        }
    );

    // https://github.com/flatpickr/flatpickr/issues/892
    const datePickers = document.querySelectorAll('.datepicker');

    datePickers.forEach((target) => {
        target.onkeypress = function() {
            return false;
        }
    })
});

//-----------------------------------------------------------------
// PAGE SWITCHER (DEV ONLY)
//-----------------------------------------------------------------

$('.global-footer .page-state-switcher input').click(function(event) {
    var $body = $('body');
    var $this = $(this);
    var val = $this.attr('value');

    if ($this.is(':checked')) {
        $body.addClass(val);
    } else {
        $body.removeClass(val);
    }

    setTimeout(function() {
        setHeadroomOffset();
    }, 1000)
});

//-----------------------------------------------------------------
// THEATRE MODE FOR PLYR (NOT FLOW PLAYER)
//-----------------------------------------------------------------

var theatreMode = false;

var theatreMode = function() {
    var $expandBtn = $('#plyr-btn-expand');
    var $expandBtnText = $('small .text', $expandBtn);
    var $expandBtnIcon = $('.fa', $expandBtn);
    var $expandBtnTooltip = $('.plyr__tooltip > .text', $expandBtn);
    var $heading = $('.page-heading');
    var $plyr = $('#surfcam-player-plyr');
    var $plyrHolder = $('#surfcam-player-plyr-holder');
    var $top = $('#top-contents-wrapper');

    theatreMode = !theatreMode;

    if (!theatreMode) {
        $expandBtnText.text('SHRINK');
        $expandBtnTooltip.text('Shrink screen');
        $expandBtnIcon.removeClass('fa-arrows-h').addClass('fa-compress fa-rotate-45');

        $top.find('.spacer').hide();
        $('#vue-app > div > h2').removeClass('my-4').addClass('mb-4 mt-0');
        $heading.insertBefore('.main-body > .container > .row');
        $top.insertAfter($heading);
        $plyr.insertAfter($top).addClass('mb-4');
    }
    else {
        $expandBtnText.text('EXPAND');
        $expandBtnTooltip.text('Expand screen');
        $expandBtnIcon.removeClass('a-compress fa-rotate-45').addClass('fa-arrows-h');

        $top.find('.spacer').show();
        $('#vue-app > div > h2').removeClass('mb-4 mt-0').addClass('my-4');
        $heading.prependTo('.main-body > .container > .row > .col-lg-8');
        $top.insertAfter($heading);
        $plyr.appendTo($plyrHolder).removeClass('mb-4');
    }
}

// ASYNC
setTimeout(() => {
    $('#plyr-btn-expand').on('click', theatreMode);
}, 300);

//==================================================
//
//==================================================