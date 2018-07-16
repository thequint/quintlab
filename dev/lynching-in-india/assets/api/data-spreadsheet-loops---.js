var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1X0D60W0Zwrs2bXqZSsGiVbBBdazNCMrIWN9JUwYCSYo/pubhtml';
	
function init(){
	Tabletop.init({
		key: public_spreadsheet_contact,
		callback: showInfo,
		simpleSheet: true 
	});
}

window.addEventListener('DOMContentLoaded', init);

function showInfo(data) {

var _html_list = "";
//for(var index = data.length; index >= 0; index--) {
for(var index = data.length-1; index >= 0; index--) {
_html_list +=  "<li>"
					+ "<div class='contact-list'>"
						+ "<figure>"
							+ "<div class='contact-img'><img src="+'data/lynched/'+data[index].Image +'.jpg'+"></div>"
							+ "<figcaption>"
								+ "<div class='gallery--caption'>"
									+ "<h1 class='label-1'>" +data[index].Name +"</h1>"
									//+ "<h2 class='label-2'>" +[data[0].Age,] +"</h2>"
									+ "<h3 class='label-2'>" +data[index].Date +"</h3>"
									+ "<h3 class='label-3'>" +data[index].Location +"</h3>"
									+ "<h3 class='label-4'>" +data[index].WhatHappened +"</h3>"
									+ "<h3 class='label-5'>" +data[index].CaseStatus +"</h3>"
									//+ "<span class='more-btn'>Read More</span>"
									+ "<div class='contact-video'><div class='embed-content "+data[index].Video+"'><iframe src='" +data[index].Video +"' frameborder='0' allowfullscreen></iframe></div></div>"
								+ "</div>"
							+ "</figcaption>"
						+ "</figure>"
					+"</div>"
				+"</li>";
}

document.getElementById("allContact").innerHTML = _html_list;

var _video_html = "<span class='label-5'>" +data[0].Counter +"</span>";

document.getElementById("showCounter").innerHTML = _video_html;
}
