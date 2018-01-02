
var public_spreadsheet_elections = 'https://docs.google.com/spreadsheets/d/1zn7CbWMNkQ0pwNsNSw89IeMtGR_gv4zKLqwVdXJ5-0E/pubhtml';
	
function init(){
Tabletop.init({
	key: public_spreadsheet_elections,
	callback: showInfo,
	simpleSheet: true 
});
}



window.addEventListener('DOMContentLoaded', init);

function showInfo(data) {	
document.getElementById("matchcentre_html").innerHTML = "<div class='simc-quint-container' id='siMtcContainer' data-matchcode='"+  data[0].MatchId +"'></div>";
	
	
	
	

	
console.log(data);
}






