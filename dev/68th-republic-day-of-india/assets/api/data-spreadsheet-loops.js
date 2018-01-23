var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1Yia2mh3Dzjbacsm6dP8V3lyYTzJqpeCp2TBifxGEkvQ/pubhtml';
	
function init(){
	Tabletop.init({
		key: public_spreadsheet_contact,
		callback: showInfo,
		simpleSheet: true 
	});
}

// 
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

window.addEventListener('DOMContentLoaded', init);

function showInfo(data) {
	// sheet data
	$("#total_length").html(data.length);
	for(var index = data.length-1; index >= 0; index--) {
		$("#product_show").append (
			"<div class='section-box__iframe--container'>" +data[index].iframe_code +"</div>"
		)
		/*
		if(data[index].iframe_code == "undefined" || data[index].iframe_code == "") {
			$("#product_show").append (
				+ "<div class='section-box__iframe--container'>" +data[index].iframe_code +"</div>"
			)
		}else {
			$("#product_show").append (
				+ "<div class='section-box__iframe--container'>" +data[index].iframe_code +"</div>"
			)
		}*/
	}

}
