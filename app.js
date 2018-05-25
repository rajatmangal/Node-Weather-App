const yargs = require("yargs");
const forecast = require("./geocode/forecast.js");
var argv = yargs
            .options({
              a: {
                demand: true,
                alias: 'address',
                describe: "Address of the location",
                string: true
              }
            })
            .argv;
//console.log(argv.a);

var encodedAddress = argv.a;

forecast.getWeather(encodedAddress , (response) => {
  console.log(response);
});
