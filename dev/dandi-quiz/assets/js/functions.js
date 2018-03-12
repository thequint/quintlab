$(document).ready(function () {

	$('#getValue').click(function () {
		if ($('#showResult').val() <= 6) {
			$('#quiz-results div.result-text').text(' LOL, we understand Indian laws are not easy to crack. Play again, and challenge your friends too.').fadeIn();
		} else {
			$('#quiz-results div.result-text').text('Congratulations, you are on the right side of the law. Share your score with your friends, and challenge them too!').fadeIn();
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
	
	
	$('.answers li.ans0').append('<div class="hammer"></div>').attr('onclick', 'PlaySound_1()');
	$('.answers li.ans1').append('<div class="hammer"></div>').attr('onclick', 'PlaySound_2()');
	$('.answers li.ans2').append('<div class="hammer"></div>').attr('onclick', 'PlaySound_2()');
	
	
	
	
	$('.answers li').click(function () {
		$('.answers').addClass('disable');

		$(this).addClass("frame");
		setTimeout(function () {
			$('.answers li').removeClass('frame');
		}, 400);
	});

	$('#quiz-next-btn').click(function () {
		$('.answers').removeClass('disable');
	});
	
	$('#quiz-restart-btn').click(function () {
		$('.answers').removeClass('disable');
	});
	
	
	$('#quiz-start-btn').click(function () {
		$('.start-content').hide();
	});

});

function PlaySound_1() {
	var sound = document.getElementById("audio_1");
	sound.play();
}

function PlaySound_2() {
	var sound = document.getElementById("audio_2");
	sound.play();
}




console.log(PlaySound_2());


