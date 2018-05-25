const geocode = require("./geocode");
const request = require("request");
var getWeather = (encodedAddress , callback) => {
  geocode.geoCodeAddress(encodedAddress, (errorMessage, results) => {
    if(errorMessage) {
      console.log(errorMessage);
    } else {
      //console.log(JSON.stringify(results, undefined , 2));
      request({
        url: "https://api.darksky.net/forecast/30c74d98babf6f9e390f5405a29354f5/" + results.latitude + "," + results.longitude,
        json: true
      }, (error, response , result) => {
        if(error) {
          callback("Unable to connect to forecast.io.");
        } else if(response.statusCode === 400){
          callback("Unable to fetch error");
        }else if(response.statusCode === 200){
          callback("The Current Temperature in " + results.address + " is " + result.currently.temperature + " degrees.");
        }
      })

    }
  });
}

module.exports = {
    getWeather
}
