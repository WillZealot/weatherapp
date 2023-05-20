let APIKey = "da1e61f41c58073ff7267566948f1acc";
let apiUrl = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}" + "&appid=" + APIKey;

fetch(apiUrl)