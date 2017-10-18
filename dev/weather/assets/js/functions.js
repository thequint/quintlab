
function reset_dash() {
    $(".city_border").each(function(){
        // console.log($(this).siblings(".city_temp").outerWidth());
        // console.log($(this).siblings(".city_name").outerWidth());
        // console.log($(".city_list li").width());
        $(this).css({"width":$(".city_list li").width()-($(this).siblings(".city_name").outerWidth()+$(this).siblings(".city_temp").outerWidth())-1});
    }); 
}

$(document).ready(function() {
    $('.daily-weather--slider').slick({
        infinite: true,
        autoplay: true,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        responsive: [{
                breakpoint: 959,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 639,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // 
    $('.list-stories--slider').slick({
        infinite: true,
        autoplay: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        responsive: [{
                breakpoint: 959,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ]
    });

    // 
    $('.list-stories-most--slider').slick({
        infinite: true,
        autoplay: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        responsive: [{
                breakpoint: 959,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ]
    });

    // 
    reset_dash();
});

$(window).resize(function(){
    reset_dash();
});