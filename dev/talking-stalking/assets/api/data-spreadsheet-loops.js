var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1sjjvoZysqGBvEA3vTPbumJJPhZmphu4vDqXR3U9hahU/pubhtml';
	
function init(){
	Tabletop.init({
		key: public_spreadsheet_contact,
		callback: showInfo,
		simpleSheet: true 
	});
}

window.addEventListener('DOMContentLoaded', init);

function showInfo(data) {
	//console.log(data[0].Comments);
	$("#total_length").html(data.length);
	for(var index = data.length-1; index >= 0; index--) {
		
		$("#testimonials-first").append (
			"<div class='block-content'>"
				+ "<div class=''>" +data[index].Testimonial_First +"</div>"
			+"</div>"
		),
		$("#testimonials-second").append (
			"<div class='block-content'>"
				+ "<div class=''>" +data[index].Testimonial_Second +"</div>"
			+"</div>"
		),
		$("#testimonials-third").append (
			"<div class='block-'>"
				+ "<div class=''>" +data[index].Testimonial_Third +"</div>"
			+"</div>"
		)
		// if(data[index].Reply == "undefined" || data[index].Reply == "") {
		// 	$("#display_data").append (
		// 		"<div class='block-content'>"
		// 			+"<div class='que-block'>"
		// 				+ "<span class='author'>" +data[index].Name +"</span>"
		// 				+ "<span class='timestamp'>" +data[index].Email +"</span>"
		// 				+ "<p class='comment'>" +data[index].Comments +"</p>"
		// 			+"</div>"
		// 		+"</div>"
		// 	)
		// }else {
		// 	$("#display_data").append (
		// 		"<div class='block-content'>"
		// 			+"<div class='que-block'>"
		// 				+ "<div class='avtar'><img src='assets/images/avatar2.jpg'></div>"
		// 				+ "<span class='author'>" +data[index].Name +"</span>"
		// 				+ "<span class='timestamp'>" +data[index].Timestamp +"</span>"
		// 				+ "<p class='comment'>" +data[index].Comments +"</p>"
		// 			+"</div>"

		// 			+"<div class='ans-block'>"
		// 				+ "<div class='avtar'><img src='assets/images/avatar.jpg'></div>"
		// 				+ "<span class='author'>TheQuint</span>"
		// 				+ "<span class='timestamp'>" +data[index].Timestamp +"</span>"
		// 				+ "<p class='comment'>" +data[index].Reply +"</p>"
		// 			+"</div>"
		// 		+"</div>"
		// 	)
		// }
	}
}