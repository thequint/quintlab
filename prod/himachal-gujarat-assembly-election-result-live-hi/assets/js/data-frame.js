
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
	+ "<td>" + [ data[0].gujarathindi,] + "</td>" 
	+ "<td>" + [ data[0].gujaratseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].gujarathindi,] + "</td>" 
	+ "<td>" + [ data[1].gujaratseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[2].gujarathindi,] + "</td>" 
	+ "<td>" + [ data[2].gujaratseats,] + "</td>"  
	+ "</tr>";
	
	
	document.getElementById("data_himachal").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].himachalhindi,] + "</td>" 
	+ "<td>" + [ data[0].himachalseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].himachalhindi,] + "</td>" 
	+ "<td>" + [ data[1].himachalseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[2].himachalhindi,] + "</td>" 
	+ "<td>" + [ data[2].himachalseats,] + "</td>"  
	+ "</tr>";
	
	
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
	}
	
}

frame_slider();






