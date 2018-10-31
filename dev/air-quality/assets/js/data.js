//autocomplete

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                //b.attr('data-index',"i");
                /*make the matching letters bold:*/ //console.log(i);
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);

                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    // alert(b.getAttribute('data-index'));
                    append_data(this.getAttribute('data-index'))
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
                b.setAttribute('data-index', arr[i].substr(arr[i].indexOf(' ') + 1));
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function(e) {

        closeAllLists(e.target);
    });
}

// API

var items = []
$.getJSON("https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=579b464db66ec23bdd0000013a689be75bc04fee4825558307eb7390&format=json&offset=0&limit=10000", function(data) {
    //console.log(data);
    items = data.records;
    var city_arr = [];
    for (var i = 0; i < data.records.length; i++) {
        if (data.records[i].pollutant_id == "PM2.5") city_arr.push(items[i].city + " " + items[i].station);
    }
    //console.log(city_arr);
 
    append_data ("Anand Vihar, Delhi - DPCC");
    autocomplete(document.getElementById("myInput"), city_arr);

    //console.log(items[100].city+", "+items[100].station);
});

// Add data to the table on select



function append_data(station) {

    $(".table_data").html('<tr><th>Pollutant</th><th>Avg</th><th>Min</th><th>Max</th></tr>');

    console.log(station);

    var pm_2 =[];
    var pm_10 =[];

    for (var i = 0; i < items.length; i++) {
        if (items[i].station == station) {
            // console.log(items[i]);

            // console.log(i + "|" + items[i].station + "|" + items[i].id);

            // $(".table_data").append("<li> Pollutant = " + items[i].pollutant_id + "| Avg value =" + items[i].pollutant_avg + "| Min value =" + items[i].pollutant_min + "| Max value =" + items[i].pollutant_max + "</li>");

            $(".table_data").append("<tr><td>" + items[i].pollutant_id + "</td><td>" + items[i].pollutant_avg + "</td><td>" + items[i].pollutant_min + "</td><td>" + items[i].pollutant_max + "</td></tr>");

            if (items[i].pollutant_id == "PM2.5") {
                pm_2 =items[i];
            }
            if (items[i].pollutant_id == "PM10") {
                pm_10 =items[i];
            }
        }
    }

    // Pollutant Calculate
    // console.log(pm_2.pollutant_avg);
    // console.log(pm_10.pollutant_avg);

    if(pm_10.pollutant_avg==null){
        $(".pollutant-text").text(pm_2.pollutant_id);

        $(".quality-index").text(pm_2.pollutant_avg);  
        $(".quality-load").css("transform","rotate("+pm_2.pollutant_avg/500*100*(180/100)+"deg)");

    }else if(pm_2.pollutant_avg==null){
        $(".pollutant-text").text(pm_10.pollutant_id);

        $(".quality-index").text(pm_10.pollutant_avg); 
        $(".quality-load").css("transform","rotate("+pm_10.pollutant_avg/500*100*(180/100)+"deg)");

    }else if(pm_2.pollutant_avg > pm_10.pollutant_avg){
        $(".pollutant-text").text(pm_2.pollutant_id);

        $(".quality-index").text(pm_2.pollutant_avg);
        $(".quality-load").css("transform","rotate("+pm_2.pollutant_avg/500*100*(180/100)+"deg)");

    }else{
        $(".pollutant-text").text(pm_10.pollutant_id);

        $(".quality-index").text(pm_10.pollutant_avg);
        $(".quality-load").css("transform","rotate("+pm_10.pollutant_avg/500*100*(180/100)+"deg)");
    }


    // SVG Colors
    console.log($(".quality-index-ouput").text());

    $("#impacts_bg").attr('class','quality-load');

    $("#impacts_color").attr('class','quality-index');

    $(".aqi-color").hide()

    if($(".quality-index-ouput").text() <= 50){
        console.log("-50");
        $("#impacts_bg").addClass("good");
        $("#impacts_color").addClass("good");

        $(".aqi-good").css("display","inline-block");

    }else if($(".quality-index-ouput").text() >= 51 && $(".quality-index-ouput").text() <= 100) {
        console.log("-51-100");
        $("#impacts_bg").addClass("satisfactory");
        $("#impacts_color").addClass("satisfactory");

        $(".aqi-satisfactory").css("display","inline-block");

    }else if($(".quality-index-ouput").text() >= 101 && $(".quality-index-ouput").text() <= 200) {
        console.log("-101-200");
        $("#impacts_bg").addClass("moderate");
        $("#impacts_color").addClass("moderate");

        $(".aqi-moderate").css("display","inline-block");

    }else if($(".quality-index-ouput").text() >= 201 && $(".quality-index-ouput").text() <= 300) {
        console.log("-201-300");
        $("#impacts_bg").addClass("poor");
        $("#impacts_color").addClass("poor");

        $(".aqi-poor").css("display","inline-block");

    }else if($(".quality-index-ouput").text() >= 301 && $(".quality-index-ouput").text() <= 400) {
        console.log("-301-400-ouput");
        $("#impacts_bg").addClass("very-poor");
        $("#impacts_color").addClass("very-poor");

        $(".aqi-very-poor").css("display","inline-block");

    }else if($(".quality-index-ouput").text() >= 401 && $(".quality-index-ouput").text() <= 500) {
        console.log("-401-500");
        $("#impacts_bg").addClass("severe");

        $("#impacts_color").addClass("severe");

        $(".aqi-severe").css("display","inline-block");
    }

    // City Update dynamic
    $(".data-station").html(station);


}