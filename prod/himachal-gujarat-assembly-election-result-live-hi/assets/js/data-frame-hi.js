
var public_spreadsheet_elections = 'https://docs.google.com/spreadsheets/d/1eJ6FhLAh6eNxx9KUX7n3tcmLHp2eGFelvYdflJW2_eA/pubhtml';

	
function init(){
Tabletop.init({
	key: public_spreadsheet_elections,
	callback: showInfo,
	simpleSheet: true 
});
}



window.addEventListener('DOMContentLoaded', init);

function showInfo(data) {	
document.getElementById("data_north").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].northhindi,] + "</td>" 
	+ "<td>" + [ data[0].northseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].northhindi,] + "</td>" 
	+ "<td>" + [ data[1].northseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[2].northhindi,] + "</td>" 
	+ "<td>" + [ data[2].northseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[3].northhindi,] + "</td>" 
	+ "<td>" + [ data[3].northseats,] + "</td>"  
	+ "</tr>";
	
	
	document.getElementById("data_south").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].southhindi,] + "</td>" 
	+ "<td>" + [ data[0].southseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].southhindi,] + "</td>" 
	+ "<td>" + [ data[1].southseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[2].southhindi,] + "</td>" 
	+ "<td>" + [ data[2].southseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[3].southhindi,] + "</td>" 
	+ "<td>" + [ data[3].southseats,] + "</td>"  
	+ "</tr>";
	
	document.getElementById("data_east").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].easthindi,] + "</td>" 
	+ "<td>" + [ data[0].eastseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].easthindi,] + "</td>" 
	+ "<td>" + [ data[1].eastseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[2].easthindi,] + "</td>" 
	+ "<td>" + [ data[2].eastseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[3].easthindi,] + "</td>" 
	+ "<td>" + [ data[3].eastseats,] + "</td>"  
	+ "</tr>";
	
	document.getElementById("data_overall").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].overallhindi,] + "</td>" 
	+ "<td>" + [ data[0].overallseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].overallhindi,] + "</td>" 
	+ "<td>" + [ data[1].overallseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[2].overallhindi,] + "</td>" 
	+ "<td>" + [ data[2].overallseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[3].overallhindi,] + "</td>" 
	+ "<td>" + [ data[3].overallseats,] + "</td>"  
	+ "</tr>";
	
}






