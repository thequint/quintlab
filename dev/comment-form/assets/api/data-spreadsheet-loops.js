var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1s9udn3vg8ocbFombWNbFfKZ_vY63Ah3BkP-Yw1mYrPg/pubhtml';
	
function init(){
	Tabletop.init({
		key: public_spreadsheet_contact,
		callback: showInfo,
		simpleSheet: true 
	});
}

window.addEventListener('DOMContentLoaded', init);

function showInfo(data) {
	for(var index = data.length-1; index >= 0; index--) {
		//console.log(data[index].Reply);
		if(data[index].Reply == "undefined" || data[index].Reply == "") {
			$("#display_data").append (
				"<div class='block-content'>"
					+"<div class='que-block'>"
						+ "<div class='avtar'><img src='assets/images/avatar2.jpg'></div>"
						+ "<span class='author'>" +data[index].Name +"</span>"
						+ "<span class='timestamp'>" +data[index].Timestamp +"</span>"
						+ "<p class='comment'>" +data[index].Comments +"</p>"
					+"</div>"
				+"</div>"
			)
		}else {
			$("#display_data").append (
				"<div class='block-content'>"
					+"<div class='que-block'>"
						+ "<div class='avtar'><img src='assets/images/avatar2.jpg'></div>"
						+ "<span class='author'>" +data[index].Name +"</span>"
						+ "<span class='timestamp'>" +data[index].Timestamp +"</span>"
						+ "<p class='comment'>" +data[index].Comments +"</p>"
					+"</div>"

					+"<div class='ans-block'>"
						+ "<div class='avtar'><img src='assets/images/avatar.jpg'></div>"
						+ "<span class='author'>TheQuint</span>"
						+ "<span class='timestamp'>" +data[index].Timestamp +"</span>"
						+ "<p class='comment'>" +data[index].Reply +"</p>"
					+"</div>"
				+"</div>"
			)
		}
	}
}