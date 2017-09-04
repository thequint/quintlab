var public_spreadsheet_bol = 'https://docs.google.com/spreadsheets/d/1NpG5t0BInwLrcPIp5i-rp05K1aDhVj21Mr5orWfGEU0/pubhtml';

var map_data;
var cur_index = 0;
var step_width = 0;
var requestId;
var play_back;
var video_end = 0;

function init() {
	Tabletop.init({
		key: public_spreadsheet_bol,
		callback: showInfo,
		simpleSheet: true
	});
}


function refresh_pie() {
	/*
	 * SVG Pie Chart Generator 
	 *
	 * Inserts a SVG pie chart inside elements with a `data-pie` attribute containing the colors and numbers. Total is generated dynamically, so the numbers do not have to be a percentage.
	 * Example: `<div data-pie="#fab484 5, #fe8e3f 3, #f96b07 3, #b45919 3, #7f4319 1"></div>`
	 */

	var template = {
		open: '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><circle id="graph" r="15.9154943092" cx="16" cy="16" transform="rotate(-90 16 16)" /><mask id="clip"><use xlink:href="#graph" fill="#FFF" /></mask></defs><g class="graph" mask="url(#clip)" stroke-width="7">',
		piece: '<use class="graph__percent graph__percent--{{num}}" xlink:href="#graph" fill="none" stroke="{{color}}" stroke-dasharray="0 {{offset}} {{percent}} 100" />',
		close: '</g></svg>'
	};
	var regex = {
		number: /([0-9]+)$/i,
		color: /(#[0-9A-Z]+)/i
	};

	function Piece(data) {
		data = data.trim();
		this.number = parseInt(data.match(regex.number));
		this.color = data.match(regex.color)[1];
	}

	Piece.prototype.render = function (total, num) {
		return template.piece
			.replace('{{num}}', num)
			.replace('{{color}}', this.color)
			.replace('{{offset}}', (this.offset / total) * 100)
			.replace('{{percent}}', (this.number / total) * 100);
	}

	function Pie(elem) {
		this.data = elem.getAttribute('data-pie').split(',');
		this.pieces = [];
		this.total = 0;

		var output = "",
			len = this.data.length,
			piece, i;

		for (i = 0; i < len; i++) {
			piece = new Piece(this.data[i]);
			piece.offset = this.total;
			this.total += piece.number;
			this.pieces.push(piece);
		}

		len = this.pieces.length;
		for (i = 0; i < len; i++) {
			output += this.pieces[i].render(this.total, i);
		}

		elem.innerHTML = template.open + output + template.close;
	}

	var pies = document.querySelectorAll('[data-pie]');

	for (i = 0; i < pies.length; i++) {
		new Pie(pies[i]);
	}

}


function refresh_popup(index) {

	$(".mapsvg-region").mousemove(function (e) {

		var state, party;
		console.log(map_data[index].Arunachal_Pradesh)
		switch ($(this).attr("class").slice($(this).attr("class").indexOf("IN-"), $(this).attr("class").indexOf("IN-") + 5)) {
			case "IN-AR":
				state = "Arunachal Pradesh";
				party = map_data[index].Arunachal_Pradesh;
				break;
			case "IN-AS":
				state = "Assam";
				party = map_data[index].Assam;
				break;
			case "IN-AP":
				state = "Andhra Pradesh";
				party = map_data[index].Andhra_Pradesh;
				break;
			case "IN-BR":
				state = "Bihar";
				party = map_data[index].Bihar;
				break;
			case "IN-CT":
				state = "Chhattisgarh";
				party = map_data[index].Chattisgarh;
				break;
			case "IN-GA":
				state = "Goa";
				party = map_data[index].Goa;
				break;
			case "IN-GJ":
				state = "Gujarat";
				party = map_data[index].Gujarat;
				break;
			case "IN-HR":
				state = "Haryana";
				party = map_data[index].Haryana;
				break;
			case "IN-HP":
				state = "Himachal Pradesh";
				party = map_data[index].Himachal_Pradesh;
				break;
			case "IN-JK":
				state = "Jammu & Kashmir";
				party = map_data[index].Jammu_Kashmir;
				break;
			case "IN-JH":
				state = "Jharkhand";
				party = map_data[index].Jharkhand;
				break;
			case "IN-KA":
				state = "Karnataka";
				party = map_data[index].Karnataka;
				break;
			case "IN-MY":
				state = "Mysore";
				party = map_data[index].Mysore;
				break;
			case "IN-KL":
				state = "Kerala";
				party = map_data[index].Kerala;
				break;
			case "IN-DL":
				state = "Delhi";
				party = map_data[index].Delhi;
				break;
			case "IN-MP":
				state = "Madhya Pradesh";
				party = map_data[index].Madhya_Pradesh;
				break;
			case "IN-MH":
				state = "Maharashtra";
				party = map_data[index].Maharashtra;
				break;
			case "IN-MN":
				state = "Manipur";
				party = map_data[index].Manipur;
				break;
			case "IN-MG":
				state = "Meghalya";
				party = map_data[index].Meghalya;
				break;
			case "IN-MZ":
				state = "Mizoram";
				party = map_data[index].Mizoram;
				break;
			case "IN-NG":
				state = "Nagaland";
				party = map_data[index].Nagaland;
				break;
			case "IN-OR":
				state = "Orissa";
				party = map_data[index].Orissa;
				break;
			case "IN-PB":
				state = "Punjab";
				party = map_data[index].Punjab;
				break;
			case "IN-PD":
				state = "Pondicherry";
				party = map_data[index].Pondhicherry;
				break;
			case "IN-RJ":
				state = "Rajasthan";
				party = map_data[index].Rajasthan;
				break;
			case "IN-SK":
				state = "Sikkim";
				party = map_data[index].Sikkim;
				break;
			case "IN-TN":
				state = "Tamil Nadu";
				party = map_data[index].Tamil_Nadi;
				break;
			case "IN-TG":
				state = "Telangana";
				party = map_data[index].Telangana;
				break;
			case "IN-TR":
				state = "Tripura";
				party = map_data[index].Tripura;
				break;
			case "IN-UT":
				state = "Uttarakhand";
				party = map_data[index].Uttarakhand;
				break;
			case "IN-UP":
				state = "Uttar Pradesh";
				party = map_data[index].Arunachal_Pradesh;
				break;
			case "IN-WB":
				state = "West Bengal";
				party = map_data[index].West_Bengal;
				break;
			case "IN-BO":
				state = "Bombay";
				party = map_data[index].Bombay;
				break;
			case "IN-AJ":
				state = "Ajmer";
				party = map_data[index].Ajmer;
				break;
			case "IN-HY":
				state = "Hyderabad";
				party = map_data[index].Hyderabad;
				break;
			case "IN-MR":
				state = "Madras";
				party = map_data[index].Madras;
				break;
			case "IN-CO":
				state = "Cochin";
				party = map_data[index].Cochin;
				break;
			case "IN-CR":
				state = "Coorg";
				party = map_data[index].Coorg;
				break;
			case "IN-MD":
				state = "Madhya Bharat";
				party = map_data[index].Madhya_Bharat;
				break;
			case "IN-VN":
				state = "Vindhya Pradesh";
				party = map_data[index].Vindhya_Pradesh;
				break;
			case "IN-BP":
				state = "Bhopal";
				party = map_data[index].Bhopal;
				break;

			default:
				break;
		}




		$(".popup h1").html(state);
		$(".popup p").html(party);
		$(".popup").css({
			"top": e.pageY + 10,
			"left": e.pageX + 10
		});

	})


	$(".graph__percent").mouseenter(function (e) {

		$(".popup").addClass("visible");
	})


	$(".graph__percent").mouseout(function (e) {

		$(".popup").removeClass("visible");
	})



	$(".pie-1 .graph__percent").mousemove(function (e) {

		var party, vote_percent;

		switch ($(this).attr("stroke")) {
			case "#3b99cd":
				party = "Congress";
				vote_percent = map_data[index].Congress_Vote_Percentage;
				break;
			case "#e27c20":
				party = "BJP";
				vote_percent = map_data[index].BJP_Vote_Percentage;
				break;
			case "#a18c8c":
				party = "Others";
				vote_percent = map_data[index].Others_Vote_Percentage;
				break;
			case "#d23737":
				party = "Janta Party";
				vote_percent = map_data[index].Janata_Vote_Percentage;
				break;
			default:
				break;
		}

		$(".popup h1").html("Vote Percentage");
		$(".popup p").html(party + "-" + vote_percent + "%");
		$(".popup").css({
			"top": e.pageY + 10,
			"left": e.pageX + 10
		});
	})

	$(".pie-2 .graph__percent").mousemove(function (e) {

		var party, seat_share;

		switch ($(this).attr("stroke")) {
			case "#3b99cd":
				party = "Congress";
				seat_share = map_data[index].Congress_LS_seats;
				break;
			case "#e27c20":
				party = "BJP";
				seat_share = map_data[index].BJP_LS_seats;
				break;
			case "#a18c8c":
				party = "Others";
				seat_share = map_data[index].Others_LS_seats;
				break;
			case "#d23737":
				party = "Janta Party";
				seat_share = map_data[index].Janata_Party_LS_Seats;
				break;
			default:
				break;
		}

		$(".popup h1").html("Seat Share");
		$(".popup p").html(party + "-" + seat_share);
		$(".popup").css({
			"top": e.pageY + 10,
			"left": e.pageX + 10
		});
	})

}

function nav_init() {
	for (var i = 0; i < map_data.length; i++) {
		$(".menu ul").append("<li><a href='javascript:void(0);'><figure><div class='list-img'><img src=" + "assets/images/pm.jpg" + " alt='pm'></div><figcaption><h3>" + map_data[i].Prime_Minister_Name + "</h3><h4>" + map_data[i].Prime_Minister_Party + "</h4><h5>" + map_data[i].Year + "</h5></figcaption></figure></a></li>")
	}



	$(".menu ul li").click(function () {

		cur_index = $(this).index();
		console.log($(this).index())
		update_data(cur_index);

		$(".menu").removeClass("menu--anim")
		setTimeout(function () {
			$(".menu").removeClass("menu--open");
		}, 250);
		nav_open = !nav_open;
	})
}

function update_data(index) {

	$(".map-img").removeClass("map-visible");

	switch (map_data[index].Year) {
		case "1952":
			$(".map-1952").addClass("map-visible");
			break;
		case "1957":
			$(".map-1957").addClass("map-visible");
			break;
		case "1962":
			$(".map-1957").addClass("map-visible");
			break;
		case "1967":
			$(".map-1967").addClass("map-visible");
			break;
		case "1971":
			$(".map-1967").addClass("map-visible");
			break;
		case "1977":
			$(".map-1977").addClass("map-visible");
			break;
		case "1980":
			$(".map-1977").addClass("map-visible");
			break;
		case "1984":
			$(".map-1977").addClass("map-visible");
			break;
		case "1989":
			$(".map-1977").addClass("map-visible");
			break;
		case "1991":
			$(".map-1977").addClass("map-visible");
			break;
		case "1996":
			$(".map-1977").addClass("map-visible");
			break;
		case "1999":
			$(".map-1977").addClass("map-visible");
			break;
		case "2004":
			$(".map-1999").addClass("map-visible");
			break;
		case "2009":
			$(".map-1999").addClass("map-visible");
			break;
		case "2014":
			$(".map-2014").addClass("map-visible");
			break;
		default:
			break;
	}



	$(".ui-widget-content .ui-state-default").html("<div class='current-year'>2009</div>");

	//console.log(map_data[index].Prime_Minister_Name);
	$(".current-year").html(map_data[index].Year);
	$(".year-right").html(map_data[map_data.length - 1].Year);
	$(".prime-minister").html(map_data[index].Prime_Minister_Name);
	$(".prime-minister-party").html(map_data[index].Prime_Minister_Party);
	$(".prime-minister-tenure").html(map_data[index].Prime_Minister_Tenure);
	$(".event-text").html(map_data[index].Major_Event);

	step_width = (map_data[index].Year - map_data[0].Year) * 100 / (map_data[map_data.length - 1].Year - map_data[0].Year);

	$(".timeline-progress").css({
		"width": step_width + "%"
	})

	$(".ui-slider-range-min").css({
		"width": step_width + "%"
	})


	$(".ui-slider-handle").css({
		"left": step_width + "%"
	})


	$(".mapsvg-region").removeClass("Congress");
	$(".mapsvg-region").removeClass("Congress_A");
	$(".mapsvg-region").removeClass("BJP");
	$(".mapsvg-region").removeClass("BJP_A");
	$(".mapsvg-region").removeClass("Janata_Party");
	$(".mapsvg-region").removeClass("Janata_Dal");



	$(".IN-AR").addClass(map_data[index].Arunachal_Pradesh);
	$(".IN-AS").addClass(map_data[index].Assam);
	$(".IN-AP").addClass(map_data[index].Andhra_Pradesh);
	$(".IN-BR").addClass(map_data[index].Bihar);
	$(".IN-CT").addClass(map_data[index].Chhattisgarh);
	$(".IN-GA").addClass(map_data[index].Goa);
	$(".IN-GJ").addClass(map_data[index].Gujarat);
	$(".IN-HR").addClass(map_data[index].Haryana);
	$(".IN-HP").addClass(map_data[index].Himachal_Pradesh);
	$(".IN-JK").addClass(map_data[index].Jammu_Kashmir);
	$(".IN-JH").addClass(map_data[index].Jharkhand);
	$(".IN-KA").addClass(map_data[index].Karnataka_Mysore);
	$(".IN-MY").addClass(map_data[index].Karnataka_Mysore);
	$(".IN-KL").addClass(map_data[index].Kerala);
	$(".IN-DL").addClass(map_data[index].Delhi);
	$(".IN-MP").addClass(map_data[index].Madhya_Pradesh);
	$(".IN-MD").addClass(map_data[index].Madras);
	$(".IN-MH").addClass(map_data[index].Maharashtra);
	$(".IN-MN").addClass(map_data[index].Manipur);
	$(".IN-MG").addClass(map_data[index].Meghalya);
	$(".IN-MZ").addClass(map_data[index].Mizoram);
	$(".IN-NG").addClass(map_data[index].Nagaland);
	$(".IN-OR").addClass(map_data[index].Orissa);
	$(".IN-PB").addClass(map_data[index].Punjab);
	$(".IN-PD").addClass(map_data[index].Pondicherry);
	$(".IN-RJ").addClass(map_data[index].Rajasthan);
	$(".IN-SK").addClass(map_data[index].Sikkim);
	$(".IN-TN").addClass(map_data[index].Tamil_Nadu);
	$(".IN-TG").addClass(map_data[index].Telangana);
	$(".IN-TR").addClass(map_data[index].Tripura);
	$(".IN-UT").addClass(map_data[index].Uttarakhand);
	$(".IN-UP").addClass(map_data[index].Uttar_Pradesh);
	$(".IN-WB").addClass(map_data[index].West_Bengal);
	$(".IN-BO").addClass(map_data[index].Bombay);
	$(".IN-AJ").addClass(map_data[index].Ajmer);
	$(".IN-HY").addClass(map_data[index].Hyderabad);
	$(".IN-MR").addClass(map_data[index].Madras);
	$(".IN-CO").addClass(map_data[index].Cochin);
	$(".IN-CR").addClass(map_data[index].Coorg);
	$(".IN-MD").addClass(map_data[index].Madhya_Bharat);
	$(".IN-VN").addClass(map_data[index].Vindhya_Pradesh);
	$(".IN-BP").addClass(map_data[index].Bhopal);

	if (map_data[index].Prime_Minister_Party == "Congress") {
		$(".timeline-elmt").removeClass("is-bjp");
		$(".timeline-elmt").removeClass("is-janata");
		$(".timeline-elmt").addClass("is-congress");
	} else if (map_data[index].Prime_Minister_Party == "BJP") {
		$(".timeline-elmt").removeClass("is-congress");
		$(".timeline-elmt").addClass("is-bjp");
		$(".timeline-elmt").removeClass("is-janata");
	} else if (map_data[index].Prime_Minister_Party == "Janata Party" || map_data[index].Prime_Minister_Party == "Janta Dal") {
		$(".timeline-elmt").removeClass("is-congress");
		$(".timeline-elmt").removeClass("is-bjp");
		$(".timeline-elmt").addClass("is-janata");
	}

	if (map_data[index].Year == "1977") {
		$(".map-index ul li.is-janata").html("Janata Party");
		$(".map-index ul li.is-janata").show()
	} else if (map_data[index].Year == "1984" || map_data[index].Year == "1989" || map_data[index].Year == "1991" || map_data[index].Year == "1996" || map_data[index].Year == "1999") {
		$(".map-index ul li.is-janata").html("Janata Dal");
		$(".map-index ul li.is-janata").show()
	} else {
		$(".map-index ul li.is-janata").hide()
	}

	console.log(map_data[index].Congress_Vote_Percentage + "|" + map_data[index].BJP_Vote_Percentage + "|" + map_data[index].Others_Vote_Percentage + "|" + map_data[index].Janata_Vote_Percentage);

	$(".pie_cont").html("<div class='pie pie-2' data-pie='#3b99cd " + map_data[index].Congress_LS_seats + ", #e27c20 " + map_data[index].BJP_LS_seats + ", #a18c8c " + map_data[index].Others_LS_seats + ",#d23737 " + map_data[index].Janata_Party_LS_Seats + "'></div><div class='pie pie-1' data-pie='#3b99cd " + map_data[index].Congress_Vote_Percentage + ", #e27c20 " + map_data[index].BJP_Vote_Percentage + ", #a18c8c " + map_data[index].Others_Vote_Percentage + ",#d23737 " + map_data[index].Janata_Vote_Percentage + "'></div>");


	refresh_pie();

	refresh_popup(index);

}


window.addEventListener('DOMContentLoaded', init);

function showInfo(data) {

	map_data = data;
	nav_init();
	update_data(cur_index);


	$(".mapsvg-region").mouseenter(function (e) {

		$(this).addClass("active");
		$(".popup").addClass("visible");
	})




	$(".mapsvg-region").mouseenter(function (e) {

		$(this).addClass("active");
		$(".popup").addClass("visible");
	})

	$(".mapsvg-region").mouseout(function (e) {

		$(this).removeClass("active");
		$(".popup").removeClass("visible");
	})



	/*
	document.getElementById("data-1").innerHTML = "<p>" +[data[0].Boletho,] +"</p>";
	
	document.getElementById("data-2").innerHTML = 
		"<p>" +[data[0].Factoid,] +"</p>" +
	    "<p>" +[data[1].Factoid,] +"</p>" +
	    "<p>" +[data[2].Factoid,] +"</p>";

	document.getElementById("data-3").innerHTML =
		"<p>" +[data[0].Khulkebol,] +"</p>" +
		"<p>" +[data[1].Khulkebol,] +"</p>" +
		"<p>" +[data[2].Khulkebol,] +"</p>" +
		"<p>" +[data[3].Khulkebol,] +"</p>";
	*/
	//document.getElementById("data-4").innerHTML = "<div>" +[data[0].section4,] +"</div>";

	//document.getElementById("data-5").innerHTML = "<div>" +[data[0].section5,] +"</div>";


}



$(".next").click(function () {
	if (cur_index < map_data.length - 1) {
		cur_index = cur_index + 1;
		update_data(cur_index);
	}
})



$(".prev").click(function () {
	if (cur_index > 0) {
		cur_index = cur_index - 1;
		update_data(cur_index);
	}
})


$(".play-pause").click(function () {

	$(".play").toggleClass("is-hide")
	$(".pause").toggleClass("is-hide")
	check_animation();

})

function check_animation() {
	if (($(".pause").hasClass('is-hide') && step_width <= 100) || ($(".pause").hasClass('is-hide') && video_end == 1)) {
		//console.log('yes')
		if (video_end == 1) {
			$(".mapsvg-region").removeClass("Congress");
			$(".mapsvg-region").removeClass("Congress_A");
			$(".mapsvg-region").removeClass("BJP");
			$(".mapsvg-region").removeClass("BJP_A");

			cur_index = 0;
			step_width = 0;
			play_back = 0;
			video_end = 0;
			update_data(cur_index);

		}

		requestId = window.requestAnimationFrame(step);
	} else {
		//	console.log('no')
		window.cancelAnimationFrame(requestId);
	}

	if (step_width >= 100 && video_end == 0) {
		$(".play").toggleClass("is-hide")
		$(".pause").toggleClass("is-hide")
		video_end = 1;


	}

}



function step() {
	step_width = step_width + 0.03;

	$(".ui-slider-horizontal .ui-slider-range-min").css({
		"width": step_width + "%"
	});
	$(".ui-slider-handle").css({
		"left": step_width + "%"
	})

	for (var i = map_data.length - 1; i > 0; i--) {

		//console.log(step_width+"|"+(map_data[i].Year-map_data[0].Year)/(map_data[map_data.length-1].Year - map_data[0].Year)*100)

		if (step_width > (map_data[i].Year - map_data[0].Year) / (map_data[map_data.length - 1].Year - map_data[0].Year) * 100) {
			//console.log(i);
			cur_index = i;
			if (play_back != cur_index) {
				console.log(cur_index);
				update_data(cur_index);
				play_back = cur_index
			}
			//update_data(cur_index);
			break;
		}

	}


	check_animation();
}