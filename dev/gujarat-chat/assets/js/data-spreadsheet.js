var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1TYaNIvwavphflUqrGqlZ7jt1JTjt-MAwwFdsEAnAinY/pubhtml';
	
function init(){
	Tabletop.init({
		key: public_spreadsheet_contact,
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

	// Popup Data
	sheet_data = data[getParameterByName('id')];

	//console.log(sheet_data);

	//console.log(sheet_data.Popup_video);

	/*$("#popup_data .headline_txt").html(sheet_data.Headline_txt);
    $("#popup_data .sub_headline").html(sheet_data.Sub_headline);
    $("#popup_data .sub_headline_2").html(sheet_data.Sub_headline_2);
    $("#popup_data .description").html(sheet_data.Description);

    $("#popup_data .popup-media").html("<iframe width='560' height='315' src='https://www.youtube.com/embed/"+sheet_data.Popup_video+"?autoplay=1' frameborder='0' allowfullscreen></iframe>");
*/
    // Grids data
	$("#total_length").html(data.length);
	for(var index = data.length-1; index >= 0; index--) {
		
		
		
		
		// console.log(data[index].Headline_txt);
		// console.log(data);
		
		
		var cat_class;

		switch(data[index].Category) {
		    case "caste":
		       cat_class="ctg-orange";
		        break;
		    case "religion":
		        cat_class="ctg-blue";
		        break;
		    case "business":
		        cat_class="ctg-turquoise";
		        break;
		    case "profession":
		        cat_class="ctg-limegreen";
		        break;
		    case "amenities":
		        cat_class="ctg-red";
		        break;

		    default:
		        cat_class="";
		}

		
		
		if ($('body').hasClass('grid-list')) {
			
			$("#grid").append("<li class='"+cat_class +"'><a href='play-list.html'><figure><div class='list-img placeholder'><img class='img-small' data-large='"+data[index].Profile_Image +"' src='assets/images/placeholder.jpg' alt='"+data[index].Profile_Image+"'></div><figcaption>"+data[index].Sub_Headline+"</figcaption></figure></a></li>"),
				
			new AnimOnScroll( document.getElementById( 'grid' ),{
				minDuration : 0.4,
				maxDuration : 0.7,
				viewportFactor : 0.2
			},);
			
			
			// src="assets/images/small/bol-logo.png" data-large="assets/images/bol-logo.png"
			
		} 
		
		else if ($('body').hasClass('grid-details')) {
			
			//alert();
			
			$('#playList').append("<li class='list "+cat_class+"'><h3 class='quote'>"+data[index].Sub_Headline+"</h3><div class='frame-video'><iframe src='https://www.youtube.com/embed/"+data[index].Video+"' frameborder='0' allowfullscreen></iframe></div><div class='personal-details'><h4><label>Name: </label>"+data[index].Name+"</h4><h5><label>Age: </label>"+data[index].Age+"</h5><h6><label>Location: </label>"+data[index].Location+"</h6><p>"+data[index].Description+"</p></div><div class='collection-stories'><h2>MORE FROM THE QUINT</h2><ul><li><a href='#'>I Was Beaten & Locked up for Covering Kathputli Colony Demolition</a></li><li><a href='#' target='_blank'>I Was Beaten & Locked up for Covering Kathputli Colony Demolition</a></li></ul></div></li>");
		}
		
		
	}
	
	/*var check=0;
	
	$("#grid li a").mouseover(function(){
				if(check==0)
					{
				$(this).find(".list-img").append("<div id='bars'><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div><div class='bar'><div class='bar-inner'></div></div></div>");
						
						check=1;
					}
		
//		var radius = $(this).find(".list-img img").width()/2-20;
		
		var radius = 110;
		//alert(radius);
var bar_number = $(".bar").length;



$(".bar").each(function(index){
  console.log(index*360/bar_number);
  $(this).css({
   "bottom":Math.cos(index*360/bar_number* Math.PI / 180)*radius, "left":Math.sin(index*360/bar_number* Math.PI / 180)*radius, "transform":"rotate("+index*360/bar_number+"deg)"});
    
   $(this).find(".bar-inner").css({"animation-delay":Math.floor((Math.random() *433) + 1)+"ms"});

})
		
	})
		$("#grid li ").mouseout(function(){
				
				//$(this).find("#bars").remove();
	})*/
		
		
		setTimeout(function(){
			
			lazy_load_image();
			
		},4000)
}


/*

*/


