const weatherBtn = document.querySelector('button.get_weather');
const weather = document.querySelector('.weather-box p:last-child');

const API_KEY = '7e26b7437dae1176e459d8f7f448efae';

function geoSuccess(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = data.name;
      const mainWeather = data.weather[0].main;
      const temperature = Math.round(data.main.temp);
      const humidity = data.main.humidity;
      weather.innerText = `${city} / ${mainWeather} / ${temperature}℃ / humidity ${humidity}`;
    });
}

function paintWeather() {
  navigator.geolocation.getCurrentPosition(geoSuccess);
}

weatherBtn.addEventListener('click', paintWeather);
