$(document).ready(function() {	
	$('.videobtn').click(function(){
		
		$('.frame_1').find('iframe').attr('src', 'https://www.youtube.com/embed/EGqwSd1tlfw');
		$('.frame_2').find('iframe').attr('src', 'https://www.youtube.com/embed/PFA7rMuj0jk');
		$('.frame_3').find('iframe').attr('src', 'https://www.youtube.com/embed/JUDGpcX4NO0');
		$('.frame_4').find('iframe').attr('src', 'https://www.youtube.com/embed/S2JjJtr2hKg');
		
		
		// share Twitter
	
        var tweettext = $('.resultTotal').text();
        $("a.twitter-share-button").attr("href", 'https://twitter.com/intent/tweet?text=' + 'I scored ' + tweettext + ' runs in the Sachin Book Cricket Game. Can you beat my score? https://www.thequint.com/quintlab/the-sachin-tendulkar-book-cricket-game/');
		  
	});
	

	$('.mybtn').hide();
	var counter = 0;

	$('.firstBtn').click(function() {
		$(this).hide();

		setTimeout(function() {
			$(".firstBtn").show();
		}, 2000);

	    counter++;
	    $("#theCount").text(counter);

	    if ($("#theCount").text() == 5) {
	        $('.firstBtn').hide().addClass("hide");
	        $('.mybtn').show();
	    }

	    $(".swing").removeClass("newback");
	    $(".swing").addClass("flip").delay(1000).queue(function() {
	        $(this).removeClass("flip").dequeue();
	    });
	 
	 	// setTimeout random
	    setTimeout(function() {
	        var random = Math.floor(Math.random() * $('.bb-item').length);
	        $('.bb-item').hide().eq(random).show();
	 
		    var fixedNumbers = ['2', '4', '6'];
		    numberIndex = Math.floor(Math.random() * fixedNumbers.length);
		    $('.result').html(fixedNumbers[numberIndex]);
		 
		    var aa = parseInt($('.result').text());
		    var bb = parseInt($('.resultTotal').text());
		    var cc = parseInt($('.resultTotalPop').text());
		 
		    $(".resultTotal").text(aa + bb);
		    $(".resultTotalPop").text(aa + cc);
	 	}, 1200);
	});

    $('.mybtn').on('click', function() {
    	$(this).hide();

    	setTimeout(function() {
    		$(".mybtn").show();
    	}, 2000);
    	
    	setTimeout(function() {
	        $('.random').html(Math.floor(Math.random() * 10 / 2));
	        $('.result').html(Math.floor(Math.random() * 10 / 2) * 2);  // page number random

	        var aa = parseInt($('.result').text());
	        var bb = parseInt($('.resultTotal').text());
	        var cc = parseInt($('.resultTotalPop').text());

	        $(".resultTotal").text(aa + bb);
	        $(".resultTotalPop").text(aa + cc);

	        if ($(".result").text() == 8) {
	            $(".resultTotal").text(bb += 1);
	            $(".resultTotalPop").text(cc += 1);
	        }
	        if ($(".result").text() == 0) {
	            $(".alert-show").fadeIn();
	        } else {
	            //
	        }
	    }, 1200);

        // setTimeout random
        setTimeout(function() {
            //Onclick add animation
            var random = Math.floor(Math.random() * $('.bb-item').length);
            $('.bb-item').hide().eq(random).show();
        }, 1200);
    });

    // set up click/tap panels
    /*$('.mybtn').toggle(function(){
    	$(".swing").addClass('flip');
    },function(){
    	$(".swing").removeClass('flip');
    });*/
    $('.mybtn').click(function() {
        //$(".swing").addClass('flip');
        $(".swing").removeClass("newback");
        $(".swing").addClass("flip").delay(1000).queue(function() {
            $(this).removeClass("flip").dequeue();
        });
    });

    // Popup Close
    $('.close').on('click', function() {
        $(".alert-show").fadeOut();
        location.reload();
    });

    // Social 
    $(".social-back").click(function(e) {
        $(".social-icons").slideToggle(400);
        return false;
    });
    $("body").click(function() {
        $(".social-icons").slideUp();
    });

    // Footer
    $('.credits').click(function() {
        $('.creditsModal').show().addClass('zoomIn');
    });

    $('.modalClose').click(function() {
        $('.creditsModal').fadeOut();
    });
	
	
	
	//video play pause
	
	

	
});