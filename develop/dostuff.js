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
    console.log("Current "+ cityName + " Weather" )
    let cityTemp = Math.floor(data.main.temp);
    let cityHum = Math.floor(data.main.humidity);
    let cityWind = Math.floor(data.wind.speed);
    console.log(cityTemp + "° Farenheight");
    console.log(cityHum + "% Humidity");
    console.log(cityWind + " Mph Winds");

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