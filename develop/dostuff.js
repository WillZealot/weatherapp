//setting a date for the header/////////////////////////////////////////////////////////////////////////
let localeSettingsEl = {};
  dayjs.locale(localeSettingsEl);

function setDate(){
    let todayEl = $('#currentDay'); //Im setting the letiable to the id that contains the text area
    let d = new Date(); //getting a new date here which is the current one
    let thisDate = dayjs(d).format('dddd [The] DD[th] , MMM YYYY'); //formatting the date to be text

//Setting The Current Date Into The Top Header       
todayEl.text(thisDate);

}
// Set the current date in the header
setDate();
/////////////////////////////////////////////////////////////////////////////////////////////////////////
let recentList = $("#recentlySearchedList");

let APIKey = `b063e961132d34721eb67544bf97f624`;

let searchBtn = document.querySelector("#searchBtn");
let citySearch = document.querySelector(".search");

// Function to display default weather based on the user's current location
function defaultWeather(){
    const successCallback = (position) => {
        let defaultLat = position.coords.latitude;
        let defaultLon = position.coords.longitude;
// Fetch the current weather data for the default location
        let currentUrl = "https://api.openweathermap.org/data/2.5/weather?lat="+defaultLat+"&lon="+defaultLon+"&appid="+ APIKey+"&units=imperial";

// Fetch the current weather data
        fetch(currentUrl)
    .then(function(response){
        return response.json();
    })
    
    .then(function(data){
// Extract the necessary weather information
        let defaultCityName = data.name;
        let defaultCityTemp = Math.floor(data.main.temp);
        let defaultCityWind = Math.floor(data.wind.speed);
        let defaultCityHumidity = Math.floor(data.main.humidity);

        // Set the weather icon based on the weather condition
            if(data.weather[0].main == "Rain"){
                $("#bigcard").attr("src", "./develop/images/rain.png")
            } else if (data.weather[0].main == "Clear"){
                $("#bigcard").attr("src", "./develop/images/clear.png")
            } else if (data.weather[0].main == "Mist"){
                $("#bigcard").attr("src", "./develop/images/mist.png")
            } else if (data.weather[0].main == "Snow"){
                $("#bigcard").attr("src", "./develop/images/snow.png")
            } else if (data.weather[0].main == "Clouds"){
                $("#bigcard").attr("src", "./develop/images/clouds.png")
            } else {
                return;
            }
        // Update the weather information in the UI
        $(".city").text(defaultCityName)
        $(".temp").text(defaultCityTemp+"°F")
        $(".wind").text(defaultCityWind+" Mph")
        $(".Humidity").text(defaultCityHumidity+"%")

    })
 // Fetch the forecast weather data for the default location   
    let forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat="+defaultLat+"&lon="+defaultLon+"&limit=5&appid="+ APIKey+"&units=imperial";
    fetch(forecastUrl)
.then(function(response){
    return response.json();
})
///////////////////////////////////////Current City Forecast details Are below////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
.then(function(data){
  // Extract and display the forecast details for each day

    let dayOne = data.list[1];
    let dayOneDate = dayOne.dt_txt.split(' ')[0];
    let dayOneTemp = Math.floor(dayOne.main.temp);
    let dayOneHumidity = Math.floor(dayOne.main.humidity);
    let dayOneWind = Math.floor(dayOne.wind.speed);
    
    $("#forecastDateOne").text(dayOneDate);
    $("#forecastTempOne").text(dayOneTemp + " °F");
    $("#forecastHumidityOne").text(dayOneHumidity + "% Humidity");
    $("#forecastWindOne").text(dayOneWind + " MPH Wind");
    //setting weather icon looks like this
    if (dayOne.weather[0].main == "Rain") {
      $("#forecastWeatherIconOne").attr("src", "./develop/images/rain.png");
    } else if (dayOne.weather[0].main == "Clear") {
      $("#forecastWeatherIconOne").attr("src", "./develop/images/clear.png");
    } else if (dayOne.weather[0].main == "Mist") {
      $("#forecastWeatherIconOne").attr("src", "./develop/images/mist.png");
    } else if (dayOne.weather[0].main == "Snow") {
      $("#forecastWeatherIconOne").attr("src", "./develop/images/snow.png");
    } else if (dayOne.weather[0].main == "Clouds") {
      $("#forecastWeatherIconOne").attr("src", "./develop/images/clouds.png");
    }
    
    let dayTwo = data.list[9];
    let dayTwoDate = dayTwo.dt_txt.split(' ')[0];
    let dayTwoTemp = Math.floor(dayTwo.main.temp);
    let dayTwoHumidity = Math.floor(dayTwo.main.humidity);
    let dayTwoWind = Math.floor(dayTwo.wind.speed);
    
    $("#forecastDateTwo").text(dayTwoDate);
    $("#forecastTempTwo").text(dayTwoTemp + " °F");
    $("#forecastHumidityTwo").text(dayTwoHumidity + "% Humidity");
    $("#forecastWindTwo").text(dayTwoWind + " MPH Wind");
    
    if (dayTwo.weather[0].main == "Rain") {
      $("#forecastWeatherIconTwo").attr("src", "./develop/images/rain.png");
    } else if (dayTwo.weather[0].main == "Clear") {
      $("#forecastWeatherIconTwo").attr("src", "./develop/images/clear.png");
    } else if (dayTwo.weather[0].main == "Mist") {
      $("#forecastWeatherIconTwo").attr("src", "./develop/images/mist.png");
    } else if (dayTwo.weather[0].main == "Snow") {
      $("#forecastWeatherIconTwo").attr("src", "./develop/images/snow.png");
    } else if (dayTwo.weather[0].main == "Clouds") {
      $("#forecastWeatherIconTwo").attr("src", "./develop/images/clouds.png");
    }
    
    let dayThree = data.list[17];
    let dayThreeDate = dayThree.dt_txt.split(' ')[0];
    let dayThreeTemp = Math.floor(dayThree.main.temp);
    let dayThreeHumidity = Math.floor(dayThree.main.humidity);
    let dayThreeWind = Math.floor(dayThree.wind.speed);
    
    $("#forecastDateThree").text(dayThreeDate);
    $("#forecastTempThree").text(dayThreeTemp + " °F");
    $("#forecastHumidityThree").text(dayThreeHumidity + "% Humidity");
    $("#forecastWindThree").text(dayThreeWind + " MPH Wind");
    
    if (dayThree.weather[0].main == "Rain") {
      $("#forecastWeatherIconThree").attr("src", "./develop/images/rain.png");
    } else if (dayThree.weather[0].main == "Clear") {
      $("#forecastWeatherIconThree").attr("src", "./develop/images/clear.png");
    } else if (dayThree.weather[0].main == "Mist") {
      $("#forecastWeatherIconThree").attr("src", "./develop/images/mist.png");
    } else if (dayThree.weather[0].main == "Snow") {
      $("#forecastWeatherIconThree").attr("src", "./develop/images/snow.png");
    } else if (dayThree.weather[0].main == "Clouds") {
      $("#forecastWeatherIconThree").attr("src", "./develop/images/clouds.png");
    }
    
    let dayFour = data.list[25];
    let dayFourDate = dayFour.dt_txt.split(' ')[0];
    let dayFourTemp = Math.floor(dayFour.main.temp);
    let dayFourHumidity = Math.floor(dayFour.main.humidity);
    let dayFourWind = Math.floor(dayFour.wind.speed);
    
    $("#forecastDateFour").text(dayFourDate);
    $("#forecastTempFour").text(dayFourTemp + " °F");
    $("#forecastHumidityFour").text(dayFourHumidity + "% Humidity");
    $("#forecastWindFour").text(dayFourWind + " MPH Wind");
    
    if (dayFour.weather[0].main == "Rain") {
      $("#forecastWeatherIconFour").attr("src", "./develop/images/rain.png");
    } else if (dayFour.weather[0].main == "Clear") {
      $("#forecastWeatherIconFour").attr("src", "./develop/images/clear.png");
    } else if (dayFour.weather[0].main == "Mist") {
      $("#forecastWeatherIconFour").attr("src", "./develop/images/mist.png");
    } else if (dayFour.weather[0].main == "Snow") {
      $("#forecastWeatherIconFour").attr("src", "./develop/images/snow.png");
    } else if (dayFour.weather[0].main == "Clouds") {
      $("#forecastWeatherIconFour").attr("src", "./develop/images/clouds.png");
    }
    
    let dayFive = data.list[33];
    let dayFiveDate = dayFive.dt_txt.split(' ')[0];
    let dayFiveTemp = Math.floor(dayFive.main.temp);
    let dayFiveHumidity = Math.floor(dayFive.main.humidity);
    let dayFiveWind = Math.floor(dayFive.wind.speed);
    
    $("#forecastDateFive").text(dayFiveDate);
    $("#forecastTempFive").text(dayFiveTemp + " °F");
    $("#forecastHumidityFive").text(dayFiveHumidity + "% Humidity");
    $("#forecastWindFive").text(dayFiveWind + " MPH Wind");
    
    if (dayFive.weather[0].main == "Rain") {
      $("#forecastWeatherIconFive").attr("src", "./develop/images/rain.png");
    } else if (dayFive.weather[0].main == "Clear") {
      $("#forecastWeatherIconFive").attr("src", "./develop/images/clear.png");
    } else if (dayFive.weather[0].main == "Mist") {
      $("#forecastWeatherIconFive").attr("src", "./develop/images/mist.png");
    } else if (dayFive.weather[0].main == "Snow") {
      $("#forecastWeatherIconFive").attr("src", "./develop/images/snow.png");
    } else if (dayFive.weather[0].main == "Clouds") {
      $("#forecastWeatherIconFive").attr("src", "./develop/images/clouds.png");
    }

})
        };
      // Error callback for retrieving the user's current location    
        const errorCallback = (error) => {
        console.log(error);
        };
      // Retrieve the user's current location    
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


}


function getSearchCityWeather(){
    //Area below sets a on click function to happen that will change all the weather info according to what city they will type in the search////////////////
searchBtn.addEventListener("click", function(){
    let cityName = $("input").val();
    

//geocoding the lat and long to just simplify it down///////////////////////////////////////////////////////
let cityNameLINK = "https://api.openweathermap.org/geo/1.0/direct?q="+ cityName +"&limit=1&appid="+ APIKey+"&units=imperial";

    fetch(cityNameLINK)
.then(function(response){
    return response.json();
})

.then(function(data){
    let cityLat = data[0]?.lat;
    if (!cityLat) {
        alert("Please enter a valid city name.");
        return;
    }

    let cityLon = data[0]?.lon;
//current weather url fetch here///////////////////////////////////////////////////////////////////////////////
    let currentUrl = "https://api.openweathermap.org/data/2.5/weather?lat="+cityLat+"&lon="+cityLon+"&appid="+ APIKey+"&units=imperial";

    fetch(currentUrl)
.then(function(response){
    return response.json();
})

.then(function(data){
    let cityTemp = Math.floor(data.main.temp);
    let cityWind = Math.floor(data.wind.speed);
    let cityHumidity = Math.floor(data.main.humidity);

    $(".city").text(cityName);
    $(".temp").text(cityTemp+"°F");
    $(".wind").text(cityWind+" Mph");
    $(".Humidity").text(cityHumidity+"%");

    if(data.weather[0].main == "Rain"){
        $("#bigcard").attr("src", "./develop/images/rain.png")
    } else if (data.weather[0].main == "Clear"){
        $("#bigcard").attr("src", "./develop/images/clear.png")
    } else if (data.weather[0].main == "Mist"){
        $("#bigcard").attr("src", "./develop/images/mist.png")
    } else if (data.weather[0].main == "Snow"){
        $("#bigcard").attr("src", "./develop/images/snow.png")
    } else if (data.weather[0].main == "Clouds"){
        $("#bigcard").attr("src", "./develop/images/clouds.png")
    } else{
        return;
    }


//forecast url fetch is here///////////////////////////////////////////////////////////////////////////////////////
    let forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat="+cityLat+"&lon="+cityLon+"&limit=5&appid="+ APIKey+"&units=imperial";
    fetch(forecastUrl)
.then(function(response){
    return response.json();
})
////////////////////////////searched city forecast will be here////////////////////////////////////////////////////////////////////////////////
.then(function(data){

  if (cityLat) {
    let cityName = $("input").val(); // Get the input value
    
  // Check if a button with the same cityName already exists
  let existingButton = $(".city-buttons").filter(function () {
    return $(this).text() === cityName;
  });

  if (existingButton.length > 0) {
    return;
  }




    // Create a button element
    let button = $("<button></button>");
    button.text(cityName); // Set the button text to the input value
    button.click(getSearchCityWeather);
  
    // Set the ID attribute of the button
    let buttonId = "recentlySearchedButton_" + cityName;
    button.attr("id", buttonId);
  
    // Add class to the button
    button.addClass("city-buttons");
  
    // Append the button to the 'recentlySearchedList' element
    recentList.append(button);
  
    // Store button information in local storage
    let buttonsData = JSON.parse(localStorage.getItem("recentlySearchedButtons")) || [];
     // Limit the number of stored buttons to 9
    if (buttonsData.length >= 9) {
    // Remove the oldest button from both the DOM and the buttonsData array
    let oldestButtonId = buttonsData.shift().id;
      $("#" + oldestButtonId).remove();
    }

    buttonsData.push({ id: buttonId, cityName: cityName });
    localStorage.setItem("recentlySearchedButtons", JSON.stringify(buttonsData));
  }



    let dayOne = data.list[1];
    let dayOneDate = dayOne.dt_txt.split(' ')[0];
    let dayOneTemp = Math.floor(dayOne.main.temp);
    let dayOneHumidity = Math.floor(dayOne.main.humidity);
    let dayOneWind = Math.floor(dayOne.wind.speed);
    
    $("#forecastDateOne").text(dayOneDate);
    $("#forecastTempOne").text(dayOneTemp + " °F");
    $("#forecastHumidityOne").text(dayOneHumidity + "% Humidity");
    $("#forecastWindOne").text(dayOneWind + " MPH Wind");
    
    if (dayOne.weather[0].main == "Rain") {
      $("#forecastWeatherIconOne").attr("src", "./develop/images/rain.png");
    } else if (dayOne.weather[0].main == "Clear") {
      $("#forecastWeatherIconOne").attr("src", "./develop/images/clear.png");
    } else if (dayOne.weather[0].main == "Mist") {
      $("#forecastWeatherIconOne").attr("src", "./develop/images/mist.png");
    } else if (dayOne.weather[0].main == "Snow") {
      $("#forecastWeatherIconOne").attr("src", "./develop/images/snow.png");
    } else if (dayOne.weather[0].main == "Clouds") {
      $("#forecastWeatherIconOne").attr("src", "./develop/images/clouds.png");
    }
    
    let dayTwo = data.list[9];
    let dayTwoDate = dayTwo.dt_txt.split(' ')[0];
    let dayTwoTemp = Math.floor(dayTwo.main.temp);
    let dayTwoHumidity = Math.floor(dayTwo.main.humidity);
    let dayTwoWind = Math.floor(dayTwo.wind.speed);
    
    $("#forecastDateTwo").text(dayTwoDate);
    $("#forecastTempTwo").text(dayTwoTemp + " °F");
    $("#forecastHumidityTwo").text(dayTwoHumidity + "% Humidity");
    $("#forecastWindTwo").text(dayTwoWind + " MPH Wind");
    
    if (dayTwo.weather[0].main == "Rain") {
      $("#forecastWeatherIconTwo").attr("src", "./develop/images/rain.png");
    } else if (dayTwo.weather[0].main == "Clear") {
      $("#forecastWeatherIconTwo").attr("src", "./develop/images/clear.png");
    } else if (dayTwo.weather[0].main == "Mist") {
      $("#forecastWeatherIconTwo").attr("src", "./develop/images/mist.png");
    } else if (dayTwo.weather[0].main == "Snow") {
      $("#forecastWeatherIconTwo").attr("src", "./develop/images/snow.png");
    } else if (dayTwo.weather[0].main == "Clouds") {
      $("#forecastWeatherIconTwo").attr("src", "./develop/images/clouds.png");
    }
    
    let dayThree = data.list[17];
    let dayThreeDate = dayThree.dt_txt.split(' ')[0];
    let dayThreeTemp = Math.floor(dayThree.main.temp);
    let dayThreeHumidity = Math.floor(dayThree.main.humidity);
    let dayThreeWind = Math.floor(dayThree.wind.speed);
    
    $("#forecastDateThree").text(dayThreeDate);
    $("#forecastTempThree").text(dayThreeTemp + " °F");
    $("#forecastHumidityThree").text(dayThreeHumidity + "% Humidity");
    $("#forecastWindThree").text(dayThreeWind + " MPH Wind");
    
    if (dayThree.weather[0].main == "Rain") {
      $("#forecastWeatherIconThree").attr("src", "./develop/images/rain.png");
    } else if (dayThree.weather[0].main == "Clear") {
      $("#forecastWeatherIconThree").attr("src", "./develop/images/clear.png");
    } else if (dayThree.weather[0].main == "Mist") {
      $("#forecastWeatherIconThree").attr("src", "./develop/images/mist.png");
    } else if (dayThree.weather[0].main == "Snow") {
      $("#forecastWeatherIconThree").attr("src", "./develop/images/snow.png");
    } else if (dayThree.weather[0].main == "Clouds") {
      $("#forecastWeatherIconThree").attr("src", "./develop/images/clouds.png");
    }
    
    let dayFour = data.list[25];
    let dayFourDate = dayFour.dt_txt.split(' ')[0];
    let dayFourTemp = Math.floor(dayFour.main.temp);
    let dayFourHumidity = Math.floor(dayFour.main.humidity);
    let dayFourWind = Math.floor(dayFour.wind.speed);
    
    $("#forecastDateFour").text(dayFourDate);
    $("#forecastTempFour").text(dayFourTemp + " °F");
    $("#forecastHumidityFour").text(dayFourHumidity + "% Humidity");
    $("#forecastWindFour").text(dayFourWind + " MPH Wind");
    
    if (dayFour.weather[0].main == "Rain") {
      $("#forecastWeatherIconFour").attr("src", "./develop/images/rain.png");
    } else if (dayFour.weather[0].main == "Clear") {
      $("#forecastWeatherIconFour").attr("src", "./develop/images/clear.png");
    } else if (dayFour.weather[0].main == "Mist") {
      $("#forecastWeatherIconFour").attr("src", "./develop/images/mist.png");
    } else if (dayFour.weather[0].main == "Snow") {
      $("#forecastWeatherIconFour").attr("src", "./develop/images/snow.png");
    } else if (dayFour.weather[0].main == "Clouds") {
      $("#forecastWeatherIconFour").attr("src", "./develop/images/clouds.png");
    }
    
    let dayFive = data.list[33];
    let dayFiveDate = dayFive.dt_txt.split(' ')[0];
    let dayFiveTemp = Math.floor(dayFive.main.temp);
    let dayFiveHumidity = Math.floor(dayFive.main.humidity);
    let dayFiveWind = Math.floor(dayFive.wind.speed);
    
    $("#forecastDateFive").text(dayFiveDate);
    $("#forecastTempFive").text(dayFiveTemp + " °F");
    $("#forecastHumidityFive").text(dayFiveHumidity + "% Humidity");
    $("#forecastWindFive").text(dayFiveWind + " MPH Wind");
    
    if (dayFive.weather[0].main == "Rain") {
      $("#forecastWeatherIconFive").attr("src", "./develop/images/rain.png");
    } else if (dayFive.weather[0].main == "Clear") {
      $("#forecastWeatherIconFive").attr("src", "./develop/images/clear.png");
    } else if (dayFive.weather[0].main == "Mist") {
      $("#forecastWeatherIconFive").attr("src", "./develop/images/mist.png");
    } else if (dayFive.weather[0].main == "Snow") {
      $("#forecastWeatherIconFive").attr("src", "./develop/images/snow.png");
    } else if (dayFive.weather[0].main == "Clouds") {
      $("#forecastWeatherIconFive").attr("src", "./develop/images/clouds.png");
    }
})
});    
})
})
}

function displayRecents(){
  let buttonsData = JSON.parse(localStorage.getItem("recentlySearchedButtons")) || [];

// Iterate over the button data and recreate the buttons
for (let i = 0; i < buttonsData.length; i++) {
  let buttonInfo = buttonsData[i];
  let buttonId = buttonInfo.id;
  let cityName = buttonInfo.cityName;

  // Create a button element
  let button = $("<button></button>");
  button.attr("id", buttonId);
  button.text(cityName);
  button.click(getSearchCityWeather);
  button.addClass("city-buttons");

  // Append the button to the 'recentlySearchedList' element
  recentList.append(button);
}
}


function displayButtonCity() {
  $(".city-buttons").click(function() {
    let CityName = $(this).text();
    

//geocoding the name on the button
let cityNameUrl = "https://api.openweathermap.org/geo/1.0/direct?q="+ CityName +"&limit=1&appid="+ APIKey+"&units=imperial";

    fetch(cityNameUrl)
.then(function(response){
    return response.json();
})

.then(function(data){
    let cityLat = data[0]?.lat;
    if (!cityLat) {
        alert("Please enter a valid city name.");
        return;
    }

    let cityLon = data[0]?.lon;
//button press city sets the cards info
    let currentUrl = "https://api.openweathermap.org/data/2.5/weather?lat="+cityLat+"&lon="+cityLon+"&appid="+ APIKey+"&units=imperial";

    fetch(currentUrl)
.then(function(response){
    return response.json();
})

.then(function(data){
    let cityTemp = Math.floor(data.main.temp);
    let cityWind = Math.floor(data.wind.speed);
    let cityHumidity = Math.floor(data.main.humidity);

    $(".city").text(CityName);
    $(".temp").text(cityTemp+"°F");
    $(".wind").text(cityWind+" Mph");
    $(".Humidity").text(cityHumidity+"%");

    if(data.weather[0].main == "Rain"){
        $("#bigcard").attr("src", "./develop/images/rain.png")
    } else if (data.weather[0].main == "Clear"){
        $("#bigcard").attr("src", "./develop/images/clear.png")
    } else if (data.weather[0].main == "Mist"){
        $("#bigcard").attr("src", "./develop/images/mist.png")
    } else if (data.weather[0].main == "Snow"){
        $("#bigcard").attr("src", "./develop/images/snow.png")
    } else if (data.weather[0].main == "Clouds"){
        $("#bigcard").attr("src", "./develop/images/clouds.png")
    } else{
        return;
    }


//fetching info for the name on the button
    let forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat="+cityLat+"&lon="+cityLon+"&limit=5&appid="+ APIKey+"&units=imperial";
    fetch(forecastUrl)
.then(function(response){
    return response.json();
})
// button pressed weather info starts here
.then(function(data){

    let dayOne = data.list[1];
    let dayOneDate = dayOne.dt_txt.split(' ')[0];
    let dayOneTemp = Math.floor(dayOne.main.temp);
    let dayOneHumidity = Math.floor(dayOne.main.humidity);
    let dayOneWind = Math.floor(dayOne.wind.speed);
    
    $("#forecastDateOne").text(dayOneDate);
    $("#forecastTempOne").text(dayOneTemp + " °F");
    $("#forecastHumidityOne").text(dayOneHumidity + "% Humidity");
    $("#forecastWindOne").text(dayOneWind + " MPH Wind");
    
    if (dayOne.weather[0].main == "Rain") {
      $("#forecastWeatherIconOne").attr("src", "./develop/images/rain.png");
    } else if (dayOne.weather[0].main == "Clear") {
      $("#forecastWeatherIconOne").attr("src", "./develop/images/clear.png");
    } else if (dayOne.weather[0].main == "Mist") {
      $("#forecastWeatherIconOne").attr("src", "./develop/images/mist.png");
    } else if (dayOne.weather[0].main == "Snow") {
      $("#forecastWeatherIconOne").attr("src", "./develop/images/snow.png");
    } else if (dayOne.weather[0].main == "Clouds") {
      $("#forecastWeatherIconOne").attr("src", "./develop/images/clouds.png");
    }
    
    let dayTwo = data.list[9];
    let dayTwoDate = dayTwo.dt_txt.split(' ')[0];
    let dayTwoTemp = Math.floor(dayTwo.main.temp);
    let dayTwoHumidity = Math.floor(dayTwo.main.humidity);
    let dayTwoWind = Math.floor(dayTwo.wind.speed);
    
    $("#forecastDateTwo").text(dayTwoDate);
    $("#forecastTempTwo").text(dayTwoTemp + " °F");
    $("#forecastHumidityTwo").text(dayTwoHumidity + "% Humidity");
    $("#forecastWindTwo").text(dayTwoWind + " MPH Wind");
    
    if (dayTwo.weather[0].main == "Rain") {
      $("#forecastWeatherIconTwo").attr("src", "./develop/images/rain.png");
    } else if (dayTwo.weather[0].main == "Clear") {
      $("#forecastWeatherIconTwo").attr("src", "./develop/images/clear.png");
    } else if (dayTwo.weather[0].main == "Mist") {
      $("#forecastWeatherIconTwo").attr("src", "./develop/images/mist.png");
    } else if (dayTwo.weather[0].main == "Snow") {
      $("#forecastWeatherIconTwo").attr("src", "./develop/images/snow.png");
    } else if (dayTwo.weather[0].main == "Clouds") {
      $("#forecastWeatherIconTwo").attr("src", "./develop/images/clouds.png");
    }
    
    let dayThree = data.list[17];
    let dayThreeDate = dayThree.dt_txt.split(' ')[0];
    let dayThreeTemp = Math.floor(dayThree.main.temp);
    let dayThreeHumidity = Math.floor(dayThree.main.humidity);
    let dayThreeWind = Math.floor(dayThree.wind.speed);
    
    $("#forecastDateThree").text(dayThreeDate);
    $("#forecastTempThree").text(dayThreeTemp + " °F");
    $("#forecastHumidityThree").text(dayThreeHumidity + "% Humidity");
    $("#forecastWindThree").text(dayThreeWind + " MPH Wind");
    
    if (dayThree.weather[0].main == "Rain") {
      $("#forecastWeatherIconThree").attr("src", "./develop/images/rain.png");
    } else if (dayThree.weather[0].main == "Clear") {
      $("#forecastWeatherIconThree").attr("src", "./develop/images/clear.png");
    } else if (dayThree.weather[0].main == "Mist") {
      $("#forecastWeatherIconThree").attr("src", "./develop/images/mist.png");
    } else if (dayThree.weather[0].main == "Snow") {
      $("#forecastWeatherIconThree").attr("src", "./develop/images/snow.png");
    } else if (dayThree.weather[0].main == "Clouds") {
      $("#forecastWeatherIconThree").attr("src", "./develop/images/clouds.png");
    }
    
    let dayFour = data.list[25];
    let dayFourDate = dayFour.dt_txt.split(' ')[0];
    let dayFourTemp = Math.floor(dayFour.main.temp);
    let dayFourHumidity = Math.floor(dayFour.main.humidity);
    let dayFourWind = Math.floor(dayFour.wind.speed);
    
    $("#forecastDateFour").text(dayFourDate);
    $("#forecastTempFour").text(dayFourTemp + " °F");
    $("#forecastHumidityFour").text(dayFourHumidity + "% Humidity");
    $("#forecastWindFour").text(dayFourWind + " MPH Wind");
    
    if (dayFour.weather[0].main == "Rain") {
      $("#forecastWeatherIconFour").attr("src", "./develop/images/rain.png");
    } else if (dayFour.weather[0].main == "Clear") {
      $("#forecastWeatherIconFour").attr("src", "./develop/images/clear.png");
    } else if (dayFour.weather[0].main == "Mist") {
      $("#forecastWeatherIconFour").attr("src", "./develop/images/mist.png");
    } else if (dayFour.weather[0].main == "Snow") {
      $("#forecastWeatherIconFour").attr("src", "./develop/images/snow.png");
    } else if (dayFour.weather[0].main == "Clouds") {
      $("#forecastWeatherIconFour").attr("src", "./develop/images/clouds.png");
    }
    
    let dayFive = data.list[33];
    let dayFiveDate = dayFive.dt_txt.split(' ')[0];
    let dayFiveTemp = Math.floor(dayFive.main.temp);
    let dayFiveHumidity = Math.floor(dayFive.main.humidity);
    let dayFiveWind = Math.floor(dayFive.wind.speed);
    
    $("#forecastDateFive").text(dayFiveDate);
    $("#forecastTempFive").text(dayFiveTemp + " °F");
    $("#forecastHumidityFive").text(dayFiveHumidity + "% Humidity");
    $("#forecastWindFive").text(dayFiveWind + " MPH Wind");
    
    if (dayFive.weather[0].main == "Rain") {
      $("#forecastWeatherIconFive").attr("src", "./develop/images/rain.png");
    } else if (dayFive.weather[0].main == "Clear") {
      $("#forecastWeatherIconFive").attr("src", "./develop/images/clear.png");
    } else if (dayFive.weather[0].main == "Mist") {
      $("#forecastWeatherIconFive").attr("src", "./develop/images/mist.png");
    } else if (dayFive.weather[0].main == "Snow") {
      $("#forecastWeatherIconFive").attr("src", "./develop/images/snow.png");
    } else if (dayFive.weather[0].main == "Clouds") {
      $("#forecastWeatherIconFive").attr("src", "./develop/images/clouds.png");
    }
})
});    
})
})
}


window.addEventListener("load",function(){
  // Call the defaultWeather function to display default weather
    defaultWeather();
    // Call the buttons that are in storage
    displayRecents();
    // Call tht gets the weather of the city that was searched
    getSearchCityWeather();
    // Call changes the weather information to what the name is on the button
    displayButtonCity();
});




