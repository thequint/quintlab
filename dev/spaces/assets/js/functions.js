$(".share-ico").click(function () {
    "use strict";
    $(".social-ico").slideToggle(400);
    return false;
});

$("body").click(function () {
    "use strict";
    $(".social-ico").slideUp();
});

$("#LockScreen").click(function () {
    "use strict";
    $(".modal").addClass("hidden");
});

$('#GoBack').hide();

function ToughDecision(){
    "use strict";
    var this_el = $('#ToughDecision');
    
    $(this_el).hide();
    $('#GoBack').show();
    $('.control-details').addClass('is-open');
    $('.block-1').removeClass('is-hide');
    $('#vrview').html('');
    onLoad();
    $('body').removeClass('is-video');
    $('body').addClass('is-logo');
    $('.control-details').addClass('is-open');
    $('#ToughDecision').show();
    $('.choice-wraper').show();
    $('.comparing-thumb').hide();
}

function GoBack(){
    "use strict";
    var this_el = $('#GoBack');
    $('.block-1').addClass('is-hide');
    $('.control-details').removeClass('is-open');
    $(this_el).hide();
    $('#ToughDecision').show();
    $('.choice-wraper').hide();
    $('.controll-wrapper').removeClass('is-show');
    $('.comparing-thumb').hide();
}

function ComparingSpaces(){
    "use strict";
    $('.control-details').removeClass('is-open');
    $('.choice-wraper').hide();
    $('#GoBack').hide();
    $('#ToughDecision').show();
    $('.comparing-thumb').show();
    $('body').addClass('is-video');
    $('body').removeClass('is-logo');
    $('.comparing-thumb a').removeClass('is-active');
    $('.comparing-thumb a:first-child').addClass('is-active');
    loadImage($(".comparing-thumb a").attr("data-src"));
}
/*
$('.comparing-thumb a:first-child').addClass('is-active');

$('.comparing-thumb a').click(function(){
    $('.comparing-thumb a').removeClass('is-active');
    $(this).addClass('is-active');
    $('#vrview').html('');
    onLoad();
    var this_var = $(this).attr("data-src");

    setTimeout(function(){
       loadImage(this_var);
    }, 1000);
});*/

$('#ToughDecision').click(function(){
    "use strict";
    ToughDecision();
    resetChoice();

    $("#ComparingSpaces").removeClass("is-active");
    $("#GoBack").addClass("is-active");
    $(".list-btn.grey ul li").removeClass("is-active");
    $(".choice-text").show();
    
    $(".option-list").show();
});

$('#GoBack').click(function(){
    "use strict";
    GoBack();

    $(".choice-text").hide();
    $(".option-list").hide();
    $(".choice-content").hide();
});

$('#ComparingSpaces').click(function(){
    "use strict";
    ComparingSpaces();
    resetChoice();

    $(this).addClass("is-active");
    $(".choice-text").hide();
    $(".choice-content").hide();
    $(".option-list").hide();
});
$(".back-intro").click(function(){
    "use strict";
    ToughDecision();
    GoBack();
    resetChoice();
    resetDraggable();
    $('body').removeClass('is-logo');

    $(".choice-text").hide();
    $(".choice-content").hide();
    $(".option-list").hide();

    $(".option-list ul").html('');
    $(".choice-text ul").html('');
    $(".comparing-thumb").html('');


});

$(".list-btn.grey ul li").on("click", function(){
    $(".list-btn.grey ul li").removeClass("is-active");

    $(this).addClass("is-active");
});

function resetChoice() {
    $(".cd-resize-img").removeAttr("style");
    $(".cd-handle").removeAttr("style");

}

for (var i = 0; i < data_array.length; i++) {

    $('#cards').append('<li class="slide swiper-slide" data-text-1="' + data_array[i].choice_text_1 + '" data-text-2="' + data_array[i].choice_text_2 + '" data-content-1="' + data_array[i].choice_content_1 + '" data-content-2="' + data_array[i].choice_content_2 + '" data-id="' + data_array[i].id + '"><div class="full-image-section"><figure class="clearfix"><div class="full-image"><img src="assets/data/' + data_array[i].id + '/card.gif" alt="' + data_array[i].name + '"></div></figure></div></li>');

    $('#cards_content').append('<li class="slide swiper-slide" data-id="' + data_array[i].id + '" data-text-1="' + data_array[i].make_decision[0][0].btn_text + '" data-text-2="' + data_array[i].make_decision[0][1].btn_text + '" data-content-1="' + data_array[i].make_decision[0][0].text + '" data-content-2="' + data_array[i].make_decision[0][1].text + '"><h4>' + data_array[i].sub_headline + '</h4><p>' + data_array[i].paragraph + '</p></div></li>');

    // console.log(data_array[i].make_decision[0][0].btn_text);
}
var quoteSwiper = new Swiper('.quote-slider');
var imageSwiper = new Swiper('.image-slider', {
    controller: {
        inverse: true,
    },
    pagination: '.swiper-pagination',
    paginationClickable: true,

    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
});

quoteSwiper.params.control = imageSwiper;
imageSwiper.params.control = quoteSwiper;

/*Cards Click Event*/
function enter_card(card_source_id) {

    var li_num = "1";
    for (var i=0; i < data_array[slider_index].make_decision.length; i++){  // loop of image slider
        $(".option-list ul").append('<li>'+ li_num++ +'</li>');
    }

    $('.choice-image-1').attr('src','assets/data/'+ data_array[slider_index].id +'/choice/'+ data_array[slider_index].make_decision[slider_index][0].image+'');

    $('.choice-image-2').attr('src','assets/data/'+ data_array[slider_index].id +'/choice/'+ data_array[slider_index].make_decision[slider_index][1].image+'');

    $('.choice-content-1').html(data_array[slider_index].make_decision[slider_index][0].text);
    $('.choice-content-2').html(data_array[slider_index].make_decision[slider_index][1].text);

    $(".option-list li").on("click", function(){ // Click function of option list
        $(".option-list li").removeClass("is-active");
        $(this).addClass("is-active");

        $('.choice-content-1').html(data_array[slider_index].make_decision[$(this).index()][0].text);
        $('.choice-content-2').html(data_array[slider_index].make_decision[$(this).index()][1].text);

        $(".choice-text li").eq(0).html(data_array[slider_index].make_decision[$(this).index()][0].btn_text);
        $(".choice-text li").eq(1).html(data_array[slider_index].make_decision[$(this).index()][1].btn_text);

        $('.choice-image-1').attr('src','assets/data/'+ data_array[slider_index].id +'/choice/'+ data_array[slider_index].make_decision[$(this).index()][0].image +'');
        $('.choice-image-2').attr('src','assets/data/'+ data_array[slider_index].id +'/choice/'+ data_array[slider_index].make_decision[$(this).index()][1].image+'');
        // console.log("click: "+ slider_index);
    });

    $(".choice-text ul").append('<li>'+ data_array[slider_index].make_decision[slider_index][0].btn_text +'</li><li>'+ data_array[slider_index].make_decision[slider_index][1].btn_text +'</li>');

    $(".choice-text li").on("click", function(){ // Changing data of image slider
        $(".choice-text li").removeClass("is-active");
        $(this).addClass("is-active");

        $(".choice-content").fadeIn();
        $(".choice-content .choice-content-box").fadeOut();
        $(".choice-content .choice-content-box").eq($(this).index()).fadeIn();

        if($(this).index() == 0){
            $(".cd-resize-img").css("width","10%");
            $(".cd-handle").css("left","10%");

        }else {
            $(".cd-resize-img").css("width","90%");
            $(".cd-handle").css("left","90%");
        }
    });
    $('.controll-wrapper').addClass('is-show');
    loadScene($(".swiper-slide-active").index());
    /*
    $('.choice-image-1').attr('src','assets/data/'+ card_source_id +'/choice/choice-1.jpg');
    $('.choice-image-2').attr('src','assets/data/'+ card_source_id +'/choice/choice-2.jpg');
    
    $('.choice-text-1').html($(".swiper-slide-active").attr('data-text-1'));
    $('.choice-text-2').html($(".swiper-slide-active").attr('data-text-2'));

    $('.choice-content-1').html($(".swiper-slide-active").attr('data-content-1'));
    $('.choice-content-2').html($(".swiper-slide-active").attr('data-content-2'));*/
    
    // comparing
    /*
    $('.comparing-thumb .compare-with').html('Compare with');
    $('.comparing-thumb a:nth-child(1) img').attr('src','assets/data/'+ card_source_id +'/comparing/thumb-1.jpg');
    $('.comparing-thumb a:nth-child(1) span').html('Ball Court');

    $('.comparing-thumb a:nth-child(2) img').attr('src','assets/data/'+ card_source_id +'/comparing/thumb-2.jpg');
    $('.comparing-thumb a:nth-child(2) span').html('City Hall');

    $('.comparing-thumb a:nth-child(3) img').attr('src','assets/data/'+ card_source_id +'/comparing/thumb-3.jpg');
    $('.comparing-thumb a:nth-child(3) span').html('Town Hall');*/

    // $('.comparing-thumb a:nth-child(1)').attr('data-src','assets/data/'+ card_source_id +'/comparing/full-1.jpg');
    // $('.comparing-thumb a:nth-child(2)').attr('data-src','assets/data/'+ card_source_id +'/comparing/full-2.jpg');
    // $('.comparing-thumb a:nth-child(3)').attr('data-src','assets/data/'+ card_source_id +'/comparing/full-3.jpg'); 
}

function compare_spaces() {

    // compare spaces
    for(var i=0; i < data_array[slider_index].compare_spaces.length; i++){
        $(".comparing-thumb").append('<a href="javascript:void(0);" data-src="assets/data/card-1/comparing/'+ data_array[slider_index].compare_spaces[i][0].full_image +'"><img src="assets/data/card-1/comparing/'+ data_array[slider_index].compare_spaces[i][0].thumb +'" alt="" ><span>'+ data_array[slider_index].compare_spaces[i][0].caption +'</span></a>');
        // console.log(data_array[slider_index].compare_spaces[i][0].thumb);
    }
        
    $(".comparing-thumb").append('<span class="compare-with">'+ data_array[slider_index].compare_text +'</span>')

    // $('.comparing-thumb .compare-with').html(data_array[slider_index].compare_text);
    $('.comparing-thumb a:first-child').addClass('is-active');

    $('.comparing-thumb a').click(function(){
        $('.comparing-thumb a').removeClass('is-active');
        $(this).addClass('is-active');

        $('#vrview').html('');
        onLoad();
        var this_var = $(this).attr("data-src");

        setTimeout(function(){
           loadImage(this_var);
        }, 1000);
    });
    // console.log(data_array[slider_index].compare_spaces);
}

var slider_index;

$('#cards_content .slide').on("click", function(){
    "use strict";
    slider_index = $(this).index();
    $('body').addClass('is-video');
    var card_source_id = $(this).attr('data-id');
    enter_card(card_source_id);
    compare_spaces();
});

$( "#draggable" ).draggable({
    axis:"x",
    revert: 'invalid',
});
$( "#droppable" ).droppable({
    drop: function() {
        var card_source_id = $(".swiper-slide-active").attr('data-id');
        // alert($(".swiper-slide-active").attr('data-id'));
        $('body').addClass('is-video');

        slider_index = $(".swiper-slide-active").index();

        enter_card(card_source_id);
        compare_spaces();
    }
});
function resetDraggable() {
    $("#draggable").removeAttr('style');
    $("#draggable").draggable("destroy");
    $( "#draggable" ).draggable({
        axis:"x",
        revert: 'invalid',
    });
}

// Slider js
jQuery(document).ready(function($){
    var dragging = false,
        scrolling = false,
        resizing = false;
    //cache jQuery objects
    var imageComparisonContainers = $('.cd-image-container');
    //check if the .cd-image-container is in the viewport 
    //if yes, animate it
    checkPosition(imageComparisonContainers);
    $(window).on('scroll', function(){
        if( !scrolling) {
            scrolling =  true;
            ( !window.requestAnimationFrame )
                ? setTimeout(function(){checkPosition(imageComparisonContainers);}, 100)
                : requestAnimationFrame(function(){checkPosition(imageComparisonContainers);});
        }
    });
    
    //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
    imageComparisonContainers.each(function(){
        var actual = $(this);
        drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
    });

    //upadate images label visibility
    $(window).on('resize', function(){
        if( !resizing) {
            resizing =  true;
            ( !window.requestAnimationFrame )
                ? setTimeout(function(){checkLabel(imageComparisonContainers);}, 100)
                : requestAnimationFrame(function(){checkLabel(imageComparisonContainers);});
        }
    });

    function checkPosition(container) {
        container.each(function(){
            var actualContainer = $(this);
            if( $(window).scrollTop() + $(window).height()*0.5 > actualContainer.offset().top) {
                actualContainer.addClass('is-visible');
            }
        });

        scrolling = false;
    }

    function checkLabel(container) {
        container.each(function(){
            var actual = $(this);
            updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
            updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
        });

        resizing = false;
    }

    //draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
    function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
        dragElement.on("mousedown vmousedown", function(e) {
            dragElement.addClass('draggable');
            resizeElement.addClass('resizable');

            var dragWidth = dragElement.outerWidth(),
                xPosition = dragElement.offset().left + dragWidth - e.pageX,
                containerOffset = container.offset().left,
                containerWidth = container.outerWidth(),
                minLeft = containerOffset + 10,
                maxLeft = containerOffset + containerWidth - dragWidth - 10;
            
            dragElement.parents().on("mousemove vmousemove", function(e) {
                if( !dragging) {
                    dragging =  true;
                    ( !window.requestAnimationFrame )
                        ? setTimeout(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);}, 100)
                        : requestAnimationFrame(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);});
                }
            }).on("mouseup vmouseup", function(e){
                dragElement.removeClass('draggable');
                resizeElement.removeClass('resizable');
            });
            e.preventDefault();
        }).on("mouseup vmouseup", function(e) {
            dragElement.removeClass('draggable');
            resizeElement.removeClass('resizable');
        });
    }

    function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement) {
        var leftValue = e.pageX + xPosition - dragWidth;   
        //constrain the draggable element to move inside his container
        if(leftValue < minLeft ) {
            leftValue = minLeft;
        } else if ( leftValue > maxLeft) {
            leftValue = maxLeft;
        }

        var widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
        
        $('.draggable').css('left', widthValue).on("mouseup vmouseup", function() {
            $(this).removeClass('draggable');
            resizeElement.removeClass('resizable');
        });

        $('.resizable').css('width', widthValue); 

        updateLabel(labelResizeElement, resizeElement, 'left');
        updateLabel(labelContainer, resizeElement, 'right');
        dragging =  false;
    }

    function updateLabel(label, resizeElement, position) {
        if(position == 'left') {
            ( label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
        } else {
            ( label.offset().left > resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
        }
    }
});
