var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1SugZ2oqmcPKbTyQ-2nN5OIH3xG4ZaYUBcmLtbKqgJts/pubhtml';
	
function init(){
	Tabletop.init({
		key: public_spreadsheet_contact,
		callback: showInfo,
		simpleSheet: true 
	});
}

// WOW animation JS 
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);

wow.init();

$("#shop_now").click(function() {
    $('html, body').animate({
        scrollTop: $(".item-head").offset().top
    }, 1000);
});

// Share Icon
$(".share-ico").click(function(e){
    $(".social-ico").slideToggle(400);
    return false;
});
$("body").click(function(){
    $(".social-ico").slideUp();
});

// Logo Slider
$(document).ready(function() {
    $('.logo-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        arrows: true,
        responsive: [{
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


// 
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function cart_quantity_selction() {
    $('.plus').on('click',function(){
    	var $qty=$(this).closest('p').find('.qty');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
        if ($('body').hasClass('product-cart')) {
        update_cart_value();
    }
    });
    $('.minus').on('click',function(){
        var $qty=$(this).closest('p').find('.qty');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $qty.val(currentVal - 1);
        }
        if ($('body').hasClass('product-cart')) {
	        update_cart_value();
	    }
    });
}

function update_cart_value(){ // used only in cart page

	var q_item_array=[];
	var q_item_sum =0;
	var grand_total=0;
	$('.cart-item').each(function(i){
		q_item_sum =  q_item_sum	+ parseInt($(this).find(".qty").val());
		console.log($(this).find(".qty").val());
		q_item_array.push($(this).find(".qty").val());
		$(this).find(".sub-total").html(parseInt($(this).find(".qty").val())*parseInt($(this).find(".product_cart_price").html()));
		grand_total = grand_total +parseInt( $(this).find(".sub-total").html());
		
	});

	$(".grand-total").text(grand_total);

	console.log(grand_total);

	$("#header-cart-q .header-cart-item").text(q_item_sum);

	var cid_item = getParameterByName('cid');
	$(".home_url").attr("href","index.html?cid="+cid_item+"&q="+q_item_array);
	$("#header-cart-q").attr("href","carts.html?cid="+cid_item+"&q="+q_item_array); // go to cart page
}



window.addEventListener('DOMContentLoaded', init);

function showInfo(data) {
	if ($('body').hasClass('home')) { // only runs when in home page

		var id_item = getParameterByName('id');
		var id_item_data = data[id_item];
		//console.log(id_item);

		var cid_item = getParameterByName('cid');
		console.log(cid_item);

		var q_item = getParameterByName('q');
		//console.log(q_item);


		if(q_item==null){
			$("#header-cart-q .header-cart-item").text(0);
			$("#header-cart-q").attr("href","carts.html"); // go to cart page

			$(".home_url").attr("href","index.html"); // back to home page
		}else {
			var q_item_array = q_item.split(",").map(Number);
			console.log(q_item_array);

			var q_item_sum = q_item_array.reduce(function(q_item_array, b) { return q_item_array + b; }, 0);
			console.log(q_item_sum);

			$("#header-cart-q .header-cart-item").text(q_item_sum);
			$("#header-cart-q").attr("href","carts.html?cid="+cid_item+"&q="+q_item); // go to cart page

			$(".home_url").attr("href","index.html?cid="+cid_item+"&q="+q_item); // back to home page
		}

		// $(".home_url").attr("href","index.html?cid="+cid_item+"&q="+q_item); // back to home page

		// sheet data
		$("#total_length").html(data.length);
		for(var index = data.length-1; index >= 0; index--) {
			if(cid_item==null || q_item==null){
				$("#product_show").append (

					"<li class='wow fadeInUp'>"
						+ "<figure>"
							+ "<a href='details.html?id=" +index +"'>"
								+ "<span class='item-list--item-img'><img src="+'assets/products/home/'+data[index].Product_image +'.jpg'+"></span>"
								+ "<figcaption>"
									+ "<h4 class='item-list--item-name'>" +data[index].Product_title +"</h4>"
									+ "<h5 class='item-list--item-tagline'>" +data[index].Product_tagline +"</h5>"
									+ "<div class='item-list--item-price'><span>Rs.</span>" +data[index].Product_price +"</div>"
									+ "<div class='item-list--rating'>"
										+ "<span class=''></span>"
										+ "<span class=''></span>"
										+ "<span class=''></span>"
										+ "<span class=''></span>"
										+ "<span class=''></span>"
									+ "</div>"
								+ "</figcaption>"
							+ "</a>"
						+ "</figure>"
					+ "</li>"
				)
			}else {
				$("#product_show").append (

					"<li class='wow fadeInUp'>"
						+ "<figure>"
							+ "<a href='details.html?id=" +index +"&cid="+cid_item +"&q="+q_item +"'>"
								+ "<span class='item-list--item-img'><img src="+'assets/products/home/'+data[index].Product_image +'.jpg'+"></span>"
								+ "<figcaption>"
									+ "<h4 class='item-list--item-name'>" +data[index].Product_title +"</h4>"
									+ "<h5 class='item-list--item-tagline'>" +data[index].Product_tagline +"</h5>"
									+ "<div class='item-list--item-price'><span>Rs.</span>" +data[index].Product_price +"</div>"
									+ "<div class='item-list--rating'>"
										+ "<span class=''></span>"
										+ "<span class=''></span>"
										+ "<span class=''></span>"
										+ "<span class=''></span>"
										+ "<span class=''></span>"
									+ "</div>"
								+ "</figcaption>"
							+ "</a>"
						+ "</figure>"
					+ "</li>"
				)
			}

			for (var j=0;j<data[index].Product_rating;j++) {
				//console.log(j+"|"+index);	
				$("#product_show li:last-child .item-list--rating span").eq(j).addClass("active");
			}
			
		}
	}



	// Details Page

	if ($('body').hasClass('product-details')) { // only runs when in detail page

		//var id_item = data[getParameterByName('id')];
		var id_item = getParameterByName('id');
		var id_item_data = data[id_item];
		//console.log(id_item_data);

		var cid_item = getParameterByName('cid');
		//console.log(cid_item);

		var q_item = getParameterByName('q');
		//console.log(q_item);

		if(q_item==null){ // Increase the cart item
			$("#header-cart-q .header-cart-item").text(0);
			$("#header-cart-q").attr("href","carts.html"); // go to cart page

			$(".home_url").attr("href","index.html"); // back to home page

		}else {
			var q_item_array = q_item.split(",").map(Number);
			//console.log(q_item_array);

			var q_item_sum = q_item_array.reduce(function(q_item_array, b) { return q_item_array + b; }, 0); // sum q_item value
			//console.log(q_item_sum);

			$("#header-cart-q .header-cart-item").text(q_item_sum);
			$("#header-cart-q").attr("href","carts.html?cid="+cid_item+"&q="+q_item); // go to cart page

			$(".home_url").attr("href","index.html?cid="+cid_item+"&q="+q_item); // back to home page
		}

		

		//var cid_item_array=cid_item;

				
		
		// AddToCart BTN
		$("#AddToCart").click(function(){ // AddToCart BTN 

			setTimeout(function(){
				if(cid_item!=null) { // to check if its the first entry in the cart
					var cid_item_array = cid_item.split(",");
				}

				console.log(id_item +"|"+cid_item_array+"|"+jQuery.inArray(id_item, cid_item_array));


				if(jQuery.inArray(id_item, cid_item_array) !== -1){ // to check if product added already exists in the cart
		            console.log("yes");

		            $(".home_url").attr("href","index.html?cid="+cid_item+"&q="+q_item); // back to home page
			    	$("#quick-cart-pay").attr("href","carts.html?cid="+cid_item+"&q="+q_item); // go to cart page

			    	var q_item_sum =parseInt($("#header-cart-q .header-cart-item").text())+parseInt($(".count").html());
			    	$("#header-cart-q .header-cart-item").text(q_item_sum );
					$("#header-cart-q").attr("href","carts.html?cid="+cid_item+"&q="+q_item); // go to cart page

		        }else { // if item does not exist in the cart 
		        	if(cid_item==null) {
						q_item = $('.count').text();	
					} else {
						cid_item=cid_item+","+id_item;	
						q_item = q_item+","+$('.count').text();
					}

			    	$(".home_url").attr("href","index.html?cid="+id_item+"&q="+q_item); // back to home page

			    	$("#quick-cart-pay").attr("href","carts.html?cid="+id_item+"&q="+q_item); // go to cart page

			    	var q_item_sum =parseInt($("#header-cart-q .header-cart-item").text())+parseInt($(".count").html());
			    	$("#header-cart-q .header-cart-item").text(q_item_sum );
					$("#header-cart-q").attr("href","carts.html?cid="+id_item+"&q="+q_item); // go to cart page
					//cid_item = id_item;
					//id_item = getParameterByName('id');
		        }

				
		    }, 2000);

		});

		// Sheet data
		$("#product_title").html(data[id_item].Product_title);
		$("#product_tagline").html(data[id_item].Product_tagline);

	    $("#product_price").html(data[id_item].Product_price);
	    $("#product_des").html(data[id_item].Product_description);
	    //$("#productImage").css({"background-image",url})


	    $("#big-image").css("background-image","url('assets/products/large/"+data[id_item].Product_image +".jpg')");

	    $("#big-image").attr("src","'assets/products/large/"+data[id_item].Product_image +".jpg'"); // go to cart page

	    //$("#big-image").css({"background-image",data[id_item].Product_image_large})

	    // $("#Product_image_large").html (
	    // 	"<img src="+'assets/products/large/'+data[id_item].Product_image_large +'.jpg'+">"
	    // );
		
		/*
		$("#Product_review").append (
	
			"<div class='reviews--container__content'>"
                + "<div class='item-list--rating'>"
                    + "<div class='Review_rating01'>"
                        + "<span class=''></span>"
                        + "<span class=''></span>"
                        + "<span class=''></span>"
                        + "<span class=''></span>"
                        + "<span class=''></span>"
                    + "</div>"
                + "</div>"
                + "<h4 class='reviews--container__content--heading'>"
                    + "<strong class='Review_headline'>" + data[id_item].Review_headline_01 +"</strong>"
                    + "<span class='Review_date'>" + data[id_item].Review_date_01 + "</span>"
                + "</h4>"
                + "<p class='Review_description'>" + data[id_item].Review_description_01 + "</p>"
            + "</div>"
        )*/

		

		for (var j=0;j<id_item_data.Review_rating_01;j++) {
			$(".reviews--container__content .item-list--rating .Review_rating01 span").eq(j).addClass("active");
		}
	    $(".reviews--container__content .Review_headline").html(data[id_item].Review_headline_01);
	    $(".reviews--container__content .Review_date").html(data[id_item].Review_date_01);
	    $(".reviews--container__content .Review_description").html(data[id_item].Review_description_01);

	    for (var j=0;j<data[id_item].Review_rating_02;j++) {
			$(".reviews--container__content .item-list--rating .Review_rating02 span").eq(j).addClass("active");
		}
	    $(".reviews--container__content .Review_headline02").html(data[id_item].Review_headline_02);
	    $(".reviews--container__content .Review_date02").html(data[id_item].Review_date_02);
	    $(".reviews--container__content .Review_description02").html(data[id_item].Review_description_02);

	    for (var j=0;j<data[id_item].Review_rating_03;j++) {
			$(".reviews--container__content .item-list--rating .Review_rating03 span").eq(j).addClass("active");
		}
	    $(".reviews--container__content .Review_headline03").html(data[id_item].Review_headline_03);
	    $(".reviews--container__content .Review_date03").html(data[id_item].Review_date_03);
	    $(".reviews--container__content .Review_description03").html(data[id_item].Review_description_03);

	    console.log(data[id_item].Review_rating_01);
	    console.log(data[id_item].Review_rating_02);
	    console.log(data[id_item].Review_rating_03);

	    if(data[id_item].Review_rating_01=="") {
	    	$(".reviews--container__content:nth-child(2)").hide()
	    }else {
	    	$(".reviews--container__content:nth-child(2)").show()
	    }

	    if(data[id_item].Review_rating_02=="") {
	    	$(".reviews--container__content:nth-child(3)").hide()
	    }else {
	    	$(".reviews--container__content:nth-child(3)").show()
	    }

	    if(data[id_item].Review_rating_03=="") {
	    	$(".reviews--container__content:nth-child(4)").hide()
	    }else {
	    	$(".reviews--container__content:nth-child(4)").show()
	    }


	    cart_quantity_selction();

	    for(var index = data.length-1; index >= 0; index--) {

			if(id_item!=data[index].id){

				console.log(id_item +"|"+data[index].id);

				$("#recommended_item").append (
					"<li class='wow fadeIn'>"
						+ "<figure>"
							+ "<a href='details.html?id=" + index +"'>"
								+ "<span class='item-list--item-img'><img src="+'assets/products/recommended/'+data[index].Product_image +'.jpg'+"></span>"
								+ "<figcaption>"
									+ "<h4 class='item-list--item-name'>" +data[index].Product_title +"</h4>"
								+ "</figcaption>"
							+ "</a>"
						+ "</figure>"
					+ "</li>"
				)
			}else {
				$("#recommended_item").append (

				)
			}
		}


	}



	// Carts Page
	if ($('body').hasClass('product-cart')) {  // only runs when in cart page

		var cid_item = getParameterByName('cid');
		//console.log(cid_item);

		var q_item = getParameterByName('q');
		//console.log(q_item);

		if(q_item==null){
			//
		}else {
			var cid_item_array = cid_item.split(",");
			//console.log(cid_item_array);	
			//console.log(cid_item_array[0]);
			var q_item_array = q_item.split(",").map(Number);
			//console.log(q_item_array);

			var q_item_sum = q_item_array.reduce(function(q_item_array, b) { return q_item_array + b; }, 0);
			//console.log(q_item_sum);
		}

		$(".home_url").attr("href","index.html?cid="+cid_item+"&q="+q_item); // back to home page

		$("#header-cart-q").attr("href","carts.html?cid="+cid_item+"&q="+q_item); // go to cart page

	    if(q_item==null){ // Increase the cart item
			$("#header-cart-q .header-cart-item").text(0);
			$("#header-cart-q").attr("href","carts.html"); // go to cart page

			$(".home_url").attr("href","index.html"); // back to home page

		}else {
			$("#header-cart-q .header-cart-item").text(q_item_sum); // cart item quantity
			$("#header-cart-q").attr("href","carts.html?cid="+cid_item+"&q="+q_item); // go to cart page

			$(".home_url").attr("href","index.html?cid="+cid_item+"&q="+q_item); // back to home page
		}

		// 
		if(q_item==null){
			$(".cart-btn").hide();
			$("#cart_data").append (
					"<li class='cart-item clearfix'>"
	                    + "<div class='cart-item-empty'>Your Shopping Cart is Empty</div>"
	                + "</li>"
				)
		}else {
			$(".cart-btn").show();
			for(var index =0; index <=  cid_item_array.length-1; index++) {
				$("#cart_data").append (
					"<li class='cart-item clearfix'>"
	                    + "<div class='item-image'><img src="+'assets/products/home/'+ data[cid_item_array[index]].Product_image +'.jpg'+"></div>"

	                    + "<div class='item-content clearfix'>"
	                        + "<div class='item-content--left'>"
	                            + "<h2 class='item-content--left__headline'>"+ data[cid_item_array[index]].Product_title +"</h2>"
	                            + "<div class='item-content--left__price'>Rs.<strong class='product_cart_price'>"+ data[cid_item_array[index]].Product_price +"</strong> <span>aashirwads</span></div>"
	                            + "<div class='item-content--left__description'>"+ data[cid_item_array[index]].Product_description +"</div>"
	                        + "</div>"
	                        + "<div class='item-content--right'>"
	                            
	                            + "<form id='AddToCartForm'>"
	                                + "<div class='btn-and-quantity-wrap'>"
	                                    + "<div class='spinner'>"
	                                        + "<p>"
	                                            // + "<span class='btn minus'></span>"
	                                            + "<input type='text' name='quantity' value='"+ q_item_array[index] +"' class='quantity-selector qty'>"
	                                            + "<input type='hidden' name='product_id' value='2721888517'>"
	                                            + "<span class='q'>Qty.</span>"
	                                            // + "<span class='btn plus'></span>"
	                                        + "</p>"
	                                    + "</div>"
	                                + "</div>"
	                            + "</form>"
	                            + "<div class='sub-total--container'>Sub Total: <span class='sub-total'></span></div>"
	                            //+ "<div class='add-review'><a href=''>Add Review</a></div>"
	                        + "</div>"
	                    + "</div>"
	                    // + "<span class='cart-close'></span>"
	                + "</li>"
				)
			}
		}

		// cart item quantity 
		var grand_total=0;

		$('.cart-item').each(function(i){ // multiply cart item quantity and price
			$(this).find(".sub-total").html(parseInt($(this).find(".qty").val())*parseInt($(this).find(".product_cart_price").html()));
			grand_total = grand_total +parseInt( $(this).find(".sub-total").html());
			
		});
		$(".grand-total").text(grand_total);


		// $(".cart-btn--buy-now").attr("href","thank-you.html"); // back to home page


		cart_quantity_selction();
	}
	
	$(".loader").fadeOut();
}
