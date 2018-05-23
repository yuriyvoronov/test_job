$('.slider').owlCarousel({
	autoplay:false,
    items:1,
    smartSpeed:450,
	nav: false,
	dots: false,
	URLhashListener:true,
	mouseDrag: false,
	responsiveClass:true,
	responsive: {
	0 : {
        mouseDrag: true
    },
	768 :
		{
			mouseDrag: false
		}
	}
}); 


$('.closed-slider').owlCarousel({
    items:7,
    loop:true,
	dots: false,
    margin:10,
	responsive: {
	0 : {
        items: 3
    },
	768 :
		{
			items: 7
		}
	}

});

$('.header-nav__menu').click(function(e){
	e.preventDefault();
	$('.header-nav__origin').each(function(){
		$(this).toggleClass("visible");
	});
});