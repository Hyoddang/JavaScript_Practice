const API_KEY = '7bcd362d97ee021a35032554daaeff3d'
const selectFirstWeather = document.querySelector(".select-first-locate");
const selectSecondWeather = document.querySelector(".select-second-locate");
const selectThirdWeather = document.querySelector(".select-third-locate");

function localWeather(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectFirstWeather.value}&appid=${API_KEY}&units=metric`;
  const weatherIcon = fetch(url)
    .then((response) => response.json())
    .then((data) => data.weather[0].main);
    const temp = fetch(url)
    .then((response) => response.json())
    .then((data) => data.main.temp);

    console.log(weatherIcon, temp)
}

localWeather()
