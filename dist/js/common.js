$(".slider").owlCarousel({autoplay:!1,items:1,smartSpeed:450,nav:!1,dots:!1,URLhashListener:!0,mouseDrag:!1,responsiveClass:!0,responsive:{0:{mouseDrag:!0},768:{mouseDrag:!1}}}),$(".closed-slider").owlCarousel({items:7,loop:!0,dots:!1,margin:10,responsive:{0:{items:3},768:{items:7}}}),$(".header-nav__menu").click(function(e){e.preventDefault(),$(".header-nav__origin").each(function(){$(this).toggleClass("visible")})});