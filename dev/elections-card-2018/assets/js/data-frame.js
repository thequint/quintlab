/*
var public_spreadsheet_elections = 'https://docs.google.com/spreadsheets/d/1vK17VodrLX52mIZcx5MFoFHvHNFoJPP6-N0bfAbWSxc/pubhtml';


function init() {
    Tabletop.init({
        key: public_spreadsheet_elections,
        callback: showInfo,
        simpleSheet: true
    });
}



// window.addEventListener('DOMContentLoaded', init);

$(window).on('load', function() {
    init();
});*/

function showInfo(data) {
    document.getElementById("data_rajasthan").innerHTML =
        "<tr>" 
		+ "<td class='party-bjp'>" + [ data[0].rajasthanparty,] + "</td>" 
		+ "<td class='party-bjp'>" + [ data[0].rajasthanseats,] + "</td>"  
		+ "</tr>"
		+"<tr>" 
		+ "<td class='party-inc'>" + [ data[1].rajasthanparty,] + "</td>" 
		+ "<td class='party-inc'>" + [ data[1].rajasthanseats,] + "</td>"  
		+ "</tr>"
		+"<tr>" 
		+ "<td class='party-oth'>" + [ data[2].rajasthanparty,] + "</td>" 
		+ "<td class='party-oth'>" + [ data[2].rajasthanseats,] + "</td>"  
		+ "</tr>"
		+"<tr>" 
		+ "<td class='party-oth2'>" + [ data[3].rajasthanparty,] + "</td>" 
		+ "<td class='party-oth2'>" + [ data[3].rajasthanseats,] + "</td>"  
		+ "</tr>";


    document.getElementById("data_mizoram").innerHTML =

    	"<tr>" 
		+ "<td class='party-bjp'>" + [ data[0].mizoramparty,] + "</td>" 
		+ "<td class='party-bjp'>" + [ data[0].mizoramseats,] + "</td>"  
		+ "</tr>"

		+"<tr>" 
		+ "<td class='party-inc'>" + [ data[1].mizoramparty,] + "</td>" 
		+ "<td class='party-inc'>" + [ data[1].mizoramseats,] + "</td>"  
		+ "</tr>"

		+"<tr>" 
		+ "<td class='party-oth'>" + [ data[2].mizoramparty,] + "</td>" 
		+ "<td class='party-oth'>" + [ data[2].mizoramseats,] + "</td>"  
		+ "</tr>"

		+"<tr>" 
		+ "<td class='party-oth2'>" + [ data[3].mizoramparty,] + "</td>" 
		+ "<td class='party-oth2'>" + [ data[3].mizoramseats,] + "</td>"  
		+ "</tr>";

	document.getElementById("data_mp").innerHTML =
    	"<tr>" 
		+ "<td class='party-bjp'>" + [ data[0].mpparty,] + "</td>" 
		+ "<td class='party-bjp'>" + [ data[0].mpseats,] + "</td>"  
		+ "</tr>"
		+"<tr>" 
		+ "<td class='party-inc'>" + [ data[1].mpparty,] + "</td>" 
		+ "<td class='party-inc'>" + [ data[1].mpseats,] + "</td>"  
		+ "</tr>"
		+"<tr>" 
		+ "<td class='party-oth'>" + [ data[2].mpparty,] + "</td>" 
		+ "<td class='party-oth'>" + [ data[2].mpseats,] + "</td>"  
		+ "</tr>"
		+"<tr>" 
		+ "<td class='party-oth2'>" + [ data[3].mpparty,] + "</td>" 
		+ "<td class='party-oth2'>" + [ data[3].mpseats,] + "</td>"  
		+ "</tr>";

	document.getElementById("data_telangana").innerHTML =
    	"<tr>" 
		+ "<td class='party-bjp'>" + [ data[0].telanganaparty,] + "</td>" 
		+ "<td class='party-bjp'>" + [ data[0].telanganaseats,] + "</td>"  
		+ "</tr>"
		+"<tr>" 
		+ "<td class='party-inc'>" + [ data[1].telanganaparty,] + "</td>" 
		+ "<td class='party-inc'>" + [ data[1].telanganaseats,] + "</td>"  
		+ "</tr>"
		+"<tr>" 
		+ "<td class='party-oth'>" + [ data[2].telanganaparty,] + "</td>" 
		+ "<td class='party-oth'>" + [ data[2].telanganaseats,] + "</td>"  
		+ "</tr>"
		+"<tr>" 
		+ "<td class='party-oth2'>" + [ data[3].telanganaparty,] + "</td>" 
		+ "<td class='party-oth2'>" + [ data[3].telanganaseats,] + "</td>"  
		+ "</tr>";

	document.getElementById("data_ch").innerHTML =
    	"<tr>" 
		+ "<td class='party-bjp'>" + [ data[0].chparty,] + "</td>" 
		+ "<td class='party-bjp'>" + [ data[0].chseats,] + "</td>"  
		+ "</tr>"
		+"<tr>" 
		+ "<td class='party-inc'>" + [ data[1].chparty,] + "</td>" 
		+ "<td class='party-inc'>" + [ data[1].chseats,] + "</td>"  
		+ "</tr>"
		+"<tr>" 
		+ "<td class='party-oth'>" + [ data[2].chparty,] + "</td>" 
		+ "<td class='party-oth'>" + [ data[2].chseats,] + "</td>"  
		+ "</tr>"
		+"<tr>" 
		+ "<td class='party-oth2'>" + [ data[3].chparty,] + "</td>" 
		+ "<td  class='party-oth2'>" + [ data[3].chseats,] + "</td>"  
		+ "</tr>";

	$("#graph_data_rajasthan").attr("data-y", [data[0].rajasthanseats, ] + "," + [data[1].rajasthanseats, ] + "," + [data[2].rajasthanseats, ] + "," + [data[3].rajasthanseats, ]);

	$("#graph_data_mizoram").attr("data-y", [data[0].mizoramseats, ] + "," + [data[1].mizoramseats, ] + "," + [data[2].mizoramseats, ] + "," + [data[3].mizoramseats, ]);

	$("#graph_data_mp").attr("data-y", [data[0].mpseats, ] + "," + [data[1].mpseats, ] + "," + [data[2].mpseats, ] + "," + [data[3].mpseats, ]);

	$("#graph_data_telangana").attr("data-y", [data[0].telanganaseats, ] + "," + [data[1].telanganaseats, ] + "," + [data[2].telanganaseats, ] + "," + [data[3].telanganaseats, ]);

	$("#graph_data_ch").attr("data-y", [data[0].chseats, ] + "," + [data[1].chseats, ] + "," + [data[2].chseats, ] + "," + [data[3].chseats, ]);
    

   
    create_graph("graph_data_rajasthan");
    create_graph("graph_data_mizoram");
    create_graph("graph_data_mp");
    create_graph("graph_data_telangana");
    create_graph("graph_data_ch");
    //data-y=

    /*
    if (data[0].gujaratseats == 0 & data[1].gujaratseats == 0 & data[2].gujaratseats == 0) {
        //do nothing
        // if (window.innerWidth <= 600) {
        //     $(".gujarat-graph-data").hide();
        // }
    } else {
        create_graph("graph_data_gujarat");
    }


    if (data[0].himachalseats == 0 & data[1].himachalseats == 0 & data[2].himachalseats == 0) {
        //do nothing
        // if (window.innerWidth <= 600) {
        //     $(".himachal-graph-data").hide();
        // }
        // $(".himachal-graph-data").hide();
    } else {
        create_graph("graph_data_himachal");
    }*/

    // if (data[0].gujaratseats == 0 & data[1].gujaratseats == 0 & data[2].gujaratseats == 0 & data[0].himachalseats == 0 & data[1].himachalseats == 0 & data[2].himachalseats == 0 && window.innerWidth > 601) {
    //     $(".graph-data").hide();
    // }

}

frame_slider();