let APIKey = "da1e61f41c58073ff7267566948f1acc";
let apiUrl = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}" + "&appid=" + APIKey;

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

fetch(apiUrl)