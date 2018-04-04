$(document).ready(function () {

	$('#getValue').click(function () {
		if ($('#showResult').val() <= 3) 
		{
			$('#quiz-results div.result-text').text('"If someone slaps you on one side of your face, turn the other one to him" Because you qualify, pakka!').fadeIn();
		}
		
		else if ($('#showResult').val() > 3 && $('#showResult').val() <= 7) 
			
		{
			$('#quiz-results div.result-text').text('"An ounce of practice is worth a thousand words" Samjhe? Now keep practising dil laga ke to get better.').fadeIn();
		}
		
		else if ($('#showResult').val() > 7 && $('#showResult').val() < 10) 
			
		{
			$('#quiz-results div.result-text').text('"Be the change you wish to see in the world". Please study about Bapu ji thoda aur.').fadeIn();
		}
		
		
		else 
		{
			$('#quiz-results div.result-text').text('Arey krantikaari! "Learn as if you were to live forever" Jai ho. ').fadeIn();
		}

	});


	$('#quiz-finish-btn').click(function () {
		$("#getValue").trigger("click");
		setTimeout(function () {
			$("#getValue").trigger("click");
			
			// Share twitter
			var tweettext = $('.share-tweet-text').text();
        	$("a.twitter-share-button").attr("href", 'https://twitter.com/intent/tweet?text=' + tweettext);
				
		}, 100);
	});
	
	
	/*$('.answers li.ans0').append('<div class="hammer"></div>').attr('onclick', 'PlaySound_1()');
	$('.answers li.ans1').append('<div class="hammer"></div>').attr('onclick', 'PlaySound_2()');
	$('.answers li.ans2').append('<div class="hammer"></div>').attr('onclick', 'PlaySound_2()');*/
	
	
	
	
	$('.answers li').click(function () {
		$('.answers').addClass('disable');

		$(this).addClass("frame");
		setTimeout(function () {
			$('.answers li').removeClass('frame');
		}, 400);
	});

	$('#quiz-next-btn').click(function () {
		$('.answers').removeClass('disable');
		$('.gandhi').addClass('move');
		$('.mile-stone').addClass('is-change');
				
				setTimeout(function() {
  					$('.gandhi').removeClass('move');
				}, 2000);
		
				setTimeout(function() {
					$('.mile-stone').removeClass('is-change');
				}, 600);
	});
	
	$('#quiz-restart-btn').click(function () {
		$('.answers').removeClass('disable');
	});
	
	
	$('#quiz-start-btn').click(function () {
		$('.start-content').hide();
		$('.mile-stone').show();
	});

});

/*function PlaySound_1() {
	var sound = document.getElementById("audio_1");
	sound.play();
}

function PlaySound_2() {
	var sound = document.getElementById("audio_2");
	sound.play();
}*/




