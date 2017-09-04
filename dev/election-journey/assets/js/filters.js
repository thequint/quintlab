   function getParameterByName(name, url) {
       if (!url) {
           url = window.location.href;
       }
       name = name.replace(/[\[\]]/g, "\\$&");
       var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
           results = regex.exec(url);
       if (!results) return null;
       if (!results[2]) return '';
       return decodeURIComponent(results[2].replace(/\+/g, " "));
   }
   var product_category = getParameterByName('category');
   var product_machine = getParameterByName('machine');
   //var product_spinning = getParameterByName('spinning');
   var product_type = getParameterByName('type');
   if (product_category == "null") {
       product_category = null;
   }
   if (product_machine == "null") {
       product_machine = null;
   }
   if (product_type == "null") {
       product_type = null;
   }
   var product_array = [];
   //console.log(product_var);
   function append_product_list() {
       for (var i = 0; i < inarco_product_data.length; i++) {
           if ((inarco_product_data[i].category == product_category && inarco_product_data[i].machine == product_machine) || (inarco_product_data[i].category == product_category && inarco_product_data[i].machine == product_machine ) || (inarco_product_data[i].category == product_category && inarco_product_data[i].machine == product_machine ) || (inarco_product_data[i].category == product_category && product_machine == null) || (product_category == null)) {
               // no type   
               if (product_type == null) {
                   product_array.push(i);
               } else if (inarco_product_data[i].type == product_type) {
                   product_array.push(i);
                  // console.log(i);
               }
           }
           //console.log(inarco_product_data[i].type+"|"+product_type);
       }
	   
	
                                  
                                
	   
	   
       //console.log(product_array);
       if (product_array.length > 0) {
           for (var i = 0; i < product_array.length; i++) {
               $(".isotope_container").append("<div class='isotope-item bottommargin_30 col-lg-3 col-md-6 col-sm-12'><div class='vertical-item gallery-item content-absolute text-center cs'><div class='item-media'><img src='images/" + inarco_product_data[product_array[i]].thumb_image + "' alt=''><a href='product.html?id=" + inarco_product_data[product_array[i]].id + "'> <div class='media-links'><div class='links-wrap'><div class='item-content'><h4 class='item-meta greylinks'>" + inarco_product_data[product_array[i]].name + "</h4><p class='image_name'>" + inarco_product_data[product_array[i]].keyspec + "</p> </div></div></div></a></div></div></div>");
           }
       } else {
           $(".isotope_container").append("Sorry! No products to display");
       }
       update_filters();
   }

   function update_filters() {
       //case 1 - all are null
	   
       if (product_category == null && product_machine == null ) {
		   
           $("#product-filter-all a").addClass("selected");
           $("#product-filter-machine").addClass("disabled");
           
           $("#product-filter-category a.sf-with-ul").removeClass("selected");
           $("#product-filter-machine a.sf-with-ul").removeClass("selected");
           $("#product-filter-spinning a.sf-with-ul").removeClass("selected");
           
           $("#product-filter-machine a.sf-with-ul").html("all machines");
		   $("#product-filter-category a.sf-with-ul").html("all categories");
          
          
       }
       //case -2 if category is not null and others are null
       if (product_category != null && product_machine == null ) {
           $("#product-filter-all a").removeClass("selected");
           $("#product-filter-category a.sf-with-ul").addClass("selected");
           $("#product-filter-category a.sf-with-ul").html(product_category);
           $("#product-filter-machine").removeClass("disabled");
           $("#product-filter-machine a.sf-with-ul").removeClass("selected");
           $("#product-filter-machine a.sf-with-ul").html("all machines");
           }
       //case -3 if category and machine is not null and others are null	
       if (product_category != null && product_machine != null) {
           $("#product-filter-all a").removeClass("selected");
           $("#product-filter-category a.sf-with-ul").addClass("selected");
           $("#product-filter-category a.sf-with-ul").html(product_category);
           $("#product-filter-machine").removeClass("disabled");
           $("#product-filter-machine a.sf-with-ul").addClass("selected");
           $("#product-filter-machine a.sf-with-ul").html(product_machine);
          
          
       }
       //case -3 if category ,machine and spinning is not null and others are null	
       if (product_category != null && product_machine != null ) {
           $("#product-filter-all a").removeClass("selected");
           $("#product-filter-category a.sf-with-ul").addClass("selected");
           $("#product-filter-category a.sf-with-ul").html(product_category);
           $("#product-filter-machine").removeClass("disabled");
           $("#product-filter-machine a.sf-with-ul").addClass("selected");
           $("#product-filter-machine a.sf-with-ul").html(product_machine);
          
       }
       // case -4 if type is not null
       if (product_type !== null) {
           $("#product-filter-all a").removeClass("selected");
           $("#product-filter-type a.sf-with-ul").addClass("selected");
           $("#product-filter-type a.sf-with-ul").html(product_type);
       }
       if (product_type == null) {
           $("#product-filter-type a.sf-with-ul").removeClass("selected");
           $("#product-filter-type a.sf-with-ul").html("all types");
       }
   }
   append_product_list();
   $("#product-filter-all").click(function () {
       $(".isotope_container").html("");
       product_category = null
       product_machine = null
       
       product_type = null
       product_array = [];
       window.history.pushState("object or string", "Title", "products.html");
       append_product_list();
       $(".isotope_container").addClass("auto-height");
   })
   $("#product-filter-category li a").click(function () {
    //   console.log($(this).attr("data-cat-filter"));
       $(".isotope_container").html("");
	   if($(this).attr("data-cat-filter")=="null")
	   {
	   product_category = null; 		   
	   }
	   else
	   {
       product_category = $(this).attr("data-cat-filter");
	   }
	   product_machine = null
       
       product_type = product_type
       product_array = [];
       window.history.pushState("object or string", "Title", "products.html?category=" + product_category + "&machine=" + product_machine +  "&type=" + product_type);
       append_product_list();
       $(".isotope_container").addClass("auto-height");
   });
   $("#product-filter-machine li a").click(function () {
     //  console.log($(this).attr("data-cat-filter"));
       $(".isotope_container").html("");
       product_category = product_category;
	    if($(this).attr("data-cat-filter")=="null")
	   {
	   product_machine = null; 		   
	   }
	   else
	   {
       product_machine = $(this).attr("data-cat-filter");
	   }
       //product_machine = $(this).attr("data-cat-filter")
       
       product_type = product_type
       product_array = [];
       window.history.pushState("object or string", "Title", "products.html?category=" + product_category + "&machine=" + product_machine +  "&type=" + product_type);
       append_product_list();
       $(".isotope_container").addClass("auto-height");
   });
   
   $("#product-filter-type li a").click(function () {
      // console.log($(this).attr("data-cat-filter"));
       $(".isotope_container").html("");
       product_category = product_category;
       product_machine = product_machine
       
        if($(this).attr("data-cat-filter")=="null")
	   {
	   product_type = null; 		   
	   }
	   else
	   {
       product_type = $(this).attr("data-cat-filter");
	   }
       product_array = [];
       window.history.pushState("object or string", "Title", "products.html?category=" + product_category + "&machine=" + product_machine +  "&type=" + product_type);
       append_product_list();
       $(".isotope_container").addClass("auto-height");
   });
