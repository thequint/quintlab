var public_spreadsheet_ipl = 'https://docs.google.com/spreadsheets/d/1TNQCf3OiHuiqPCPGQo8evzm6j21k9xAvYdtqS0m9UDQ/pubhtml';
	
function init(){
Tabletop.init({
	key: public_spreadsheet_ipl,
	callback: showInfo,
	simpleSheet: true 
});
}

window.addEventListener('DOMContentLoaded', init);
function showInfo(data) {	
document.getElementById("points-table").innerHTML = 
	
// For Points Table	
"<tr>"
	+ "<td><span>" + [ data[0].team,] + "</span></td>"
	+ "<td><span>" + [ data[0].matches,] + "</span></td>"
	+ "<td><span><em>" + [ data[0].points,] + "</em></span></td>"
+"</tr>"
+"<tr>"
	+ "<td><span>" + [ data[1].team,] + "</span></td>"
	+ "<td><span>" + [ data[1].matches,] + "</span></td>"
	+ "<td><span><em>" + [ data[1].points,] + "</em></span></td>"
+"</tr>"
+"<tr>"
	+ "<td><span>" + [ data[2].team,] + "</span></td>"
	+ "<td><span>" + [ data[2].matches,] + "</span></td>"
	+ "<td><span><em>" + [ data[2].points,] + "</em></span></td>"
+"</tr>"
+"<tr>"
	+ "<td><span>" + [ data[3].team,] + "</span></td>"
	+ "<td><span>" + [ data[3].matches,] + "</span></td>"
	+ "<td><span><em>" + [ data[3].points,] + "</em></span></td>"
+"</tr>"
+"<tr>"
	+ "<td><span>" + [ data[4].team,] + "</span></td>"
	+ "<td><span>" + [ data[4].matches,] + "</span></td>"
	+ "<td><span><em>" + [ data[4].points,] + "</em></span></td>"
+"</tr>"
+"<tr>"
	+ "<td><span>" + [ data[5].team,] + "</span></td>"
	+ "<td><span>" + [ data[5].matches,] + "</span></td>"
	+ "<td><span><em>" + [ data[5].points,] + "</em></span></td>"
+"</tr>"
+"<tr>"
	+ "<td><span>" + [ data[6].team,] + "</span></td>"
	+ "<td><span>" + [ data[6].matches,] + "</span></td>"
	+ "<td><span><em>" + [ data[6].points,] + "</em></span></td>"
+"</tr>"
+"<tr>"
	+ "<td><span>" + [ data[7].team,] + "</span></td>"
	+ "<td><span>" + [ data[7].matches,] + "</span></td>"
	+ "<td><span><em>" + [ data[7].points,] + "</em></span></td>"
+"</tr>";
	
document.getElementById("top-batsman").innerHTML = 
// For Top Batsman
"<tr>"
	+ "<td>" + [ data[0].batsman,] + "</td>"
	+ "<td>" + [ data[0].runs,] + "</td>"
+"</tr>"
+"<tr>"
	+ "<td>" + [ data[1].batsman,] + "</td>"
	+ "<td>" + [ data[1].runs,] + "</td>"
+"</tr>"
+"<tr>"
	+ "<td>" + [ data[2].batsman,] + "</td>"
	+ "<td>" + [ data[2].runs,] + "</td>"
+"</tr>";

document.getElementById("top-bowler").innerHTML = 
// For Top Bowlertop-bowler
"<tr>"
	+ "<td>" + [ data[0].bowler,] + "</td>"
	+ "<td>" + [ data[0].wickets,] + "</td>"
+"</tr>"
+"<tr>"
	+ "<td>" + [ data[1].bowler,] + "</td>"
	+ "<td>" + [ data[1].wickets,] + "</td>"
+"</tr>"
+"<tr>"
	+ "<td>" + [ data[2].bowler,] + "</td>"
	+ "<td>" + [ data[2].wickets,] + "</td>"
+"</tr>";

}

