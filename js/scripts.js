$('.carousel-custom').slick({
    autoplay:true,
    autoplaySpeed:3000,
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 2,
    dots: true,
    dotsClass: 'slick-dots',

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        /*{
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },*/
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                adaptiveHeight: true

            }
        },

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

/*$('.slick-dots li').html('<a href="#"><img src="img/dots.png" /></a>');
$('.slick-dots li.slick-active').html('<a href="#"><img src="img/dotssss.png" /></a>');*/

/*
$(".carousel-custom").slick({
    dots: true,
    customPaging : function(slider, i) {
        return '<a href="#"><img src="img/dots.png" /><img src="img/dotssss.png" /></a>';
    },
});*/
