
var public_spreadsheet = 'https://docs.google.com/spreadsheets/d/1HInLE5YutQ-aaayFh-RQtbfdE8U-Yr8Dfg77HJcOP4U/pubhtml';



function init(){
Tabletop.init({
	key: public_spreadsheet,
	callback: showInfo,
	simpleSheet: true 
});
}


window.addEventListener('DOMContentLoaded', init);







