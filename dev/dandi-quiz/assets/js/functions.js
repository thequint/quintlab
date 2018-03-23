$(document).ready(function () {

	$('#getValue').click(function () {
		if ($('#showResult').val() <= 3) 
		{
			$('#quiz-results div.result-text').text('Would you like to for a quick walk, and retry the quiz?').fadeIn();
		}
		
		else if ($('#showResult').val() > 3 && $('#showResult').val() <= 7) 
			
		{
			$('#quiz-results div.result-text').text('You had a good run. Jog your mind a little more. and take the quiz again.').fadeIn();
		}
		
		else if ($('#showResult').val() > 7 && $('#showResult').val() < 10) 
			
		{
			$('#quiz-results div.result-text').text('Oh! You almost reached the finish line. Success is sweet, and salty!').fadeIn();
		}
		
		
		else 
		{
			$('#quiz-results div.result-text').text("10/10! You've sprinted through the quiz! Jai Ho.").fadeIn();
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




