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

//==================================================
//
//==================================================