
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
	
document.getElementById("data_gorakhpur").innerHTML = 
	"<tr>" 
	+ "<td><span class='is-bjp'>" + [ data[0].gorakhpurparty,] + "</span></td>" 
	+ "<td><span class='is-inc'>" + [ data[1].gorakhpurparty,] + "</span></td>" 
	+ "<td><span class='is-sp'>" + [ data[2].gorakhpurparty,] + "</span></td>" 
	+ "</tr>"

	+"<tr>" 
	+ "<td class='seat-bjp'>" + [ data[0].gorakhpurseats,] + "</td>" 
	+ "<td class='seat-inc'>" + [ data[1].gorakhpurseats,] + "</td>"  
	+ "<td class='seat-sp'>" + [ data[2].gorakhpurseats,] + "</td>"  
	+ "</tr>";
	
	
document.getElementById("data_phulpur").innerHTML = 
	"<tr>" 
	+ "<td><span class='is-bjp'>" + [ data[0].phulpurparty,] + "</span></td>"
	+ "<td><span class='is-inc'>" + [ data[1].phulpurparty,] + "</span></td>" 
	+ "<td><span class='is-sp'>" + [ data[2].phulpurparty,] + "</span></td>" 
	+ "</tr>"

	+"<tr>" 
	+ "<td class='seat-bjp'>" + [ data[0].phulpurseats,] + "</td>"
	+ "<td class='seat-inc'>" + [ data[1].phulpurseats,] + "</td>" 
	+ "<td class='seat-sp'>" + [ data[2].phulpurseats,] + "</td>"  
	+ "</tr>";
	
	
	document.getElementById("data_araria").innerHTML = 
	"<tr>" 
	+ "<td><span class='is-bjp'>" + [ data[0].arariaparty,] + "</span></td>"
	+ "<td><span class='is-rjd'>" + [ data[1].arariaparty,] + "</span></td>"  
	//+ "<td><span class='is-ot'>" + [ data[2].arariaparty,] + "</span></td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td class='seat-bjp'>" + [ data[0].arariaseats,] + "</td>"  
	+ "<td class='seat-rjd'>" + [ data[1].arariaseats,] + "</td>"  
	//+ "<td class='seat-ot'>" + [ data[2].arariaseats,] + "</td>"  
	+ "</tr>";
	

	
	$('.scale').show();
	
	scale_gorakhpur();
	
	scale_phulpur();
	
	scale_araria();
	
}

frame_slider();

//https://stackoverflow.com/questions/22619531/create-a-percentage-with-three-numbers


	function scale_gorakhpur(){
	
		var x = parseInt($('#data_gorakhpur .seat-bjp').text());
		var y = parseInt($('#data_gorakhpur .seat-inc').text());
		var z = parseInt($('#data_gorakhpur .seat-sp').text());
		
		var total = x+y+z;
		
		
		$(".is-gorakhpur .scale .is-bjp").css('width', (x/total)*100+'%');
		$(".is-gorakhpur .scale .is-inc").css('width', (y/total)*100+'%');
		$(".is-gorakhpur .scale .is-sp").css('width', (z/total)*100+'%');	
		
	}




	function scale_phulpur(){
	
		var x = parseInt($('#data_phulpur .seat-bjp').text());
		var y = parseInt($('#data_phulpur .seat-inc').text());
		var z = parseInt($('#data_phulpur .seat-sp').text());
		
		var total = x+y+z;
		
		
		$(".is-phulpur .scale .is-bjp").css('width', (x/total)*100+'%');
		$(".is-phulpur .scale .is-inc").css('width', (y/total)*100+'%');
		$(".is-phulpur .scale .is-sp").css('width', (z/total)*100+'%');	
		
	}


	function scale_araria(){
	
		var x = parseInt($('#data_araria .seat-bjp').text());
		var y = parseInt($('#data_araria .seat-rjd').text());
		//var z = parseInt($('#data_araria .seat-ot').text());
		
		//var total = x+y+z;
		var total = x+y;
		
		
		$(".is-araria .scale .is-bjp").css('width', (x/total)*100+'%');
		$(".is-araria .scale .is-rjd").css('width', (y/total)*100+'%');	
		//$(".is-araria .scale .is-ot").css('width', (z/total)*100+'%');	
		
	}





