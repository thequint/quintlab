var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1TYaNIvwavphflUqrGqlZ7jt1JTjt-MAwwFdsEAnAinY/pubhtml';

function init() {
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
	
	 

   for (var index = data.length - 1; index >= 0; index--) {

      var cat_class;

      switch (data[index].Category) {
         case "caste":
            cat_class = "ctg-orange";
            break;
         case "religion":
            cat_class = "ctg-blue";
            break;
         case "business":
            cat_class = "ctg-turquoise";
            break;
         case "profession":
            cat_class = "ctg-limegreen";
            break;
         case "amenities":
            cat_class = "ctg-red";
            break;

         default:
            cat_class = "";
			  
			  
      }
	   
	   $("#listData").append("<li class='"+cat_class+"'><figure class='chat-el'><div class='show-el'><div class='profile-img'><img src='" + data[index].Profile_Image + "'></div><div class='msg'><div class='msg-text'><blockquote>"+ data[index].Sub_Headline +"</blockquote><a class='btn-more' href='javascript:void(0);'>Read More</a></div></div></div><div class='hide-el'><div class='frame-video'><iframe src='https://www.youtube.com/embed/"+data[index].Video+"' frameborder='0' allowfullscreen></iframe></div><div class='personal-details'><h4><label>Name: </label>"+data[index].Name+"</h4><h4><label>Age: </label>"+data[index].Age+"</h4><h4><label>Location: </label>"+data[index].Location+"</h4><p>"+data[index].Description+"</p></div></div></figure></li>");
	   
	  
	     
   }
	moreData();
}