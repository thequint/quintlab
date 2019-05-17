$(".share-ico").click(function (e) {
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
	//calculate destination place
	var dest = 0;
	if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
		dest = $(document).height() - $(window).height();
	} else {
		dest = $(this.hash).offset().top;
	}
	//go to destination
	$('html,body').animate({
		scrollTop: dest
	}, 1000, 'swing');
});




for (var i = 0; i < data_array.length; i++) {

	$('.letters').append('<li><figure><div class="card-img"><img src="assets/data/' + data_array[i].id + '/profile.jpg" alt="' + data_array[i].name + '"></div><figcaption>' + data_array[i].name + '</figcaption></figure></li>');
}


function letters(this_index) {
	
var str=""
	"use strict";
	str+='<h3 class="letter-name">' + data_array[this_index].name + '</h3><div class="flip-container"><div class="flipper"><div class="front"><div class="front-content">'
	//alert(this_index);
	
//console.log(data_array[this_index].letters.length); 
	
	for (var i = 0; i < data_array[this_index].letters.length; i++) {
		str+='<div><div class="page-cont">'
		//$(".modal-body").append('<div><div class="page-cont">');
		//console.log(data_array[this_index].letters[i].letter_images.length)
		for (var j = 0; j < data_array[this_index].letters[i].letter_images.length; j++) {
			var x=j+1;
			//console.log(data_array[this_index].letters[i].letter_images[j].letter_image);
			var image_path="assets/data/major-chandu-b-dwivedi/"
			str+='<div class="tab-content page-'+x+'"> <img src="'+image_path+data_array[this_index].letters[i].letter_images[j].letter_image+'" alt="asdas"> </div>'
			//$(".modal-body").append('<div class="tab-content page-1"> <img src="assets/data/major-chandu-b-dwivedi/letter-1.jpg" alt=""> </div>');
		}
		str+='</div><ul class="tabs clearfix">'
		for (var j = 0; j < data_array[this_index].letters[i].letter_images.length; j++) {
			var x=j+1;
			str+='<li><a href="page-"'+x+'">'+x+'</a></li>';
//			$(".modal-body").append('<li><a href="page-1">1</a></li>');
		}
			str+='</ul></div>';
//		$(".modal-body").append('</ul></div>');
	}
	str+='</div></div> <div class="back"><div class="back-container"> lorem ipsum </div></div></div></div><div class="clearfix modal-bottom"> <a id="BtnNext" class="btn-next-letter" href="javascript:void(0);">Next Letter</a> </div> <div class="controls"><div class="left-controls"> <a id="BtnGoback" class="btn-goback" href="#destination">Go Back</a> </div><div class="right-controls"> <a id="BtnFlip" class="btn-flip" href="javascript:void(0);">flip</a> <a id="BtnAudio" class="btn-audio" href="javascript:void(0);">audio</a> <a id="BtnDetail" class="btn-detail" href="javascript:void(0);">Know This Soldier</a> </div></div>';
$(".modal-body").html(str);
	/*$(".modal-body").append('</div></div> <div class="back"><div class="back-container"> lorem ipsum </div></div></div></div><div class="clearfix modal-bottom"> <a id="BtnNext" class="btn-next-letter" href="javascript:void(0);">Next Letter</a> </div> <div class="controls"><div class="left-controls"> <a id="BtnGoback" class="btn-goback" href="#destination">Go Back</a> </div><div class="right-controls"> <a id="BtnFlip" class="btn-flip" href="javascript:void(0);">flip</a> <a id="BtnAudio" class="btn-audio" href="javascript:void(0);">audio</a> <a id="BtnDetail" class="btn-detail" href="javascript:void(0);">Know This Soldier</a> </div></div>');*/
	/*
	<div class="modal-body">
      <h3 class="letter-name">Major Chandu B Dwivedi</h3>
      <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
        <div class="flipper">
          <div class="front">
            <div class="front-content">
              <div>
                <div class="page-cont">
                  <div class="tab-content page-1"> <img src="assets/data/major-chandu-b-dwivedi/letter-1.jpg" alt=""> </div>
                  <div class="tab-content page-2"> <img src="assets/data/major-chandu-b-dwivedi/letter-2.jpg" alt=""> </div>
                  <div class="tab-content page-3"> <img src="assets/data/major-chandu-b-dwivedi/letter-3.jpg" alt=""> </div>
                </div>
				 <ul class="tabs clearfix">
                  <li><a href="page-1">1</a></li>
                  <li><a href="page-2">2</a></li>
                  <li><a href="page-3">3</a></li>
                </ul> 
              </div>
              <div>
                <div class="page-cont">
                  <div class="tab-content page-1"> <img src="assets/data/major-chandu-b-dwivedi/letter-1.jpg" alt=""> </div>
                  <div class="tab-content page-2"> <img src="assets/data/major-chandu-b-dwivedi/letter-2.jpg" alt=""> </div>
                  <div class="tab-content page-3"> <img src="assets/data/major-chandu-b-dwivedi/letter-3.jpg" alt=""> </div>
                </div>
				 <ul class="tabs clearfix">
                  <li><a href="page-1">1</a></li>
                  <li><a href="page-2">2</a></li>
                  <li><a href="page-3">3</a></li>
                </ul> 
              </div>
            </div>
          </div>
          <div class="back">
            <div class="back-container">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix modal-bottom"> <a id="BtnNext" class="btn-next-letter" href="javascript:void(0);">Next Letter</a> </div>
      <div class="controls">
        <div class="left-controls"> <a id="BtnGoback" class="btn-goback" href="#destination">Go Back</a> </div>
        <div class="right-controls"> <a id="BtnFlip" class="btn-flip" href="javascript:void(0);">flip</a> <a id="BtnAudio" class="btn-audio" href="javascript:void(0);">audio</a> <a id="BtnDetail" class="btn-detail" href="javascript:void(0);">Know This Soldier</a> </div>
      </div>
    </div>*/
	
	
	
	
	
	
	$('.front-content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		arrows: false,
		dots: true,
		autoplaySpeed: 2500

	});

	$('.front-content').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		console.log("nextSlide");

		setTimeout(function () {
			//$('.slick-active .page-1').show();
		}, 2000);

	});
	
	
	
	
	
	$('.tab-content').hide();
	$('.page-cont .tab-content:nth-child(1)').show();
	//  $('.tab-content:first').show();
	$('.tabs li:first').addClass('active');
	$('.tabs li').click(function (event) {
		event.preventDefault();
		$('.tabs li').removeClass('active');
		$(this).addClass('active');
		$('.tab-content').hide();

		//var selectTab = $(this).find('a').attr("href");
		$(".slick-active .page-cont .tab-content").eq($(this).index()).show();
		//console.log($(this).index());
		//$("'."+selectTab+"'").fadeIn();
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
	$('.flip-container').toggleClass('fliped');
});
	
	

}




/*$('.letters li').each(function () {
	"use strict";

	var profile_img = $(this).find('figure').attr('data-source');
	var profile_name = $(this).find('figure').attr('data-name');

	$(this).find('.card-img').html('<img src="assets/data/' + profile_img + '/profile.jpg" alt="">');
	$(this).find('figcaption').html(profile_name);

});*/

/*
$('.letters figure').click(function () {
	"use strict";

	var data_name = $(this).find('figcaption').html();
	var data_letter = $(this).attr('data-source');
	var data_text = $(this).attr('data-text');


	
	
	$('.modal .letter-name').html(data_name);
	for(var i=1;i<= $(this).attr('data-letter-no');i++)
		{
			
			
		$('#DataTabs').append('<a href="#">'+'letter-'+i+'</a>');
			
		
			
			
		}

	
	letters();
	

	$('.modal .back-container').html(data_text);

	$('body').addClass('is-modal');
	$('.modal').show();
	$("#BtnDetail").attr("href","details.html?id="+$(this).parent().index());
	setTimeout(function () {
		var front_height = $('.front').height();
		$('.back, .flip-container').height(front_height);
	}, 5000);

});

*/


$('.letters figure').click(function () {
	"use strict";
	$('body').addClass('is-modal');
	$('.modal').show();
	$("#BtnDetail").attr("href", "details.html?id=" + $(this).parent().index());
	letters($(this).parent().index());
});





// pasted from functions
