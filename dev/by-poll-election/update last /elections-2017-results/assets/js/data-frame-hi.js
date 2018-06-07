
var public_spreadsheet_elections = 'https://docs.google.com/spreadsheets/d/1nBGRxoVGYj5Z-HT5tJrbLMQ9yyfKntTh1MatrAyWddE/pubhtml';

	
function init(){
Tabletop.init({
	key: public_spreadsheet_elections,
	callback: showInfo,
	simpleSheet: true 
});
}



window.addEventListener('DOMContentLoaded', init);

function showInfo(data) {	
document.getElementById("data_up").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].uphindi,] + "</td>" 
	+ "<td>" + [ data[0].upseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].uphindi,] + "</td>" 
	+ "<td>" + [ data[1].upseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[2].uphindi,] + "</td>" 
	+ "<td>" + [ data[2].upseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[3].uphindi,] + "</td>" 
	+ "<td>" + [ data[3].upseats,] + "</td>"  
	+ "</tr>";
	
	
	document.getElementById("data_punjab").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].punjabhindi,] + "</td>" 
	+ "<td>" + [ data[0].punjabseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].punjabhindi,] + "</td>" 
	+ "<td>" + [ data[1].punjabseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[2].punjabhindi,] + "</td>" 
	+ "<td>" + [ data[2].punjabseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[3].punjabhindi,] + "</td>" 
	+ "<td>" + [ data[3].punjabseats,] + "</td>"  
	+ "</tr>";
	
	document.getElementById("data_uk").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].ukhindi,] + "</td>" 
	+ "<td>" + [ data[0].ukseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].ukhindi,] + "</td>" 
	+ "<td>" + [ data[1].ukseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[2].ukhindi,] + "</td>" 
	+ "<td>" + [ data[2].ukseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[3].ukhindi,] + "</td>" 
	+ "<td>" + [ data[3].ukseats,] + "</td>"  
	+ "</tr>";
	
	document.getElementById("data_goa").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].goahindi,] + "</td>" 
	+ "<td>" + [ data[0].goaseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].goahindi,] + "</td>" 
	+ "<td>" + [ data[1].goaseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[2].goahindi,] + "</td>" 
	+ "<td>" + [ data[2].goaseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[3].goahindi,] + "</td>" 
	+ "<td>" + [ data[3].goaseats,] + "</td>"  
	+ "</tr>";
	
	document.getElementById("data_manipur").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].manipurhindi,] + "</td>" 
	+ "<td>" + [ data[0].manipurseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].manipurhindi,] + "</td>" 
	+ "<td>" + [ data[1].manipurseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[2].manipurhindi,] + "</td>" 
	+ "<td>" + [ data[2].manipurseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[3].manipurhindi,] + "</td>" 
	+ "<td>" + [ data[3].manipurseats,] + "</td>"  
	+ "</tr>";
	
	

	
console.log(data);
}






