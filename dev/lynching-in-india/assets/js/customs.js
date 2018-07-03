$(document).on('ready', function() {

    // WOW Animations
    var wow = new WOW(
        {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();

    // Gallery Slider
	$(".horizontal--slider").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
	});

    // Cuctom Arrows
    $('.arrow--prev').click(function(){
      $('.horizontal--slider').slick('slickPrev');
    })

    $('.arrow--next').click(function(){
      $('.horizontal--slider').slick('slickNext');
    })

    // Maps
	$('.map-container').click(function(){
        $(this).find('iframe').addClass('clicked');
    })
    .mouseleave(function(){
        $(this).find('iframe').removeClass('clicked');
    });

    setTimeout(function(){
        $(".embed-content.None").empty();
        $(".embed-content.none").empty();
    }, 1000);

    // Footer
    $('.credits').click(function() {
        $('.creditsModal').show().addClass('zoomIn');
    });
    $('.modalClose').click(function() {
        $('.creditsModal').fadeOut();
    });

    // Social 
    $(".social-back").click(function(e) {
        $(".social-icons").slideToggle(400);
        return false;
    });
    $("body").click(function() {
        $(".social-icons").slideUp();
    });

    // Body Background Fixed
    var screen_height = $(window).height();
    var screen_width = $(window).width();
    
    $("#section--intro").height(screen_height + 70);
    $(".full-image").height(screen_height + 70);
    $(".full-image img").height(screen_height + 70);
    
    if ($(window).width() < 960) {
        $("#section--intro").height(screen_height + 70);
        $(".full-image").height(screen_height + 70);
        $(".full-image img").height(screen_height + 70);
    }else{
        $("#section--intro").height('');
        $(".full-image").height('');
        $(".full-image img").height('');
    }
});
