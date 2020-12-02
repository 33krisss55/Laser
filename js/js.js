$('.js-about-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    navText:false,
    dots:false,
    responsive:{
        0:{
            items: 1,
            nav:true
        },
        601:{
            items:2,
            nav:true
        },

        769:{
            items:3,
            nav:true
        }
    }
});

$('.js-video-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    navText:false,
    dots:false,
    responsive:{
        0:{
            items: 1,
            nav:true
        },
        769:{
            items:2,
            nav:true
        }
    }
});