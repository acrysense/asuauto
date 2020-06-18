$(document).ready(function(){
    // MAIN CAROUSEL
	$('#main__carousel').owlCarousel({
		items: 1,
		margin: 30,
		loop: true,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
        smartSpeed: 1000,
        navText: [
            "<i class='fal fa-chevron-left chevron-big'></i>",
            "<i class='fal fa-chevron-right chevron-big'></i>"
        ]
	});

    // PRODUCTS CAROUSEL
	$('#product__carousel, #novelty__carousel, #recommendations__carousel').owlCarousel({
		responsive : {
			0 : {
				items: 1
			},
			560 : {
				items: 1
			},
			576 : {
				items: 2
			},
			768 : {
				items: 2
			},
			992 : {
				items: 3
			},
			1200 : {
				items: 4
			}
		},
		loop: true,
		nav: true,
        dots: false,
        navText: [
            "<i class='fal fa-chevron-left chevron-big'></i>",
            "<i class='fal fa-chevron-right chevron-big'></i>"
        ]
	});

    // PARTNER CAROUSEL
	$('#partners__carousel').owlCarousel({
		responsive : {
			0 : {
				items: 1
			},
			768 : {
				items: 2
			},
			992 : {
				items: 3
			},
			1200 : {
				items: 4
			}
		},
		loop: true,
		nav: true,
		dots: false,
        margin: 30,
        navText: [
            "<i class='fal fa-chevron-left chevron-big'></i>",
            "<i class='fal fa-chevron-right chevron-big'></i>"
        ]
    });

    // CAROUSEL PRODUCT
    $('#item__carousel').owlCarousel({
        center: true,
        loop: true,
        items: 1,
        margin: 0,
        nav: true,
        navText: [
            "<i class='fal fa-chevron-left chevron-small'></i>",
            "<i class='fal fa-chevron-right chevron-small'></i>"
        ]
    });

    $('#small-item__carousel').owlCarousel({
        loop: true,
        items: 4,
        margin: 20,
        nav: false
    });
    
    // SYNC NAV FOR CAROUSEL PRODUCT
    $('#item__carousel').on('click', '.owl-next', function () {
        $('#small-item__carousel').trigger('next.owl.carousel')
    });
    $('#item__carousel').on('click', '.owl-prev', function () {
        $('#small-item__carousel').trigger('prev.owl.carousel')
    });
});
