
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
	
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://assets-quint.sportz.io/cricket/widgets/ipl-masthead/js/score-widget-init.js';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);

}






