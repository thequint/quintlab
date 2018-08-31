// var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1sjjvoZysqGBvEA3vTPbumJJPhZmphu4vDqXR3U9hahU/pubhtml';

var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1sionjEKyqPwgje294nBdPiK90NxH4B0bW2Je2u_gRwk/pubhtml';

function init(){
	Tabletop.init({
		key: public_spreadsheet_contact,
		callback: showInfo,
		simpleSheet: true 
	});
}

function showInfo(data) {
	$(".Total_Testimonials").append (
		data[0].Total_Testimonials
	),
	$(".Total_Signatures").append (
		data[0].Total_Signatures
	)
}

//window.addEventListener('DOMContentLoaded', init);
$(window).on('load',function(){
	init();
});