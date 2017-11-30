// var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1sjjvoZysqGBvEA3vTPbumJJPhZmphu4vDqXR3U9hahU/pubhtml';

var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1sionjEKyqPwgje294nBdPiK90NxH4B0bW2Je2u_gRwk/pubhtml';

function init(){
	Tabletop.init({
		key: public_spreadsheet_contact,
		callback: showInfo,
		simpleSheet: true 
	});
}

window.addEventListener('DOMContentLoaded', init);

function showInfo(data) {

	console.log(data[0].Total_Signatures);
	$(".Total_Testimonials").append (
		data[0].Total_Testimonials
	),
	$(".Total_Signatures").append (
		data[0].Total_Signatures
	)
	//console.log(data[0].Comments);
	// $("#total_length").html(data.length);
	// for(var index = data.length-1; index >= 0; index--) {
		
	// 	$("#Total_Testimonials").append (
	// 		+data[index].Total_Testimonials
	// 	),
	// 	$("#testimonials-second").append (
	// 		"<div class='block-content'>"
	// 			+ "<div class=''>" +data[0].Total_Signatures +"</div>"
	// 		+"</div>"
	// 	),
	// 	$("#testimonials-third").append (
	// 		"<div class='block-'>"
	// 			+ "<div class=''>" +data[index].Testimonial_First +"</div>"
	// 		+"</div>"
	// 	)
	// }
}