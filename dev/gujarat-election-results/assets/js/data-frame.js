
//var public_spreadsheet_elections = 'https://docs.google.com/spreadsheets/d/1eJ6FhLAh6eNxx9KUX7n3tcmLHp2eGFelvYdflJW2_eA/pubhtml';
var public_spreadsheet_elections = 'https://docs.google.com/spreadsheets/d/1vK17VodrLX52mIZcx5MFoFHvHNFoJPP6-N0bfAbWSxc/pubhtml';

	
function init(){
Tabletop.init({
	key: public_spreadsheet_elections,
	callback: showInfo,
	simpleSheet: true 
});
}



window.addEventListener('DOMContentLoaded', init);

function showInfo(data) {	
document.getElementById("data_gujarat").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].gujaratparty,] + "</td>" 
	+ "<td>" + [ data[0].gujaratseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].gujaratparty,] + "</td>" 
	+ "<td>" + [ data[1].gujaratseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[2].gujaratparty,] + "</td>" 
	+ "<td>" + [ data[2].gujaratseats,] + "</td>"  
	+ "</tr>";
	
	
	document.getElementById("data_himachal").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].himachalparty,] + "</td>" 
	+ "<td>" + [ data[0].himachalseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].himachalparty,] + "</td>" 
	+ "<td>" + [ data[1].himachalseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[2].himachalparty,] + "</td>" 
	+ "<td>" + [ data[2].himachalseats,] + "</td>"  
	+ "</tr>";
	
	
$("#graph_data_gujarat").attr("data-y",[ data[0].gujaratseats,] +","+[ data[1].gujaratseats,] +","+[ data[2].gujaratseats,] 	)
	
$("#graph_data_himachal").attr("data-y",[ data[0].himachalseats,] +","+[ data[1].himachalseats,] +","+[ data[2].himachalseats,] 	)
//data-y=
create_graph("graph_data_gujarat");
create_graph("graph_data_himachal");
}

frame_slider();






