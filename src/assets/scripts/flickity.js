/*
    SLICK-SLIDER.JS - Last updated: 21.09.17
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// INIT
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// ON RESIZE
//-----------------------------------------------------------------

function launchSlider() {
	$('[data-thumb-slider]').each(function(){

		//==================================================
		// VARS
		//==================================================

		var $this = $(this);
		var $prevArrow = $this.parent().find('.thumb-slider-prev-btn');
		var $nextArrow = $this.parent().find('.thumb-slider-next-btn');

		//==================================================
		// CAROUSEL
		//==================================================

		var $carousel = $this.flickity({
			adaptiveHeight: true,
			autoPlay: false,
			// autoPlay: 1500,
			cellAlign: 'left',
			contain: true,
			dragThreshold: 3,
			freeScroll: true,
			freeScrollFriction: 0.075, // lower friction, slides easier
			friction: 0.28, // Higher friction makes the slider feel stickier and less bouncy
			imagesLoaded: true,
			pageDots: false,
			prevNextButtons: false,
			pauseAutoPlayOnHover: false,
			selectedAttraction: 0.025, // Higher attraction makes the slider move faster
			watchCSS: true, // run/destroy
			wrapAround: false, // infinite
		});

		//==================================================
		// ARROWS
		//==================================================

		$prevArrow.on( 'click', function() {
			$carousel.flickity('previous');
		});

		$nextArrow.on( 'click', function() {
			$carousel.flickity('next');
		});
	//--
	});
}

launchSlider();

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
//==================================================
//
//==================================================