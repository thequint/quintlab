//var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1TYaNIvwavphflUqrGqlZ7jt1JTjt-MAwwFdsEAnAinY/pubhtml';

//demo_sheet
var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/18RrUpQs43I_FfdmqUYHoocnqF8Y2Tt6FYp6D_fc7iT4/pubhtml';

function init() {
   Tabletop.init({
      key: public_spreadsheet_contact,
      callback: showInfo,
      simpleSheet: true
   });
}

window.addEventListener('DOMContentLoaded', init);

var sheet_data, sheet_data_all;
var gender_filter = "all";
var category_filter = "all";


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
   sheet_data = data;
   sheet_data_all = data;
   display_data();
   document.getElementById("countVoice").innerHTML = "<span>" + [sheet_data[0].Total_Voices] + ' Voices'+"</span>";	

}
function display_data(check_clear) {
   $("#listData").html("");
	if(check_clear==1){
		$("#KeyCandidtes").html("");
	}
	
   for (var index = sheet_data.length - 1; index >= 0; index--) {

      var cat_class;

      switch (sheet_data[index].Category) {
         case "GST":
            cat_class = "ctg-orange";
            break;
         case "Education":
            cat_class = "ctg-blue";
            break;
         case "Healthcare":
            cat_class = "ctg-turquoise";
            break;
         case "Prohibition":
            cat_class = "ctg-limegreen";
            break;
         case "Unemployment":
            cat_class = "ctg-violet";
            break;
         case "Vikas":
            cat_class = "ctg-pink";
            break;
         case "Others":
            cat_class = "ctg-red";
            break;
			  
		case "Story":
            cat_class = "ctg-story";
            break;
			  
		case "BJP":
            cat_class = "ctg-bjp";
            break;
			  
		case "INC":
            cat_class = "ctg-inc";
            break;
			  
		case "IND":
            cat_class = "ctg-ind";
            break;		  

         default:
            cat_class = "";


      }
	   
	   if(cat_class=="ctg-bjp" || cat_class=="ctg-inc" || cat_class=="ctg-ind" ){
	   $("#KeyCandidtes").append("<li class='" + cat_class + " key-cand'><figure class='chat-el'><div class='show-el'><div class='profile-img'><img src='" + sheet_data[index].Profile_Image + "' alt='" + sheet_data[index].Name + "'></div><div class='msg'><div class='msg-text'><blockquote>" + sheet_data[index].Sub_Headline + "</blockquote><a class='btn-more' alt='Gujarat election 2017 - " + sheet_data[index].Alt_Tag + "' href='javascript:void(0);'>Read More</a></div></div></div><div class='hide-el'><div class='frame-video' data-video='" + sheet_data[index].Video + "'></div><div class='personal-details'><h4><label>Name: </label>" + sheet_data[index].Name + "</h4><h4><label>Age: </label>" + sheet_data[index].Age + "</h4><h4><label>Location: </label>" + sheet_data[index].Location + "</h4><p>" + sheet_data[index].Description + "</p></div></div></figure></li>");
	   }
	   
  
	   else if(cat_class=="ctg-story"){
			  $("#listData").append("<li class='" + cat_class + "'><p><a href='"+ sheet_data[index].Story_URL +"' target='_blank'><span>" + sheet_data[index].Description + "</span></a></p></li>"); 
		   }
	   
	   else{
	   $("#listData").append("<li class='" + cat_class + "'><figure class='chat-el'><div class='show-el'><div class='profile-img'><img src='" + sheet_data[index].Profile_Image + "' alt='" + sheet_data[index].Name + "'></div><div class='msg'><div class='msg-text'><blockquote>" + sheet_data[index].Sub_Headline + "</blockquote><a class='btn-more' alt='Gujarat election 2017 - " + sheet_data[index].Alt_Tag + "' href='javascript:void(0);'>Read More</a></div></div></div><div class='hide-el'><div class='frame-video' data-video='" + sheet_data[index].Video + "'></div><div class='personal-details'><h4><label>Name: </label>" + sheet_data[index].Name + "</h4><h4><label>Age: </label>" + sheet_data[index].Age + "</h4><h4><label>Location: </label>" + sheet_data[index].Location + "</h4><p>" + sheet_data[index].Description + "</p></div></div></figure></li>");
	   }
   }
   moreData();
}


$(".filter-block .options li").click(function() {

   sheet_data = []

   if ($(this).hasClass("is-active")) {
      category_filter = "all";
      $(".filter-block .options li").removeClass("is-active");
      $(this).removeClass("is-active");
      $(".clear-filter").removeClass("is-filter");
   } else {
      category_filter = $(this).attr("data-category");
      $(".filter-block .options li").removeClass("is-active");
      $(this).addClass("is-active");
      $(".clear-filter").addClass("is-filter");
   }


   for (var index = 0; index <= sheet_data_all.length - 1; index++) {

      if ((sheet_data_all[index].Category == category_filter || category_filter == "all") && ((gender_filter == "all") || gender_filter == sheet_data_all[index].Sex)) {
         sheet_data.push(sheet_data_all[index]);
      }
   }
   display_data();
});


$(".filter-block .gender li.gender-item").click(function() {

   if ($(this).hasClass("is-active")) {
      gender_filter = "all";
      $(".filter-block .gender li.gender-item").removeClass("is-active");
      $(this).removeClass("is-active");
      $(".clear-filter").removeClass("is-filter");

   } else {
      $(".filter-block .gender li.gender-item").removeClass("is-active");
      $(this).addClass("is-active");
      gender_filter = $(this).attr("data-gender");
      $(".clear-filter").addClass("is-filter");
   }
   sheet_data = []
   for (var index = 0; index <= sheet_data_all.length - 1; index++) {

      if ((sheet_data_all[index].Category == category_filter || category_filter == "all") && ((gender_filter == "all") || gender_filter == sheet_data_all[index].Sex)) {
         sheet_data.push(sheet_data_all[index]);
      }

   }
   display_data();

});


$(".clear-filter").click(function() {
   sheet_data = sheet_data_all;
   gender_filter = "all";
   category_filter = "all";
   display_data(1);
   $(".filter-block .gender li.gender-item").removeClass("is-active");
   $(this).removeClass("is-filter");
   $(".filter-block .options li").removeClass("is-active");
});

