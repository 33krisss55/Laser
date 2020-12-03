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

let countBtn = document.querySelector('.js-count-form-button');
let countForm = document.querySelector('.js-count-form');
console.log(countBtn);
console.log(countForm);

countBtn.addEventListener('click', ()=>{
    countForm.classList.toggle('is-active');
})