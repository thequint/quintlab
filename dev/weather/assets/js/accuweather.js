


var city_id,city_name,city_temp,city_cond, forecasts_data;

var city_array=["Leh","Srinagar"];
var city_temp_array =[]

    function get_weather(id) { // for current location
	    $.ajax({
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "callback",
            url: "http://apidev.accuweather.com/currentconditions/v1/"+id+".json?language=en&apikey=hoArfRosT1215",
            cache: false,

            success: function (data) {
				city_temp = data[0].Temperature.Metric.Value+ "°C";
				city_cond= data[0].WeatherText;
           		console.log(city_temp,city_cond);
				append_data();
           		
				
            }
      	});	
    }


   
    function getCityInfoByLatLong(x,y){ //for current location
    	$.ajax({
	        type: "GET",
	        dataType: "jsonp",
	        jsonp: "callback",
	        jsonpCallback: "callback",
	        url: "http://apidev.accuweather.com/locations/v1/cities/geoposition/search.json?q="+x+","+y+"&apikey=hoArfRosT1215",
	        cache: false,

	        success: function (data) {
				city_name = data.LocalizedName;
				city_id = data.Key;
				
				get_weather(city_id);
				//getForecastsInfo(city_id);
				console.log(city_name+"|"+city_id);
				
				
	        }
	  	});
    }

	function getForecastsInfo(city_id){ // for current location
    	$.ajax({
	        type: "GET",
	        dataType: "jsonp",
	        jsonp: "callback",
	        jsonpCallback: "callback",
	        url: "http://apidev.accuweather.com/forecasts/v1/daily/5day/"+city_id+"?apikey=hoArfRosT1215",
	        cache: false,

	        success: function (data) {
				console.log(data);
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
	}

	
	getLatLong();
	
	// current location ends

	// begin listing 



	function get_weather_array(id) { // for the city listing
		console.log("ID"+id);
	    $.ajax({
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "callback",
            url: "http://apidev.accuweather.com/currentconditions/v1/"+id+".json?language=en&apikey=hoArfRosT1215",
            cache: false,

            success: function (data) {
				
           		city_temp_array.push(data[0].Temperature.Metric.Value);
				console.log(city_temp_array);
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
	        url: "http://apidev.accuweather.com/locations/v1/search?q="+city_name+",%20india&apikey=hoArfRosT1215",
	        cache: false,

	        success: function (data) {
	      // 		get_weather_array(data[0].Key)
	       		//console.log(data[0].Key)
	        }
	  	});
	}

for(var i=0;i<city_array.length;i++)
	{
		console.log(city_array[i]);
getIdByCityName(city_array[i]);
	}



var d=new Date();

var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");

document.getElementById("toDay").innerHTML = weekday[d.getDay()];






