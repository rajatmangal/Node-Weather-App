const request = require("request");

var geoCodeAddress = (encodedAddress , callback) => {
  request({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + encodedAddress,
    json: true
  }, (error,response,body) => {
    if(error) {
      callback("Unable to connect to google servers");
    } else if(body.status === "ZERO_RESULTS") {
      callback("Unable to find the address");
    } else if(body.status === "OK") {
      callback(undefined , {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      })
    } else {
      callback("Something's wrong");
    }
  })
}


module.exports = {
  geoCodeAddress
}
