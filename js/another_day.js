/**
 * Created by slave on 12/29/2015.
 */
$(document).ready(function(){
    $('.another-day').hide();

    var day = new Date().getDay();

    day_array = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


    if(day + 1 > 6){
        $(".day > .day-string").text(day_array[day + 1 - 7]);

    }else{
        $(".day > .day-string").text(day_array[day + 1]);
    }
    if(day + 2 > 6){
        $(".day1 > .day-string").text(day_array[day + 2 - 7]);

    }else{
        $(".day1 > .day-string").text(day_array[day + 2]);
    }

    if(day + 3 > 6){
        $(".day2 > .day-string").text(day_array[day + 3 - 7]);
    }else{
        $(".day2 > .day-string").text(day_array[day + 3]);
    }
    if(day + 4 > 6) {
        $(".day3 > .day-string").text(day_array[day + 4 - 7]);

    }else{
        $(".day3 > .day-string").text(day_array[day + 4]);
    }







    //Ako imam moju lokaciju
    var c = function(pos) {
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;
        //document.getElementById('id01').innerHTML = lat + ',' + lon;
        $.getJSON('http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=ed3b2ffb6d44110442af8178d2cbd095', tempNow);
    };
    navigator.geolocation.getCurrentPosition(c,deny);


    // If reject location show weather in Podgorica
    function deny(error){
        if(error.code === error.PERMISSION_DENIED) {
            $.getJSON('http://api.openweathermap.org/data/2.5/forecast?q=Podgorica,us&appid=ed3b2ffb6d44110442af8178d2cbd095', tempNow);

        }
    }


    //If press enter
    $(".input input[type='text']").keypress(function(e){
        if(e.which === 13){

            var name = $(".input input[type='text']").val();

            $.getJSON('http://api.openweathermap.org/data/2.5/forecast?q=' + name + ',us&appid=ed3b2ffb6d44110442af8178d2cbd095',tempNow);
        }
    });

    //If press submit
    $(".input input[type='button']").click(function(){
        var anotherDay = $(".another-day");
        anotherDay.fadeOut(150);
        var name = $(".input input[type='text']").val();

        $.getJSON('http://api.openweathermap.org/data/2.5/forecast?q=' + name + ',us&appid=ed3b2ffb6d44110442af8178d2cbd095',tempNow);
        anotherDay.fadeIn("slow");

    });


    //Before all
    $.getJSON('http://api.openweathermap.org/data/2.5/forecast?q=Podgorica&appid=ed3b2ffb6d44110442af8178d2cbd095', tempNow);




    function tempNow(result){
        var temp = result.list[0].main.temp_min;
        var temp_min = Math.round(temp - 273.15);

        var day = result.list[0].main.temp_max;
        var temp_max = Math.round(day - 273.15);

        var weather = result.list[0].weather[0].main;
        var wind    = result.list[0].wind.speed;
        var clouds  = result.list[0].clouds.all;
        if(weather === "Clear"){
            $('.day > img').attr('src','images/sun-icon-min.png');
        }else if(weather === 'Clouds'){
            $('.day > img').attr('src','images/clouds-icon-min.png');
        }
        else if(weather === 'Snow'){
            $('.day > img').attr('src','images/snow-icon-min.png');
        }else if(weather === 'Rain'){
            $('.day > img').attr('src', 'images/rain-icon-min.png');
        }

        $('.day  .temp_max').text(temp_max);
        $('.day  .temp_min').text(temp_min);
        $('.day .wind').text(wind);
        $('.day > .clouds > span').text(clouds);



        var temp2 = result.list[1].main.temp_min;
        var temp_min2 = Math.round(temp2 - 273.15);

        var day2 = result.list[1].main.temp_max;
        var temp_max2 = Math.round(day2 - 273.15);

        var weather2 = result.list[1].weather[0].main;
        var wind2    = result.list[1].wind.speed;
        var clouds2  = result.list[1].clouds.all;
        if(weather2 === "Clear"){
            $('.day1 > img').attr('src','images/sun-icon-min.png');
        }else if(weather2 === 'Clouds'){
            $('.day1 > img').attr('src','images/clouds-icon-min.png');
        }
        else if(weather2 === 'Snow'){
            $('.day1 > img').attr('src','images/snow-icon-min.png');
        }else if(weather2 === 'Rain'){
            $('.day1 > img').attr('src', 'images/rain-icon-min.png');
        }

        $('.day1  .temp_max').text(temp_max2);
        $('.day1  .temp_min').text(temp_min2);
        $('.day1 .wind').text(wind2);
        $('.day1 > .clouds > span').text(clouds2);



        var temp3 = result.list[2].main.temp_min;
        var temp_min3 = Math.round(temp3 - 273.15);

        var day3 = result.list[2].main.temp_max;
        var temp_max3 = Math.round(day3 - 273.15);

        var weather3 = result.list[2].weather[0].main;
        var wind3    = result.list[2].wind.speed;
        var clouds3  = result.list[2].clouds.all;
        if(weather3 === "Clear"){
            $('.day2 > img').attr('src','images/sun-icon-min.png');
        }else if(weather3 === 'Clouds'){
            $('.day2 > img').attr('src','images/clouds-icon-min.png');
        }else if(weather3 === 'Snow'){
            $('.day2 > img').attr('src','images/snow-icon-min.png');
        }else if(weather3 === 'Rain'){
            $('.day2 > img').attr('src', 'images/rain-icon-min.png');
        }

        $('.day2  .temp_max').text(temp_max3);
        $('.day2  .temp_min').text(temp_min3);
        $('.day2 .wind').text(wind3);
        $('.day2 > .clouds > span').text(clouds3);





        var temp4 = result.list[3].main.temp_min;
        var temp_min4 = Math.round(temp4 - 273.15);

        var day4 = result.list[3].main.temp_max;
        var temp_max4 = Math.round(day4 - 273.15);

        var weather4 = result.list[3].weather[0].main;
        var wind4    = result.list[3].wind.speed;
        var clouds4  = result.list[3].clouds.all;
        if(weather4 === "Clear"){
            $('.day3 > img').attr('src','images/sun-icon-min.png');
        }else if(weather4 === 'Clouds'){
            $('.day3 > img').attr('src','images/clouds-icon-min.png');
        }else if(weather4 === 'Snow'){
            $('.day3 > img').attr('src','images/snow-icon-min.png');
        }else if(weather4 === 'Rain'){
            $('.day3 > img').attr('src', 'images/rain-icon-min.png');
        }

        $('.day3  .temp_max').text(temp_max4);
        $('.day3  .temp_min').text(temp_min4);
        $('.day3 .wind').text(wind4);
        $('.day3 > .clouds > span').text(clouds4);
    }







    $('.another-day').fadeIn(4000);
});