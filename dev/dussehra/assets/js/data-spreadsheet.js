var public_spreadsheet_bol = 'https://docs.google.com/spreadsheets/d/1U0lzu5bm8YL2BVbiLfApbZTgKSo90ShbiHu6w4J06DU/pubhtml';



var speed = 0.5;
var level = 1;
var tile_number = 2;
var count = 0;
var pos_arr = [-10, -150];
var score = 0;
var news_data;
var random_array=[];
var news_count=0;
var lives=3;
var isMobile=0;
var category_array=[];
var gameReq;
var fire_sound;
var laugh_sound;
var demo_count=2;
var left_switch=0;

function create_smoke()
{
	var canvas = document.createElement('canvas');
var w = canvas.width = 800,
    h = canvas.height = 600;
var c = canvas.getContext('2d');

var img = new Image();
img.src = 'http://oi41.tinypic.com/4i2aso.jpg';

var position = {x : w/2, y : h/2};

document.body.appendChild(canvas);

var particles = [];
var random = function(min, max){
  return Math.random()*(max-min)*min;
};

canvas.onmousemove = function(e){
  position.x = e.offsetX;
  position.y = e.offsetY;
};
function Particle(x, y){
  this.x = x;
  this.y = y;
  this.velY = -2;
  this.velX = (random(1, 10)-5)/10;
  this.size = random(3, 5)/10;
  this.alpha = 1;
  this.update = function(){
    this.y += this.velY;
    this.x += this.velX;
    this.velY *= 0.99;
    if(this.alpha < 0)
      this.alpha = 0;
    c.globalAlpha = this.alpha;
    c.save();
    c.translate(this.x, this.y);
    c.scale(this.size, this.size);
    c.drawImage(img, -img.width/2, -img.height/2);
    c.restore();
    this.alpha *= 0.96;
    this.size += 0.02;//
  };
}

var draw = function(){
  var p = new Particle(position.x, position.y);
  particles.push(p);
  
  while(particles.length > 500) particles.shift();
  
  c.globalAlpha = 1;
  c.fillStyle = '#000';
  c.fillRect(0,0,w,h);
  
  for(var i = 0; i < particles.length; i++)
  {
    particles[i].update();
  }
};

setInterval(draw, 1000/60);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function create_news() {
	
	if(left_switch==0)
		{
	var left = Math.floor((Math.random() * (window.innerWidth/2 - 300)) + 1);
			left_switch=1;
		}
	else{
	var left =Math.floor((Math.random() * (window.innerWidth/2-300)) + window.innerWidth/2);
			left_switch=0;
		
	}
	console.log("left"+"|"+window.innerWidth+"|"+left);
	$("#news-list").append("<li class='demo' data-news="+news_data[random_array[news_count]].data+" style='left:" + left + "px'><figure><img src='https://www.thequint.com/quintlab/aaj-ka-raavan/media/"+news_data[random_array[news_count]].Image +"'><figcaption><h1>" + news_data[random_array[news_count]].News + "</h1><h2>Data-" + news_data[random_array[news_count]].data + "</h2></figcaption></figure><div class='demo_msg hvr-bob'>Evil news to be destroyed</div></li>");
	news_count++
	
}

function destroy_heads(value)
{
	
	for(var i=0; i<category_array.length;i++)
		{
			if(value==category_array[i])
				{
					category_array.splice(i, 1);
					break;
				}
		}
	
	if(category_array.indexOf(value)==-1)
		{
			console.log("value"+value);
			var head_index = value-1;
			
			$("#ravana-heads li").eq(value-1).find(".img-dead").addClass("visible");
			setTimeout(function(){ $("#ravana-heads li").eq(value-1).find(".img-dead").removeClass("visible");
								 $("#ravana-heads li").eq(head_index).css("opacity",0);
								 }, 1000);
			
			//$("#ravana-heads li").eq(head_index).css("opacity",0);
			var swipe_audioElement_click;
   swipe_audioElement_click = document.createElement('audio');
   swipe_audioElement_click.setAttribute('src', 'assets/sound/death.mp3');
 //  swipe_audioElement_click.play();
	
		}
	else
		{
			var swipe_audioElement_click;
   swipe_audioElement_click = document.createElement('audio');
   swipe_audioElement_click.setAttribute('src', 'assets/sound/punch.mp3');
  // swipe_audioElement_click.play();
			console.log("value"+value);
			$("#ravana-heads li").eq(value-1).find(".img-punch").addClass("visible");
			setTimeout(function(){ $("#ravana-heads li").eq(value-1).find(".img-punch").removeClass("visible"); }, 3000);
		}
}

function update_score() {
	$("#score").html("Score :"+ score);
}
function update_lives()
{
	
	
	
	$("#lives").html("Lives :"+ lives);
	
	if(lives==2)
		{
			$(".lives li").eq(0).hide();
		}
	if(lives==1)
		{
			$(".lives li").eq(1).hide();
		}
	if(lives==0)
		{
			$(".lives li").eq(2).hide();
			//alert("game over");
			cancelAnimationFrame(gameReq);
			$("#end_screen").show();
			// show game over screen
		}
}

function update_news(i) {
	
	
	if(left_switch==0)
		{
	var left = Math.floor((Math.random() * (window.innerWidth/2 - 300)) + 1);
			left_switch=1;
		}
	else{
	var left =Math.floor((Math.random() * (window.innerWidth/2-300)) + window.innerWidth/2);
			left_switch=0;
		
	}
	console.log("news_count"+ "|"+news_count+"|"+ news_data[random_array[news_count]].Image );
	$("#news-list li").eq(i).html("<figure><img src='https://www.thequint.com/quintlab/aaj-ka-raavan/media/"+news_data[random_array[news_count]].Image +"'><figcaption><h1>" + news_data[random_array[news_count]].News + "</h1><h2>Data-" + news_data[random_array[news_count]].data + "</h2></figcaption></figure>");
	$("#news-list li").eq(i).css("left", left)
	$("#news-list li").eq(i).attr("data-news",  news_data[random_array[news_count]].data )
	//button_click_handler();
	news_count++
	
}



function button_click_handler()
{
	
$("#ravana-heads li").mouseover(function () {
	
	
 fire_sound = document.createElement('audio');
   fire_sound.setAttribute('src', 'assets/sound/fire.mp3');
   //fire_sound.play();
});
	
	
$("#ravana-heads li").click(function () {
	
	if($(this).hasClass("demo_show"))
		{
	$(this).removeClass("demo_show");	
			
			if(demo_count>1)
		{
			$(".news-items li:nth-child(2)").each(function(){
		
		console.log("boxes"+$(this).attr("data-news"));
	
	$(".footer-wrapper ul li").eq($(this).attr("data-news")-1).addClass("demo_show");
	});
			demo_count=demo_count-1;
		}
	else
		{
		$(".footer-wrapper ul li").removeClass("demo_fade");
		$(".footer-wrapper ul li").removeClass("demo_show");
		$("#news-list li").removeClass("demo");
			$(".start_msg").addClass("anim");
		}
	
		}
	
	
	
	
	
	
	var head_id = $(this)

	$("#news-list li").each(function () {
		//console.log($(this).attr("data-news") +"|"+ head_id.attr("data-head"));
		if ($(this).attr("data-news") == head_id.attr("data-head")) {
			destroy_heads($(this).attr("data-news"));
		
		
   
		
		
			if(news_count<news_data.length)
				{
			pos_arr[$(this).index()] = -200;
			$(this).css("transform", "translate3d(1px," + pos_arr[$(this).index()] + "px,0)");
			update_news($(this).index());
				}
			else{
				$(this).hide();
				
			}
			score = score + 10;
			update_score();
		}
	});
	console.log(category_array.length)
	if(category_array.length==0)
		{
		//	alert("game won")
			$("#won_screen").show();
		}


	//alert(head_id.data("head"));
})

	
}


function init() {
	Tabletop.init({
		key: public_spreadsheet_bol,
		callback: showInfo,
		simpleSheet: true
	});
	
	if(window.innerWidth<960)
		{
			init_mobile();
		}
}

function init_mobile()
{
	isMobile =1;
}




window.addEventListener('DOMContentLoaded', init);

function play_evil()
{
   laugh_sound = document.createElement('audio');
   laugh_sound.setAttribute('src', 'assets/sound/evil.mp3');
   // laugh_sound.play();
	setInterval(function(){ 
	 
		//laugh_sound.play();
	
	}, 55000);
	
}

function blink_random_ravana()

{
	setInterval(function(){ 
	 
		var randomHead = Math.floor((Math.random() * 9));
		
		console.log(randomHead);
		
		$("#ravana-heads li").eq(randomHead).find(".img-blink").addClass("visible");
			setTimeout(function(){ $("#ravana-heads li").eq(randomHead).find(".img-blink").removeClass("visible"); }, 200);
	
		
	}, 300);
	
	
	setInterval(function(){ 
	 
		var randomHead_2 = Math.floor((Math.random() * 9));
		
		
		
		$("#ravana-heads li").eq(randomHead_2).find(".img-mad").addClass("visible");
			setTimeout(function(){ $("#ravana-heads li").eq(randomHead_2).find(".img-mad").removeClass("visible"); }, 500);
	
		
	}, 5000);
	
	
}

function showInfo(data) {
	
	
  
	play_evil();
	blink_random_ravana();
	news_data = data;
	$("#loading_text").hide();
	$("#start_btn").addClass("visible");
	//console.log(data);
	//push the element at 5 in the end
	
	for (var i=0;i<news_data.length;i++)
		{
		random_array.push(i);
		category_array.push(news_data[i].data)	
		}
	console.log("1 |"+random_array);
	random_array=shuffle(random_array);
	console.log("2 |"+random_array);
	
	for (var i=0;i<random_array.length;i++)
		{
			//console.log(news_data[random_array[i]].data);
			if(news_data[random_array[i]].data=="5")
				{
					var x=random_array[i];
					console.log("i"+i);
					random_array.splice(i,1);
					random_array.push(x);
					break;
				}
		}
	console.log(random_array);
	
	
	//console.log(news_data);
	//console.log(random_array);
	
	
	// end making 5 come in the end
	
	for (var i = 0; i < tile_number; i++) {
		create_news();
	}
	button_click_handler();
	update_score();
	update_lives();
	


	function news_loop() {

		level = level + 0.0005;
		count = count + 1;



		for (var i = 0; i < pos_arr.length; i++) {
			pos_arr[i] = pos_arr[i] + speed * level;
			if (pos_arr[i] > window.innerHeight + 200) {
				if(news_count<news_data.length)
				{
			pos_arr[i] = -300;
			update_news(i);
					if(demo_count==0)
						{
					lives=lives-1
						}
					$(".black-bg").addClass("black-anim");
					setTimeout(function(){ $(".black-bg").removeClass("black-anim"); }, 2000);
				update_lives();
					
							if(demo_count>1)
		{
			$(".footer-wrapper ul li").removeClass("demo_show");
			$(".news-items li:nth-child(2)").each(function(){
		
		console.log("boxes"+$(this).attr("data-news"));
	
	$(".footer-wrapper ul li").eq($(this).attr("data-news")-1).addClass("demo_show");
	});
			demo_count=demo_count-1;
		}
	else
		{
		$(".footer-wrapper ul li").removeClass("demo_fade");
		$(".footer-wrapper ul li").removeClass("demo_show");
			$(".start_msg").addClass("anim");
		$("#news-list li").removeClass("demo");	
			demo_count=0;
		}
	
				
				}
				
				
			}

		}

		$("#news-list li").each(function (index) {
			$(this).css("transform", "translate3d(1px," + pos_arr[index] + "px,0)");
		})

		gameReq = requestAnimationFrame(news_loop);
		
	}
//	gameReq = requestAnimationFrame(news_loop);
$("#start_btn").click(function(){
	
	$(".footer-wrapper ul li").addClass("demo_fade");
	
	$("#start_screen").hide();
	gameReq = requestAnimationFrame(news_loop);
	
	$(".news-items li:nth-child(1)").each(function(){
		
		console.log("boxes"+$(this).attr("data-news"));
	
	$(".footer-wrapper ul li").eq($(this).attr("data-news")-1).addClass("demo_show");
	});
})



}


$(".restart_btn").click(function(){
	
	location.reload();
})

