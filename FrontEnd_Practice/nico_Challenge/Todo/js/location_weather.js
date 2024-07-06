const API_KEY = '7bcd362d97ee021a35032554daaeff3d'
const selectFirstWeather = document.querySelector(".select-first-locate");
const selectSecondWeather = document.querySelector(".select-second-locate");
const selectThirdWeather = document.querySelector(".select-third-locate");

const location = {
  seoul: {lat: 37.559722, lon:126.975278},
  NY: {lat: 40.7128, lon: -74.0060},
  tokyo: {lat: 35.682839, lon: 139.759455},
  london: {lat: 51.5074, lon: -0.1278},
  moskva: {lat: 55.7558, lon: 37.6176},
  beijing: {lat: 39.9042, lon: 116.4074},
  berlin: {lat: 52.5206, lon: 13.4094},
  sydney: {lat: -33.8688, lon: 151.2093},
  taipei: {lat: 25.0330, lon: 121.5654},
  paris: {lat: 48.8566, lon: 2.3522}
}

function localWeather(locationKey) {
  const location = locations[locationKey];
  if (!location) {
    console.error('Invalid location key: ', locationKey);
    return;
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`;
  
  const localWeatherTemp = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = data.main.temp;
    });

    console.log(localWeatherTemp)
}

localWeather()
