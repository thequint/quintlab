var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1TYaNIvwavphflUqrGqlZ7jt1JTjt-MAwwFdsEAnAinY/pubhtml';

function init() {
   Tabletop.init({
      key: public_spreadsheet_contact,
      callback: showInfo,
      simpleSheet: true
   });
}

window.addEventListener('DOMContentLoaded', init);

var sheet_data, sheet_data_all;

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
	//console.log(sheet_data);
	 display_data();

	
	//$( "#demo" ).customScroll({ scrollbarWidth: 5 });
}


function display_data()
{
	
	  $("#listData").html("");
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
		case "Religion":
            cat_class = "ctg-pink";
            break;
		case "Others":
            cat_class = "ctg-red";
            break;	  

         default:
            cat_class = "";
			  
			  
      }
	 
	   $("#listData").append("<li class='"+cat_class+"'><figure class='chat-el'><div class='show-el'><div class='profile-img'><img src='"+sheet_data[index].Profile_Image+"' alt='"+sheet_data[index].Name+"'></div><div class='msg'><div class='msg-text'><blockquote>"+ sheet_data[index].Sub_Headline +"</blockquote><a class='btn-more' href='javascript:void(0);'>Read More</a></div></div></div><div class='hide-el'><div class='frame-video'><iframe src='https://www.youtube.com/embed/"+sheet_data[index].Video+"' frameborder='0' allowfullscreen></iframe></div><div class='personal-details'><h4><label>Name: </label>"+sheet_data[index].Name+"</h4><h4><label>Age: </label>"+sheet_data[index].Age+"</h4><h4><label>Location: </label>"+sheet_data[index].Location+"</h4><p>"+sheet_data[index].Description+"</p></div></div></figure></li>");
	     
   }
	moreData();
}


$(".filter-block .options li").click(function(){
	
	sheet_data=[]
	$(".filter-block .options li").removeClass("is-active");
	$(this).addClass("is-active");
	for (var index = sheet_data_all.length - 1; index >= 0; index--) {
		
		if(sheet_data_all[index].Category==$(this).attr("data-category"))
			{
			sheet_data.push(sheet_data_all[index]);	
			}
		
//		console.log(sheet_data_all[index].Category);
	}
console.log(sheet_data);	
	display_data();
	//alert($(this).attr("data-category"));
})