$(window).ready(function () {
	"use strict";
	$("#magazine").turn({
		display: 'single',
		acceleration: true,
		gradients: !$.isTouch,
		elevation: 50,
		when: {
			turned: function (e, page) {
				//console.log('Current view: ', $(this).turn('view'));
				//console.log();
				//alert('page'+page); 
				
				
				$('.page').html(+page);
				
				//$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
				
				
				$('.youtube-video').each(function(){
					
					var data_src =  $(this).attr('data-src');
					
					$('.youtube-video').attr('src', data_src);
					
				});
				
				
			}
			
			
		}
	});
});


$(window).bind('keydown', function (e) {
	"use strict";
	if (e.keyCode === 37)
		$("#magazine").turn("previous");
	else if (e.keyCode === 39)
		$("#magazine").turn("next");

});



$("#next").click(function (e) {
	"use strict";
	$("#magazine").turn("next");
	return false;

});

$("#previous").click(function (e) {
	"use strict";

	e.stopPropagation();
	$("#magazine").turn("previous");
	return false;

});


$("#next_1").click(function (e) {
	"use strict";
	$("#magazine").turn("next");
	return false;

});

$("#previous_1").click(function (e) {
	"use strict";

	e.stopPropagation();
	$("#magazine").turn("previous");
	return false;

});


