// Function for append table 

$(document).ready(function () {
	var tableContent = $('.table-content').html();
	var tableContent_1 = $('.table-content-1').html();
	$('.box-info').html(tableContent);
	//$('.election-data').html(tableContent_1);

});



function frame_slider() {

	$('.slider-frame-1').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 2000,
		dots: true,
		responsive: [

			{
				breakpoint: 601,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

		]
	});
}
