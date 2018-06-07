
var public_spreadsheet_elections = 'https://docs.google.com/spreadsheets/d/1eOhfupUVmtn8uerKCq4uOGyAUIP11uJX7-X1ryUNV00/pubhtml';


	
function init(){
Tabletop.init({
	key: public_spreadsheet_elections,
	callback: showInfo,
	simpleSheet: true 
});
	

}

window.addEventListener('DOMContentLoaded', init);

function showInfo(data) {
		
document.getElementById("data_palghar").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].palgharhindi,] + "</td>" 
	+ "<td>" + [ data[0].palgharseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].palgharhindi,] + "</td>" 
	+ "<td>" + [ data[1].palgharseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[2].palgharhindi,] + "</td>" 
	+ "<td>" + [ data[2].palgharseats,] + "</td>"  
	+ "</tr>";
	
	
	document.getElementById("data_bhandara").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].bhandarahindi,] + "</td>" 
	+ "<td>" + [ data[0].bhandaraseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].bhandarahindi,] + "</td>" 
	+ "<td>" + [ data[1].bhandaraseats,] + "</td>"  
	+ "</tr>";
	
	document.getElementById("data_kairana").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].kairanahindi,] + "</td>" 
	+ "<td>" + [ data[0].kairanaseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].kairanahindi,] + "</td>" 
	+ "<td>" + [ data[1].kairanaseats,] + "</td>"  
	+ "</tr>";
	
	document.getElementById("data_aonglenden").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].aonglendenhindi,] + "</td>" 
	+ "<td>" + [ data[0].aonglendenseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].aonglendenhindi,] + "</td>" 
	+ "<td>" + [ data[1].aonglendenseats,] + "</td>"  
	+ "</tr>";
}






