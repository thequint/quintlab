
//var public_spreadsheet_elections = 'https://docs.google.com/spreadsheets/d/1nBGRxoVGYj5Z-HT5tJrbLMQ9yyfKntTh1MatrAyWddE/pubhtml';
var public_spreadsheet_elections = 'https://docs.google.com/spreadsheets/d/1vK17VodrLX52mIZcx5MFoFHvHNFoJPP6-N0bfAbWSxc/pubhtml';



function init(){
Tabletop.init({
	key: public_spreadsheet_elections,
	callback: showInfo,
	simpleSheet: true 
});
}


window.addEventListener('DOMContentLoaded', init);







