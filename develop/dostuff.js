//setting a date for the header/////////////////////////////////////////////////////////////////////////
let localeSettingsEl = {};
  dayjs.locale(localeSettingsEl);

function setDate(){
    let todayEl = $('#currentDay'); //Im setting the variable to the id that contains the text area
    let d = new Date(); //getting a new date here which is the current one
    let thisDate = dayjs(d).format('dddd [The] DD[th] , MMM YYYY'); //formatting the date to be text

//Setting The Current Date Into The Top Header       
todayEl.text(thisDate);

}
setDate();
/////////////////////////////////////////////////////////////////////////////////////////////////////////


let APIKey = `b063e961132d34721eb67544bf97f624`;

let searchBtn = document.querySelector("#searchBtn");
let citySearch = document.querySelector(".search");
////area down below right here gets the users current geographical location and it sets that main card to show them a default weather status of their own city
function defaultWeather(){
    const successCallback = (position) => {
        console.log(position);
        let defaultLat = position.coords.latitude;
        let defaultLon = position.coords.longitude;

        let currentUrl = "https://api.openweathermap.org/data/2.5/weather?lat="+defaultLat+"&lon="+defaultLon+"&appid="+ APIKey+"&units=imperial";


        fetch(currentUrl)
    .then(function(response){
        return response.json();
    })
    
    .then(function(data){
        console.log(data)
        let defaultCityName = data.name;
        let defaultCityTemp = Math.floor(data.main.temp);
        let defaultCityWind = Math.floor(data.wind.speed);
        let defaultCityHumidity = Math.floor(data.main.humidity);
        console.log("Current city is "+ defaultCityName);

        if(data.weather[0].main == "Rain"){
            $("#bigcard").attr("src", "/develop/images/rain.png")
        } else if (data.weather[0].main == "Clear"){
            $("#bigcard").attr("src", "/develop/images/clear.png")
        } else if (data.weather[0].main == "Mist"){
            $("#bigcard").attr("src", "/develop/images/mist.png")
        } else if (data.weather[0].main == "Snow"){
            $("#bigcard").attr("src", "/develop/images/snow.png")
        } else if (data.weather[0].main == "Clouds"){
            $("#bigcard").attr("src", "/develop/images/clouds.png")
        }

        $(".city").text(defaultCityName)
        $(".temp").text(defaultCityTemp+"°F")
        $(".wind").text(defaultCityWind+" Mph")
        $(".Humidity").text(defaultCityHumidity+"%")

    })
    
        };
          
        const errorCallback = (error) => {
        console.log(error);
        };
          
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


}


//Area below sets a on click function to happen that will change all the weather info according to what city they will type in the search////////////////
searchBtn.addEventListener("click", function(){
    let cityName = $("input").val();
    console.log(cityName);
    console.log("Getting Weather Details");

//geocoding the lat and long to just simplify it down///////////////////////////////////////////////////////
let cityNameUrl = "http://api.openweathermap.org/geo/1.0/direct?q="+ cityName +"&limit=1&appid="+ APIKey+"&units=imperial";

    fetch(cityNameUrl)
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data)
    let cityLat = data[0].lat;
    let cityLon = data[0].lon;
    console.log(cityLat);
    console.log(cityLon);
//current weather url fetch here///////////////////////////////////////////////////////////////////////////////
    let currentUrl = "https://api.openweathermap.org/data/2.5/weather?lat="+cityLat+"&lon="+cityLon+"&appid="+ APIKey+"&units=imperial";


    fetch(currentUrl)
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data);
    console.log("Current "+ cityName + " Weather" );
    let cityTemp = Math.floor(data.main.temp);
    let cityWind = Math.floor(data.wind.speed);
    let cityHumidity = Math.floor(data.main.humidity);

    $(".city").text(cityName);
    $(".temp").text(cityTemp+"°F")
    $(".wind").text(cityWind+" Mph")
    $(".Humidity").text(cityHumidity+"%")

    console.log(cityTemp + "° Farenheight");
    console.log(cityHumidity + "% Humidity");
    console.log(cityWind + " Mph Winds");

    if(data.weather[0].main == "Rain"){
        $("#bigcard").attr("src", "/develop/images/rain.png")
    } else if (data.weather[0].main == "Clear"){
        $("#bigcard").attr("src", "/develop/images/clear.png")
    } else if (data.weather[0].main == "Mist"){
        $("#bigcard").attr("src", "/develop/images/mist.png")
    } else if (data.weather[0].main == "Snow"){
        $("#bigcard").attr("src", "/develop/images/snow.png")
    } else if (data.weather[0].main == "Clouds"){
        $("#bigcard").attr("src", "/develop/images/clouds.png")
    }


//forecast url fetch is here///////////////////////////////////////////////////////////////////////////////////////
    let forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat="+cityLat+"&lon="+cityLon+"&limit=5&appid="+ APIKey+"&units=imperial";
    fetch(forecastUrl)
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data)
})
});    
})
})


addEventListener("load",function(){
    defaultWeather();
});

