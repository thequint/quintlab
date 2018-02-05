var isSwipe =0;
function call_tinder_cards(){
	
$("#tinderslide").jTinder({
   
	animationRevertSpeed: 200,
	animationSpeed: 400,
	threshold: 1,
	likeSelector: '.like',
	dislikeSelector: '.dislike'
});
	
	$('.fa-info-circle').click(function(){
		$('.card-item').addClass('is-detail');
		$('.card-item .img').animate({height:250},200);
		$('.app-container figcaption').show();
	});
	
	$('.fa-arrow-down').click(function(){
		$('.card-item').removeClass('is-detail');
		$('.card-item .img').animate({height:400},200);
		$('.app-container figcaption').hide();
	});	
}

function reload_app(){
	$('.dislike').removeClass('is-hide');
	$('.like').removeClass('is-hide');
	$('.reload').removeClass('is-show');
	$('.reset-ops').css('opacity','0');
	isSwipe=0;
}

function action_click(arg){
	
	if(arg==2)
		{
			 $('#status').html('Wait for it');
		}
	else
		{
	$('.reload').addClass('is-show');
	$('.dislike').addClass('is-hide');
	$('.like').addClass('is-hide');
	
	if(arg==0)//dislike
		{
			 $('#status').html("<li><figure><div class='img'><img src='"+ sheet_data[foo].Image_Left +"' alt='"+ sheet_data[foo].Title_Left +"'><div class='title-el'><h2>"+ sheet_data[foo].Title_Left +"</h2><h3>"+ sheet_data[foo].Subtitle_Left +"<i class='fa fa-info-circle'></i></h3></div></div><figcaption><p>"+ sheet_data[foo].Description_Left +"</p></figcaption></figure></li>");
		}
	else// like
		{
			 $('#status').html("<li><figure><div class='img'><img src='"+ sheet_data[foo].Image_Right +"' alt='"+ sheet_data[foo].Title_Right +"'><div class='title-el'><h2>"+ sheet_data[foo].Title_Right +"</h2><h3>"+ sheet_data[foo].Subtitle_Right +"<i class='fa fa-info-circle'></i></h3></div></div><figcaption><p>"+ sheet_data[foo].Description_Right +"</p></figcaption></figure></li>");
		}
			isSwipe=1;
		}
	
}

$(".reload").click(function(){
	$("li").animate({"transform": "translate(0px, 0px) rotate(0rad) skewX(0rad) scale(1, 1)"},400);
	reload_app();
});


$('.actions .like, .actions .dislike').click(function(e){
	$("#tinderslide").jTinder($(this).attr('class'));
	
});


// more info






