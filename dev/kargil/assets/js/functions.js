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
function letters(this_index) {
	var str = ""
	"use strict";
	str += '<h3 class="letter-name">' + data_array[this_index].name + '</h3><div class="flip-container"><div class="flipper"><div class="front"><div class="front-content">'
	var image_path = "assets/data/" + data_array[this_index].id + "/"
	for (var i = 0; i < data_array[this_index].letters.length; i++) {
		str += '<div data-text="' + data_array[this_index].letters[i].letter_text + '" data-audio="' + data_array[this_index].letters[i].letter_audio + '"><div class="page-cont">'
		for (var j = 0; j < data_array[this_index].letters[i].letter_images.length; j++) {
			var x = j + 1;
			str += '<div class="tab-content page-' + x + '"> <img src="' + image_path + data_array[this_index].letters[i].letter_images[j].letter_image + '" alt="asdas"> </div>'

		}
		str += '</div><ul class="tabs clearfix">'
		for (var j = 0; j < data_array[this_index].letters[i].letter_images.length; j++) {
			var x = j + 1;
			str += '<li><a href="page-"' + x + '">' + x + '</a></li>';
		}
		str += '</ul></div>';
	}
	str += '</div></div> <div class="back"><div class="back-container"> lorem ipsum </div></div></div></div><div class="controls"><div class="left-controls"> <a id="BtnGoback" class="btn-goback" href="#destination">Go Back</a> </div><div class="right-controls"> <a id="BtnFlip" class="btn-flip" href="javascript:void(0);">flip</a> <a id="BtnAudio" class="btn-audio" href="javascript:void(0);">audio</a> <a id="BtnDetail" class="btn-detail" href="javascript:void(0);">Know This Soldier</a> <a id="BtnNextLetter" class="btn-nextletter" href="javascript:void(0);">Next Letter</a> </div></div>';
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
	$('.tabs li:first').addClass('active');
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
		$('.flip-container').removeClass('fliped');
		$('.front-content').attr('class', 'front-content');
		$('.front-content').html('');
	});

	$('#BtnFlip').click(function () {
		"use strict";
		$(".back-container").html($(".slick-current").attr('data-text'));
		$('.flip-container').toggleClass('fliped');
	});

	$('#BtnAudio').click(function() {
		if (this_index_old != this_index) {
			obj.src = "assets/data/" + data_array[this_index].id + "/" + $(".slick-current").attr('data-audio');
		}
		if (isPlaying) {
			obj.pause()
			isPlaying = false;
		} else {
			obj.play();
			isPlaying = true;
		}

		this_index_old = this_index;
	});

	$("#BtnDetail").attr("href", "details.html?id=" + this_index);

	$('#BtnNextLetter').click(function () {
		if (this_index == data_array.length - 1) {
			letters(0);
		} else {
			letters(this_index + 1);
		}
	});

	setTimeout(function () {
		$('.flip-container, .front, .back, .modal-body').height($('.tab-content img').height());
	}, 2000);
}


$('.letters figure').click(function () {
	"use strict";
	$('body').addClass('is-modal');
	$('.modal').show();

	letters($(this).parent().index());
});
