<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Weather</title>
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/bottom.css">
    <script src="js/jquery-2.1.4.js"></script>
    <script src="js/jquerysession.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<header>
    <div class="input">

        <input type="text" name="city" placeholder="Another city" autocomplete="off"/>
        <input type="button" value="Submit"/>
    </div>
    <div class="current-time">
        <div class="information">
            <div id="city"></div>
            <div id="temp"></div>
            <div id="day-temp"><span id="max"></span>/<span id="min"></span></div>
            <div id="sky"></div>
            <div>Wind: <span id="wind"></span> m/s</div>

        </div>
    </div>
</header>

<div class="another-day">

    <div class="day">
        <span class="day-string"></span>
        <img src="">
        <div class="temp"><span class="temp_max"></span> <span class="temp_min"></span></div>
        <div class="wind-div">Wind:<span class="wind"></span>m/s</div>
        <div class="clouds">Clouds:<span></span>%</div>
    </div>

    
    <div class="day1">
        <span class="day-string"></span>
        <img src="">
        <div class="temp"><span class="temp_max"></span> <span class="temp_min"></span></div>
        <div class="wind-div">Wind:<span class="wind"></span>m/s</div>
        <div class="clouds">Clouds:<span></span>%</div>
    </div>

    <div class="two-day"></div>
    <div class="day2">
        <span class="day-string"></span>
        <img src="">
        <div class="temp"><span class="temp_max"></span> <span class="temp_min"></span></div>
        <div class="wind-div">Wind:<span class="wind"></span>m/s</div>
        <div class="clouds">Clouds:<span></span>%</div>
    </div>

    
    <div class="day3">
        <span class="day-string"></span>
        <img src="">
        <div class="temp"><span class="temp_max"></span> <span class="temp_min"></span></div>
        <div class="wind-div">Wind:<span class="wind"></span>m/s</div>
        <div class="clouds">Clouds:<span></span>%</div>
    </div>

    <footer>
        Designed by Slaven Mikulić

    </footer>

</div>



<script src="js/animation.js"></script>
<script src="js/another_day.js"></script>
</body>
</html>