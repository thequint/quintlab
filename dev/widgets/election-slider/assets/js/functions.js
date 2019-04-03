$(".intro-close").click(function(e) {
    $(".intro-popup").hide();
    $('.intro-iframe iframe').attr('src', '');
    $(".scroll-up").show();

    setTimeout(function(){
        $(".scroll-up").fadeOut();
    }, 3000);
});

$(".popup-btn").click(function(e) {
    $(".popup-box").show();
    //console.log(e.clientY +"|"+  window.screen.height+"|"+ $(".info-popup").height()+"|"+  $(window).scrollTop());
    //$(".info-popup").css({ "top": e.clientY+ $(window).scrollTop() -  $(".info-popup").height()/2 });

    $(".popup-box img").attr("src", $(this).attr("data-img"));
    $(".popup-box h3").html($(this).attr("data-heading"));
    $(".popup-box p").html($(this).attr("data-text"));
});

$(".close-icon").click(function() {
    $(".popup-box").hide();
});

// Document Click
$(document).mouseup(function(e) {
    var container = $(".popup-box");
    if (!container.is(e.target) &&
        container.has(e.target).length === 0) {
        container.hide();
    }
    //$(".points").removeClass("active");
});

//Slug 1 
function v_slider() {

    $('.vertical-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        vertical: true
    });

}

// Social 
$(".social-back").click(function(e) {
   $(".social-icons").slideToggle(400);
   return false;
});
$("body").click(function() {
   $(".social-icons").slideUp();
});

function slug_2_init() {
    //  More Stories
    var collectionSlug = 'talkingstalking'; //Needs to be replaced.
    $.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug, function(res) {
        var stories = res.items.filter(function(item) {
            return item.type == 'story'
        }).map(function(item) {
            return item.story
        }).slice(0, 3);
        var elements = stories.map(function(story) {
            return '<li><div class="story-txt"><span><a href="https://www.thequint.com/' + story.slug + '" target="blank">' + story.headline + '</a></span></div></li>'
        });
        elements.forEach(function(element) {
            $('#more-stories').append(element);
        });
    });
}

//Slider
function slug_3_init() {
    var collectionSlug = 'talking-stalking-videos'; //Needs to be replaced.
    $.getJSON( "assets/js/talking-stalking-videos.json", function( res ) {

        console.log("test")
        
    // $.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug, function(res) {
        var stories = res.items.filter(function(item) {
            return item.type == 'story'
        }).map(function(item) {
            return item.story
        }).slice(0, 5);
        var elements = stories.map(function(story) {
            return '<li><figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></div><figcaption>' + story.headline + '</figcaption></a></figure></li>'
        });
        elements.forEach(function(element) {
            $('#SlugType_video').append(element);
        });
        setTimeout(function(){ v_slider(); }, 2000);
    });
}
//slug_1_init();
slug_2_init();
slug_3_init();

var section_numbers = 4;
$(".front").css({ "width": 4 * window.innerWidth });


function init() {
    if ($(window).innerWidth() > 1100) {
        $.jInvertScroll(['.scroll']);

    } else {

    }
    if ($(window).innerWidth() < 1100) {
        $("#sectipn_wrap").removeClass("front scroll");
        $("#sectipn_wrap").css({ "width": "100%", "height": "100%" });
        $(".horizon").hide();
    } else {

        $("#sectipn_wrap").addClass("front scroll");
        //$("#sectipn_wrap").css({"width":"inherit","height":"inherit"});
        $(".horizon").show();
    }
}
init();
// 
$(".safe-btn.step01").click(function(e) {
    e.preventDefault();

    if ($('#name').val() == '') {
        $(".name-field .error-message").show();
    } else {
        $("ul.safe").addClass("slide-first");
        var safe_name = $('#name').val();
        $(".value-name").text(safe_name);
    }
});

$(".safe-btn.step02").click(function(e) {
    e.preventDefault();

    if ($('#age').val() == '') {
        $(".age-field .error-message").show();
    } else {
        $("ul.safe").addClass("slide-second");
        var safe_age = $('#age').val();
        $(".value-age").text(safe_age);
    }
});

$(".safe-btn.step03").click(function(e) {
    e.preventDefault();

    if ($('#wearing').val() == '') {
        $(".wearing-field .error-message").show();
    } else {
        $("ul.safe").addClass("slide-third");
        var safe_wearing = $('#wearing').val();
        $(".value-wearing").text(safe_wearing);
    }
});

$(".safe-btn.step04").click(function(e) {
    e.preventDefault();

    $("ul.safe").addClass("slide-forth");
    var safe_commute = $('#commute option:selected').text();
    $(".value-commute").text(safe_commute);
});

$(".start-over").click(function() {
    $("ul.safe").removeClass("slide-first slide-second slide-third slide-forth");
});

var cur_section = 0;
var click_flag = 0;

function repeatOften() {

    if($(window).scrollTop()>0) {
        $(".scroll-up").fadeOut(100);
    }
    
    if (-1 * parseInt($("#sectipn_wrap").css("left")) > 0 && -1 * parseInt($("#sectipn_wrap").css("left")) < $(window).width()) {
        cur_section = 0;
    } else if (-1 * parseInt($("#sectipn_wrap").css("left")) > $(window).width() && -1 * parseInt($("#sectipn_wrap").css("left")) < 2 * $(window).width()) {
        cur_section = 1;

    } else if (-1 * parseInt($("#sectipn_wrap").css("left")) > 2 * $(window).width() && -1 * parseInt($("#sectipn_wrap").css("left")) < 3 * $(window).width()) {
        cur_section = 2;

    } else if (-1 * parseInt($("#sectipn_wrap").css("left")) >= 3 * $(window).width()) {
        cur_section = 3;

    }
    requestAnimationFrame(repeatOften);
}

requestAnimationFrame(repeatOften);

//console.log()
$("#click").click(function() {

    if (click_flag == 0 && cur_section <= 2) {
        click_flag = 1;
        cur_section = cur_section + 1;
        $('html, body').animate({
            scrollTop: ((($("body").height() - $(window).height()) / (section_numbers - 1)) * cur_section) + 3
        }, 500);

        setTimeout(function() {
            click_flag = 0;
        }, 500);
    }
});
$("#prev").click(function() {

    if (click_flag == 0 && cur_section >= 1) {

        click_flag = 1;
        cur_section = cur_section - 1;
        $('html, body').animate({
            scrollTop: 1560 * cur_section
        }, 500);

        setTimeout(function() {
            click_flag = 0;
        }, 500);
    } else if (cur_section == 0) {
        $('html, body').animate({
            scrollTop: 0
        }, 500);

    }
});

$("#share_exp").click(function() {
if(window.innerWidth>1100)
{
    if (click_flag == 0 && cur_section <= 2) {
        click_flag = 1;
        cur_section = 3;
        $('html, body').animate({
            scrollTop: ((($("body").height() - $(window).height()) / (section_numbers - 1)) * cur_section) + 3
        }, 500);

        setTimeout(function() {
            click_flag = 0;
        }, 500);
    }
}
else
{
    $("html, body").animate({ scrollTop: $("#contact-section").offset().top });
}
});

$(window).load(function() {
    $(".loader").fadeOut();
    //v_slider();
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

$(window).resize(function() {
    init();
});