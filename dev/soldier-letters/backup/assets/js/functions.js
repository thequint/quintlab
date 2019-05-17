
$('.btn-credits').click(function() {
	"use strict";
        $('.credits-modal').show().addClass('zoomIn');
		$('body').addClass('is-modal');
    });

    $('.modal-close').click(function() {
		"use strict";
        $('.credits-modal').fadeOut();
		$('body').removeClass('is-modal');
    });


$( function() { 
	"use strict";
	$( 'audio' ).audioPlayer(); 

});

$(".share-ico").click(function () {
	"use strict";
	$(".social-ico").slideToggle(400);
	return false;
});

$("body").click(function () {
	"use strict";
	$(".social-ico").slideUp();
});


$("#scrollDown").click(function (event) {
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


for (var i = 0; i < data_array.length; i++) {

	$('.letters').append('<li><figure><div class="card-img"><img src="assets/data/' + data_array[i].id + '/profile.jpg" alt="' + data_array[i].name + '"></div><figcaption>' + data_array[i].name + '</figcaption></figure></li>');
}

var obj = document.createElement("audio");
var isPlaying = false;
var this_index_old= -1;
var this_slide_old= -1;
function letters(this_index) {
	var str = ""
	"use strict";
	str += '<h3 class="letter-name">' + data_array[this_index].name + '</h3><div class="profil-image"><img src="assets/data/'+data_array[this_index].id+'/profile.jpg" alt="Major Chandu B Dwivedi"></div><div class="flip-container"><div class="flipper"><div class="front"><div class="front-content">'
	var image_path = "assets/data/" + data_array[this_index].id + "/"
	for (var i = 0; i < data_array[this_index].letters.length; i++) {
		str += '<div data-text="' + data_array[this_index].letters[i].letter_text + '" data-audio="' + data_array[this_index].letters[i].letter_audio + '"><div class="page-cont">'
		for (var j = 0; j < data_array[this_index].letters[i].letter_images.length; j++) {
			var x = j + 1;
			str += '<div class="tab-content page-' + x + '"> <img src="' + image_path + data_array[this_index].letters[i].letter_images[j].letter_image + '" alt=""> </div>' 

		}
		str += '</div><ul class="tabs clearfix">'
		for (var j = 0; j < data_array[this_index].letters[i].letter_images.length; j++) {
			var x = j + 1;
			str += '<li><a href="page-"' + x + '">' + x + '</a></li>';
		}
		str += '</ul></div>';
	}
	str += '</div></div> <div class="back"><div class="back-container"></div></div></div></div><div class="controls is-hide"><div class="left-controls"> <a id="BtnGoback" class="btn-goback" href="#destination">Go Back</a> </div><div class="right-controls"><div id="BtnFlip" class="btn-stamp btn-stamp-flip"><img src="assets/images/stamp-bg.svg" alt=""><span class="text">Read The Text</span></div><div id="BtnAudio" class="btn-stamp btn-stamp-audio"><img src="assets/images/stamp-bg.svg" alt=""><span class="text">Listen</span></div><div id="BtnDetail" class="btn-stamp btn-stamp-detail"><img src="assets/images/stamp-bg.svg" alt=""><span class="text">Know This<br>Soldier</span></div> <a id="BtnNextLetter" class="btn-nextletter" href="javascript:void(0);">Next Soldier</a> </div></div>';
	$(".modal-body").html(str);

	$('.front-content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		arrows: false,
		dots: true,
		autoplaySpeed: 2500

	});

	$('.tab-content').hide();
	$('.page-cont .tab-content:nth-child(1)').show();
	
	$('.tabs li').click(function (event) {
		event.preventDefault();
		$('.tabs li').removeClass('active');
		$(this).addClass('active');
		$('.tab-content').hide();
		$(".slick-active .page-cont .tab-content").eq($(this).index()).show();
	});

	$('.btn-goback').click(function () {
		"use strict";
		$('body').removeClass('is-modal');
		$('.modal').hide();
		$('.flip-container').removeClass('hover');
		$('.front-content').attr('class', 'front-content');
		$('.front-content').html('');
	});

	$('#BtnFlip').click(function () {
		"use strict";
		$(".back-container").html($(".slick-current").attr('data-text'));
		$('.flip-container').toggleClass('hover');
			if($(".slick-current .tabs li").length>1)
		{
		$('.tabs, .slick-dots').toggle();
		}
			$(".back").toggleClass('open');
	});

	
	$('#BtnAudio').click(function() {
		
		if($(".slick-current").index()!=this_slide_old)
			{
		obj.src = "assets/data/" + data_array[this_index].id + "/" + $(".slick-current").attr('data-audio');		
			}
		
		if (this_index_old != this_index) {
			obj.src = "assets/data/" + data_array[this_index].id + "/" + $(".slick-current").attr('data-audio');
		}
		this_slide_old= $(".slick-current").index();
		//console.log($(this).attr("data-audio"));
		if (isPlaying) {
			obj.pause()
			isPlaying = false;
			$(this).removeClass('pause-audio');
		} else {
			obj.play();
			isPlaying = true;
			$(this).addClass('pause-audio');
		}

		this_index_old = this_index;
	});

//	$("#BtnDetail").attr("href", "details.html?id=" + this_index);
	
	$("#BtnDetail").attr("onclick", "location.href='details.html?id="+this_index+"';");
	
	//onclick="location.href='index.html';"

	$('#BtnNextLetter').click(function () {
		if (this_index == data_array.length - 1) {
			letters(0);
		} else {
			letters(this_index + 1);
		}
		
		obj.pause();
		isPlaying = false;
		$('#BtnAudio').removeClass('pause-audio');
		
		
	});
	setTimeout(function () {
		$('.flip-container, .front, .back, .modal-body').height($('.tab-content img').height());
		$('.controls').removeClass('is-hide');
	}, 1000);
	
	
	if($(".slick-current .tabs li").length>1)
		{
			$(".slick-current .tabs").show();
			$(".right-controls").removeClass('pagination');
		}
	else{
		$(".slick-current .tabs").hide();
				$(".right-controls").addClass('pagination');
		}
	
	//console.log($(".slick-current .tabs li").length);
	
	$('.front-content').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		
		//pause audio
		
		obj.pause();
		isPlaying = false;
		$('#BtnAudio').removeClass('pause-audio');
 setTimeout(function () {
		
		if($(".slick-current .tabs li").length>1)
		{
			$(".slick-current .tabs").show();
			$(".right-controls").removeClass('pagination');
		}
	else{
		$(".slick-current .tabs").hide();
				$(".right-controls").addClass('pagination');
		}
		
		$(".slick-current .tabs li").removeClass('active');			
		$(".slick-current .tabs li").eq(0).addClass('active');
		$('.slick-current .page-cont .tab-content').hide();
		$('.slick-current .page-cont .page-1').show();
	 $('#BtnAudio').attr("data-audio",$(".slick-current").attr('data-audio'));
		//$('.slick-current .page-cont .page-2').show();
	}, 10);

});
        
	
	
	//console.log($(".tabs").html())
	
	$(".slick-current .tabs li").removeClass('active');
	$(".slick-current .tabs li").eq(0).addClass('active');
	
}


$('.letters figure').click(function () {
	"use strict";
	$('body').addClass('is-modal');
	$('.modal').show();

	letters($(this).parent().index());
});