import { isSp } from './sp';

export function slider() {

    ////////////////////////////////////
    //  Slider
    ////////////////////////////////////

    $('.sliderhistory-six').owlCarousel({
        loop: false,
        margin: 4,
        autoplay: false,
        autoplayTimeout: 3000,
        smartSpeed: 600,
        responsiveClass:true,
        margin: 20,
        responsive:{
            0:{
                autoWidth:true,
                loop: true,
                items:3,
                nav:true
            },
            768:{
                items:4,
                nav:true,
                dots: false
            },
            1080:{
                items:6,
                nav:true,
                dots: false
            }
        }
    });

    $('.sliderhistory-eight').owlCarousel({
        loop: false,
        margin: 4,
        autoplay: false,
        autoplayTimeout: 3000,
        smartSpeed: 600,
        responsiveClass:true,
        margin: 20,
        responsive:{
            0:{
                autoWidth:true,
                loop: true,
                items:3,
                nav:true
            },
            768:{
                items:6,
                nav:true,
                dots: false
            },
            1280:{
                items:8,
                nav:false,
                dots: false
            },

        }
    });

    $('.sliderfeature').owlCarousel({
        loop: true,
        margin: 4,
        autoplay: false,
        autoplayTimeout: 3000,
        smartSpeed: 600,
        responsiveClass:true,

        responsive:{
            0:{
                items:2,
                margin: 17,
                nav:true
            },
            768:{
                items:5,
                margin: 20,
                nav:true
            }
        }
    });

    $('.compare-list-slider').owlCarousel({
        loop: false,
        autoplay: false,
        autoplayTimeout: 3000,
        smartSpeed: 600,
        responsiveClass:true,
        dots: false,
        responsive:{
            0:{
                items:1,
                margin: 17,
                nav:true
            },
            768:{
                items:2,
                margin: 20,
                nav:true
            },
            980:{
                items:3,
                margin: 20,
                nav:true
            },
            1200:{
                items:4,
                margin: 20,
                nav:true
            },
            1800:{
                items:6,
                margin: 20,
                nav:true
            }

        }
    });

    $('.favoritelist-slider').owlCarousel({
        loop: false,
        margin: 20,
        autoplay: false,
        autoplayTimeout: 3000,
        smartSpeed: 600,
        responsiveClass:true,
        responsive:{
            0:{
                loop: true,
                items:1,
                nav:true
            },
            768:{
                items:3,
                nav:false
            }
        }
    });

    $('.fight-list-slider').owlCarousel({
        loop: false,
        autoplay: false,
        autoplayTimeout: 3000,
        smartSpeed: 600,
        responsiveClass:true,
        dots: false,
        responsive:{
            0:{
                items:2.5,
                margin: 17,
                nav:true
            },
            768:{
                items:3,
                margin: 20,
                nav:true
            },
            980:{
                items:3,
                margin: 20,
                nav:true
            },
            1200:{
                items:4,
                margin: 20,
                nav:true
            },
            1800:{
                items:6,
                margin: 20,
                nav:true
            }

        }
    });

}
