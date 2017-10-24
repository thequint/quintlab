


var city_id,city_name,city_temp,city_cond, forecasts_data;



    function get_weather(id) { // for current location
	    $.ajax({
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "callback",
            url: "http://apidev.accuweather.com/currentconditions/v1/"+id+".json?language=en&apikey=1bbb649ae0174399b320067bbc1c3aa8",
            cache: false,

            success: function (data) {
				city_temp = data[0].Temperature.Metric.Value+ "°C";
				city_cond= data[0].WeatherText;
           		console.log(city_temp,city_cond);
				append_data();
				getForecastsInfo(city_id);
				
				//white
           		
				if(city_cond=="Snow"||city_cond=="Mostly Cloudy w/ Snow")
					{
						$("body").addClass("bg-white");
					}
				
				//black
				else if(city_cond=="Mostly Cloudy"||city_cond=="Cloudy")
					{
							$("body").addClass("bg-black");	
					}
				
				//blue
				
				else if(city_cond=="Clear"||city_cond=="Mostly Clear")
					{
							$("body").addClass("bg-blue");	
					}
				
				//yellow
				else if(city_cond=="Sunny"||city_cond=="Mostly Sunny")
					{
							$("body").addClass("bg-yellow");	
					}
				
            }
      	});	
    }


   
    function getCityInfoByLatLong(x,y){ //for current location
    	$.ajax({
	        type: "GET",
	        dataType: "jsonp",
	        jsonp: "callback",
	        jsonpCallback: "callback",
	        url: "http://apidev.accuweather.com/locations/v1/cities/geoposition/search.json?q="+x+","+y+"&apikey=1bbb649ae0174399b320067bbc1c3aa8",
	        cache: false,

	        success: function (data) {
				
				city_name = data.LocalizedName;
				city_id = data.Key;
				
				get_weather(city_id);
				console.log(data);
				console.log(city_name+"|"+city_id);
				
				
				
	        }
	  	});
    }

Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};

	function getForecastsInfo(city_id){ 
		console.log(city_id);
    	$.ajax({
	        type: "GET",
	        dataType: "jsonp",
	        jsonp: "callback",
	        jsonpCallback: "callback",
	        url: "http://apidev.accuweather.com/forecasts/v1/daily/5day/"+city_id+"?apikey=1bbb649ae0174399b320067bbc1c3aa8&details=true",
	        cache: false,

	        success: function (forecast_data) {
				//console.log(forecast_data);
				//console.log(forecast_data.DailyForecasts[0].Temperature.Maximum.Value);
				$('.local-weather--left').html("<img src='assets/images/icons/"+forecast_data.DailyForecasts[0].Day.Icon+".png'>");
				for (var i=0; i<5; i++)
							{
								//console.log(d);
								
								var cur_date = new Date();
								//console.log(cur_date.addDays(i))
								
								$(".daily-weather--slider").append("<li><h4 class='daily-weather--headline'>"+weekday[cur_date.addDays(i).getDay()]+"</h4><span class='daily-weather--icon'><img src='assets/images/icons/"+forecast_data.DailyForecasts[i].Day.Icon+".png'></span><div class='daily-weather--temp'><span class='small-temp'>"+forecast_data.DailyForecasts[i].Temperature.Maximum.Value+  '°F'+"</span><span class='large-temp'>"+forecast_data.DailyForecasts[i].Temperature.Minimum.Value+ '°F'+"</span></div></li>");
								
							}
				
				
				
				
				
				
				
				
				//console.log(data.DailyForecasts[1].Temperature.Maximum.Value);
				//forecasts_data = data[0].Headline.Text;
				//console.log(forecasts_data);
	        }
	  	});
    }



	
	
	function getLatLong() // for current location
	{
		navigator.geolocation.getCurrentPosition(latlong_success);
		
		function latlong_success(pos) {
		var crd = pos.coords;

		//console.log('Your current position is:');
		//console.log(`Latitude : ${crd.latitude}`);
		//console.log(`Longitude: ${crd.longitude}`);
		getCityInfoByLatLong(crd.latitude,crd.longitude);	
	};
	}
	
	function append_data() // for current location
	{
		$("#currentLocation").html(city_name);
		$("#currentTemp").html(city_temp);
		$("#currentCond").html(city_cond);
		//$('body').addClass(city_cond);
		//$('.local-weather--left').html("<img src='assets/images/icons/"+forecast_data.DailyForecasts[0].Day.Icon+".png'>");
		
		
	}

	
	getLatLong();
	
	// current location ends

	// begin listing 

	//var city_array=["Agra","Srinagar","Delhi","kolkata","Bangalore"];
	var city_array=["Agra","Mumbai","Chennai","Kolkata","Bangalore","Lucknow","Assam","Rajasthan"];

	var city_id_array =[];
	var city_weather_array = []; // use this
	var city_list_array_count = 0;
	var id_list_array_count = 0;


	function get_weather_list(id) { // for current location
	    $.ajax({
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "callback",
            url: "http://apidev.accuweather.com/currentconditions/v1/"+id+".json?language=en&apikey=1bbb649ae0174399b320067bbc1c3aa8",
            cache: false,

            success: function (data) {
				//city_temp = data[0].Temperature.Metric.Value+ "°C";
				//city_cond= data[0].WeatherText;
				city_weather_array.push(data[0].Temperature.Metric.Value+ "°C");
				//console.log(city_weather_array);
				id_list_array_count = id_list_array_count+1;
           		//console.log("yes");
				if(id_list_array_count<city_array.length)
					{
				append_city_weather_array(id_list_array_count)
					}
				else
					{
						console.log(city_weather_array);
						// append list
						for (var i=0;i<city_array.length;i++)
							{
								$(".city_list").append("<li><span class='city_name'>"+city_array[i]+"</span><span class='city_border'></span><span class='city_temp'>"+city_weather_array[i]+"</span></li>");
								if (i==city_array.length-1){
								reset_dash();
								}
							}
					}
			
				
            }
      	});	
    }

	
   function getIdByCityName(city_name){ // For the city listing
	  // alert(city_name)
	    $.ajax({
	        type: "GET",
	        dataType: "jsonp",
	        jsonp: "callback",
	        jsonpCallback: "callback",
	        url: "http://apidev.accuweather.com/locations/v1/search?q="+city_name+",%20india&apikey=1bbb649ae0174399b320067bbc1c3aa8",
	        cache: false,

	        success: function (data) {
	            //get_weather_array(data[0].Key)
	       		//console.log(data[0].Key)
				//console.log(data[0].Key);
				city_id_array.push(data[0].Key);
				//console.log(city_id_array);
				city_list_array_count = city_list_array_count+1;
				if(city_list_array_count<city_array.length)
					{
				append_city_id_array(city_list_array_count)
					}
				else
					{
					append_city_weather_array(id_list_array_count);	
					}
	        }
	  	});
	}


function append_city_id_array(x)
{
	getIdByCityName(city_array[x]);
	
}

function append_city_weather_array(x)
{
	get_weather_list(city_id_array[x]);
	
}
append_city_id_array(city_list_array_count)






var d=new Date();

var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");

document.getElementById("toDay").innerHTML = weekday[d.getDay()];

var current_day_index = weekday.indexOf(weekday[d.getDay()]);


	

//alert(day_index);

//alert(weekday[d.getDay()]+1);





