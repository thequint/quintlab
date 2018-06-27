var public_spreadsheet = 'https://docs.google.com/spreadsheets/d/18XqcAgVcxw6_4IL76qYjHuwt3lfq2Q9rBDDHYDd6esY/pubhtml';

function init() {
	Tabletop.init({
		key: public_spreadsheet,
		callback: showInfo,
		simpleSheet: true
	});
}

window.addEventListener('DOMContentLoaded', init);
var sheet_data;

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function showInfo(data) {
	"use strict";
	sheet_data = data;
	display_data();
	update_group("A");
}


function update_group(x) {
	var group_array = []
	for (var i = 0; i < sheet_data.length; i++) {
		if (sheet_data[i].Group == x) {
			group_array.push(sheet_data[i]);

		}
	}

	group_array.sort(function (a, b) {
		return a.Points - b.Points
	});
	group_array.reverse();
	//console.log(group_array);

	$(".point-table tbody").html('');
	for (var i = 0; i < group_array.length; i++) {
		$(".point-table tbody").append('<tr><td>' + group_array[i].Country + '</td><td>' + group_array[i].Wins + '</td><td>' + group_array[i].Draw + '</td><td>' + group_array[i].Points + '</td><td>' + group_array[i].Loss + '</td><td>' + group_array[i].Goal_Difference + '</td></tr>');
	}
	
			/*var time= 500;
			
			$('.point-table tbody tr').each(function(index) {
			var this_p = $(this);	
			setTimeout( function(){ this_p.addClass('position_visible'); }, time);
      		time += 500;
				
			});*/
	
	
	
	
}

function display_data() {
	"use strict";

	// Previous matches

	$('.previous-mathes ul.team-details').append('<li><div class="single-group"><div class="team-name">' + sheet_data[0].Previous_1A + '</div><div class="team-point">' + sheet_data[1].Previous_1A + '</div></div><div class="single-group"><div class="team-name">' + sheet_data[0].Previous_1B + '</div><div class="team-point">' + sheet_data[1].Previous_1B + '</div></div></li><li><div class="single-group"><div class="team-name">' + sheet_data[0].Previous_2A + '</div><div class="team-point">' + sheet_data[1].Previous_2A + '</div></div><div class="single-group"><div class="team-name">' + sheet_data[0].Previous_2B + '</div><div class="team-point">' + sheet_data[1].Previous_2B + '</div></div></li>');


	// Upcoming matches

	$('.upcoming-mathes ul.team-details').append('<li><div class="team-name">' + sheet_data[0].Upcoming_1A + '</div><div class="vs">VS</div><div class="team-name">' + sheet_data[0].Upcoming_1B + '</div></li><li><div class="team-name">' + sheet_data[0].Upcoming_2A + '</div><div class="vs">VS</div><div class="team-name">' + sheet_data[0].Upcoming_2B + '</div></li>');
	
	
	// Previous and Upcoming matches for Cube
	
	$('.data-views').append('<li class="is-previous"><div class="single-content"><h3>Previously</h3><div class="team-detail"><div class="team-name">' + sheet_data[0].Previous_1A + ' <span>' + sheet_data[1].Previous_1A + '</span></div><div class="vs">VS</div><div class="team-name">' + sheet_data[0].Previous_1B + '<span>' + sheet_data[1].Previous_1B + '</span></div></div></div></li><li class="is-previous"><div class="single-content"><h3>Previously</h3><div class="team-detail"><div class="team-name">' + sheet_data[0].Previous_2A + '<span>' + sheet_data[1].Previous_2A + '</span></div><div class="vs">VS</div><div class="team-name">' + sheet_data[0].Previous_2B + '<span>' + sheet_data[1].Previous_2B + '</span></div></div></div></li><li class="is-upcoming"><div class="single-content"><h3>Up Next</h3><div class="team-detail"><div class="team-name">' + sheet_data[0].Upcoming_1A + '</div><div class="vs">VS</div><div class="team-name">' + sheet_data[0].Upcoming_1B + '</div></div></div></li><li class="is-upcoming"><div class="single-content"><h3>Up Next</h3><div class="team-detail"><div class="team-name">' + sheet_data[0].Upcoming_2A + '</div><div class="vs">VS</div><div class="team-name">' + sheet_data[0].Upcoming_2B + '</div></div></div></li>');
	
}

var current_score=0;

 setInterval(function(){ 
	 if(current_score==3)
		 {
			 current_score=0;
		 }
	 else{
	 current_score=current_score+1;
	 }
	 setTimeout(function(){
	 $(".data-views li").hide();
	 $(".data-views li").eq(current_score).show();

}, 1000);
	  		//console.log(current_score);

 
 }, 6000);




	$('.close-modal').click(function(){
	$('.cube_cont').remove();
	//console.log('hi');
});

