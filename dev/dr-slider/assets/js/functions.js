$(document).ready(function(){
	
	$('#DrSlider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		arrows: false,
		autoplaySpeed: 2000,
		dots: false,
		
		responsive: [

			{
				breakpoint: 1279,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					variableWidth:true,
					
				}
			}

		]
	});
});