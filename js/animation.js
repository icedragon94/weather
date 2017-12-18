/**
 * Created by slave on 12/28/2015.
 */

// If accept find location
$(document).ready(function(){
    var c = function(pos){
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;
        $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=ed3b2ffb6d44110442af8178d2cbd095', tempNow);
    };

    navigator.geolocation.getCurrentPosition(c,deny);



     //If reject to find location
    function deny(error) {
        if(error.code == error.PERMISSION_DENIED) {
            $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Podgorica&appid=ed3b2ffb6d44110442af8178d2cbd095', tempNow);
            $(".current-time").fadeIn("slow");
        }
    }



    // If press enter in input field
    $(".input input[type='text']").keypress(function(e){
        if(e.which == 13){

            $("body,.information").fadeOut(150);
            var name = $(".input input[type='text']").val();

            $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + name + '&appid=ed3b2ffb6d44110442af8178d2cbd095',tempNow);
            $("body,.information").fadeIn("slow");
        }
    });



    // If press submit
    $(".input input[type='button']").click(function(){
        var information = $(".information");
        information.fadeOut(150);
        //$(".current-time").fadeOut(150);
        var name = $(".input input[type='text']").val();

        $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + name + '&appid=ed3b2ffb6d44110442af8178d2cbd095',tempNow);
        information.fadeIn("slow");

    });


    //Before all
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Podgorica&appid=ed3b2ffb6d44110442af8178d2cbd095', tempNow);
});


function tempNow(result){
    var city    = result.name;
    var temp    = result.main.temp-273.15;
    var wind    = result.wind.speed;
    var sky     = result.weather[0].description;
    var sky_main= result.weather[0].main;
    var temp_max= result.main.temp_max-273.15;

    temp_max = Math.round(temp_max);
    var temp_min= result.main.temp_min-273.15;

    temp_min = Math.round(temp_min);
    var timeNow = new Date();
    var hours =  timeNow.getHours();


    if(hours >= 18 || hours <= 7) {
        if (sky_main === "Clear") {
            $("body").css({"background-image": "url('images/Clear-min.jpg')", "color": "white"});
        } else if (sky_main === "Rain") {
            $("body").css({"background-image": "url('images/Rainy-min.jpg')", "color": "black"});
        } else if (sky_main === 'Fog') {
            $("body").css({"background-image": "url('images/Fog-min.jpg')", "color": "black"});
        } else if (sky_main === 'Clouds') {
            $("body").css({"background-image": "url('images/Clouds-night-min.jpg')", "color": "white"});
        } else if (sky_main === 'Snow') {
            $("body").css({"background-image": "url('images/Snow-min.jpg')", "color": "black"});
        } else if (sky_main === 'Mist') {
            $("body").css({"background-image": "url('images/Mist-min.jpg')", "color": "black"});
        }
    }else{
        if (sky_main === "Clear") {
            $("body").css({"background-image": "url('images/Sun-min.jpg')", "color": "white"});
        } else if (sky_main === "Rain") {
            $("body").css({"background-image": "url('images/Rainy-min.jpg')", "color": "black"});
            $('.another-day').css({'color':'white'});
        } else if (sky_main === 'Fog') {
            $("body").css({"background-image": "url('images/Fog-min.jpg')", "color": "black"});
        } else if (sky_main === 'Clouds') {
            $("body").css({"background-image": "url('images/Clouds-day-min.jpg')", "color": "white"});
        } else if (sky_main === 'Snow') {
            $("body").css({"background-image": "url('images/Snow-min.jpg')", "color": "black"});
        } else if (sky_main === 'Mist') {
            $("body").css({"background-image": "url('images/Mist-min.jpg')", "color": "black"});
        }
    }

    //Change weather
    var country = city + ', ' + result.sys.country;
    $('title').text(country);
    temp = Math.round(temp);
    document.getElementById('city').innerHTML = city;
    document.getElementById('temp').innerHTML = temp + '&#8451<sup id="current"></sup>';
    document.getElementById('wind').innerHTML = wind;
    document.getElementById('sky').innerHTML  = sky;
    document.getElementById('max').innerHTML  = temp_max;
    document.getElementById('min').innerHTML  = temp_min;

}