
var public_spreadsheet_elections = 'https://docs.google.com/spreadsheets/d/1HOscsnJrHDQm6u0E5ZhTex03OKB2ULA5i3jm9oSFNsY/pubhtml';


	
function init(){
Tabletop.init({
	key: public_spreadsheet_elections,
	callback: showInfo,
	simpleSheet: true 
});
}



window.addEventListener('DOMContentLoaded', init);

function showInfo(data) {	
document.getElementById("data_phulpur").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].phulpurparty,] + "</td>" 
	+ "<td>" + [ data[0].phulpurseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].phulpurparty,] + "</td>" 
	+ "<td>" + [ data[1].phulpurseats,] + "</td>"  
	+ "</tr>"
	
	+"<tr>" 
	+ "<td>" + [ data[2].phulpurparty,] + "</td>" 
	+ "<td>" + [ data[2].phulpurseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[3].phulpurparty,] + "</td>" 
	+ "<td>" + [ data[3].phulpurseats,] + "</td>"  
	+ "</tr>";
	
	
	document.getElementById("data_araria").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].arariaparty,] + "</td>" 
	+ "<td>" + [ data[0].arariaseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].arariaparty,] + "</td>" 
	+ "<td>" + [ data[1].arariaseats,] + "</td>"  
	+ "</tr>"
	
	+"<tr>" 
	+ "<td>" + [ data[2].arariaparty,] + "</td>" 
	+ "<td>" + [ data[2].arariaseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[3].arariaparty,] + "</td>" 
	+ "<td>" + [ data[3].arariaseats,] + "</td>"  
	+ "</tr>"
	
	document.getElementById("data_gorakhpur").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].gorakhpurparty,] + "</td>" 
	+ "<td>" + [ data[0].gorakhpurseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].gorakhpurparty,] + "</td>" 
	+ "<td>" + [ data[1].gorakhpurseats,] + "</td>"  
	+ "</tr>"
	
	+"<tr>" 
	+ "<td>" + [ data[2].gorakhpurparty,] + "</td>" 
	+ "<td>" + [ data[2].gorakhpurseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[3].gorakhpurparty,] + "</td>" 
	+ "<td>" + [ data[3].gorakhpurseats,] + "</td>"  
	+ "</tr>";
	
/*	
$("#graph_data_gujarat").attr("data-y",[ data[0].gujaratseats,] +","+[ data[1].gujaratseats,] +","+[ data[2].gujaratseats,] 	)
	
$("#graph_data_himachal").attr("data-y",[ data[0].himachalseats,] +","+[ data[1].himachalseats,] +","+[ data[2].himachalseats,] 	)
//data-y=
if(data[0].gujaratseats==0&data[1].gujaratseats==0&data[2].gujaratseats==0)
	{
		//do nothing
		if(window.innerWidth<=600)
			{
		$(".gujarat-graph-data").hide();
			}
	}
	else
		{
create_graph("graph_data_gujarat");
		}
	if(data[0].himachalseats==0&data[1].himachalseats==0&data[2].himachalseats==0)
	{
		//do nothing
		if(window.innerWidth<=600)
			{
$(".himachal-graph-data").hide();
			}
			//$(".himachal-graph-data").hide();
	}
else{
create_graph("graph_data_himachal");
}

if(data[0].gujaratseats==0&data[1].gujaratseats==0&data[2].gujaratseats==0&data[0].himachalseats==0&data[1].himachalseats==0&data[2].himachalseats==0 && window.innerWidth>601)
	{
	$(".graph-data").hide();	
	}*/
	
}

frame_slider();






