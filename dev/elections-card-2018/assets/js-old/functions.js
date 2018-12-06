
// var public_spreadsheet_elections = 'https://docs.google.com/spreadsheets/d/1nBGRxoVGYj5Z-HT5tJrbLMQ9yyfKntTh1MatrAyWddE/pubhtml';
var public_spreadsheet_elections = 'https://docs.google.com/spreadsheets/d/13aLerk3BmYrP01i07L9JctZBCpP8f-8GnWlC4HB0xeM/pubhtml';

function init(){
Tabletop.init({
	key: public_spreadsheet_elections,
	callback: showInfo,
	simpleSheet: true 
});
}


window.addEventListener('DOMContentLoaded', init);







