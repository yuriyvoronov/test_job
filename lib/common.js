$('.slider').owlCarousel({
	autoplay:false,
    items:1,
    smartSpeed:450,
	nav: false,
	dots: false,
	URLhashListener:true,
	mouseDrag: false
}); 


$('.closed-slider').owlCarousel({
    items:7,
    loop:true,
	dots: false,
    margin:10
});