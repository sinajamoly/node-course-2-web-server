const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
      weather.getWeather(results.latitude ,results.longitude, (errorMessage, weatherResults) =>{
          if(errorMessage){
              console.log(errorMessage);
          }else{
              console.log(`it is currently ${weatherResults.temperature}. it feels like ${weatherResults.apparentTemperature}`);
          }
      });
  }
});




// 4a04d1c42fd9d32c97a2c291a32d5e2d

