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
	$("#product_show").append (
		"<div>" +data[0].iframe_code +"</div>"
	)

}
