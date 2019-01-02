$(document).ready(function() {

    $('.nav-bar').click(function() {
        "use strict";
        $('body').addClass('is-nav');
        nav_flag = 1;
    });

    $('.top-nav a').click(function() {
        "use strict";
        $('body').removeClass('is-nav');
        nav_flag = 0;
    });

    $('.top-nav ul li a').click(function() {
        "use strict";
        $('.top-nav ul li a').removeClass('is-active');
        $(this).addClass('is-active');
    });


    $(".des").click(function(event) {
        "use strict";
        event.preventDefault();
        var dest = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
        } else {
            dest = $(this.hash).offset().top;
        }
        $('html,body').animate({
            scrollTop: dest
        }, 1000, 'swing');
    });

});

$('body').click(function(evt) {
    if (evt.target.className == "is-more")
        return;
    if ($(evt.target).closest('.is-more').length)
        return;
    $(".is-more").removeClass("is-more");
});

var nav_flag = 0;

$('body').click(function(evt) {
    if (evt.target.className == "top-nav")
        return;
    if ($(evt.target).closest('.top-nav').length)
        return;
    if (evt.target.className == "nav-bar")
        return;
    if ($(evt.target).closest('.nav-bar').length)
        return;
    if (nav_flag == 1) {
        $("body").removeClass("is-nav");
        nav_flag = 0;
    }
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
    var collectionSlug = 'me-the-change'; //Needs to be replaced.
    $.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug, function(res) {
        var stories = res.items.filter(function(item) {
            return item.type == 'story'
        }).map(function(item) {
            return item.story
        }).slice(0, 8);
        var elements = stories.map(function(story) {
            // return '<li><figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></div><figcaption>' + story.headline + '</figcaption></a></figure></li>'
            return '<div class="story-card-small col-small ctg-default" data-reactid="223"><div class="card-elements" data-reactid="224"><a href="https://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link" data-reactid="225"><div class="card-elements__content" data-reactid="226"><h3 class="card-elements__content--headline cooper-semi-bold " data-reactid="227">' + story.headline + '</h3></div></a><div class="card-elements__image-container ctg-default" data-reactid="228"><a href="https://www.thequint.com/' + story.slug + '" target="blank" data-reactid="229"><figure data-reactid="230"><img class="" src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=248&fm=pjpg" alt="' + story.headline + '" data-reactid="231"></figure><span class="card-elements__image-container--icons video" data-reactid="232"></span></a></div></div></div>'
        });
        elements.forEach(function(element) {
            $('#more-stories').append(element);
        });
    });
}

slug_2_init();