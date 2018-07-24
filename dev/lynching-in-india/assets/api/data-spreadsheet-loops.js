var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1X0D60W0Zwrs2bXqZSsGiVbBBdazNCMrIWN9JUwYCSYo/pubhtml';

function init() {
    Tabletop.init({
        key: public_spreadsheet_contact,
        callback: showInfo,
        simpleSheet: true
    });
}

window.addEventListener('DOMContentLoaded', init);

var sheet_data;
var str = "";

function showDataFunction(category) {
    for (var index = sheet_data.length - 1; index >= 0; index--) {

    	if(category=="All" || category==undefined || category==sheet_data[index].Filter){

	        str += "<li>" +
	            "<div class='contact-list'>" +
	            "<figure>" +
	            "<div class='contact-img'><img src=" + 'data/lynched/' + sheet_data[index].Image + '.jpg' + "></div>" +
	            "<figcaption>" +
	            "<div class='gallery--caption'>" +
	            "<h1 class='label-1'>" + sheet_data[index].Name + "</h1>" +
	            "<h3 class='label-2'>" + sheet_data[index].Date + "</h3>" +
	            "<h3 class='label-3'>" + sheet_data[index].Location + "</h3>" +
	            "<h3 class='label-4'>" + sheet_data[index].WhatHappened + "</h3>" +
	            "<h3 class='label-5'>" + sheet_data[index].CaseStatus + "</h3>";
	        if (sheet_data[index].Video != 'None') {
	            str += "<div class='contact-video'><div class='embed-content " + sheet_data[index].Video + "'><iframe src='" + sheet_data[index].Video + "' frameborder='0' allowfullscreen></iframe></div></div>";
	        }
	        str += "</div>" +
	            "</figcaption>" +
	            "</figure>" +
	            "</div>" +
	            "</li>";
        }	
    }
    $("#allContact").html(str);

    var data_counter = "<span class='label-5'>" + sheet_data[0].Counter + "</span>";
    $("#showCounter").html(data_counter);

    $(".section--gallery .filter").show();
    $(".lds-spinner").hide();
}
	
function showInfo(data) {
	sheet_data = data;
	showDataFunction();
}
$(".filter span").click(function(){
	str="";
	showDataFunction($(this).html());
	$(".filter span").removeClass("active");
	$(this).addClass("active");
});


