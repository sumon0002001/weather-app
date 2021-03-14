/* eslint no-useless-concat: "error" */
/* eslint-env es6 */

const containerForm = document.querySelector('[container-form]');
const userEntry = document.querySelector('[new-entry]');
const toggleSwitch = document.querySelector('[switch]');
const locButton = document.querySelector('[location-button]');
let input = 'Dhaka';
let searchTerm;

let getLocalTime = (data) => {
  const date = new Date();
  const time = date.getTime();
  const localOffset = date.getTimezoneOffset() * 60000;
  const utc = time + localOffset;
  const localTime = utc + 1000 * data;
  const localTimeDate = new Date(localTime);
  return localTimeDate.toLocaleString();
};

let kelvinToFahrenheit = (temp) => {
  temp = parseFloat(temp);
  temp = Math.round(((temp = temp - 273.15) * 9) / 5 + 32);
  return temp;
}

let kelvinToCelcius = (temp) => {
  temp = parseFloat(temp);
  temp = Math.round(temp = temp -273.15);
  return temp;
}

let toFahrenheit = (temp) => {
  temp = parseFloat(temp);
  temp = Math.round((temp = temp * 1.8 + 32));
  return temp;
}

let toCelsius = (temp)  => {
  temp = parseFloat(temp);
  temp = Math.round((temp = (temp - 32) * (5 / 9)));
  return temp;
}
  
let clear = () => {
  userEntry.value = '';
}

locButton.addEventListener('click', (e) => {
  e.preventDefault();
  const successCallback = (location) => {
    let userLocation = `${
      'lat=' + location.coords.latitude + '&lon=' + location.coords.longitude
    }`;
    getWeather(userLocation);
  };
  const errorCallback = (error) => {
    return;
  };
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
});

containerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  input = userEntry.value;

  getWeather(input);
  clear();
})

isANumber = (input) => {
  return !/\D/.test(input);
}

containsNumber = (input) => {
  return /\d/.test(input);
}

typeOfQuery = (input) => {
  if(!isNaN(input) && containsNumber(input)) {
    searchTerm = input;
  } else if (isANumber(input) && input.length <= 5) {
    searchTerm = `${'zip='}${input}`;
  } else {
    searchTerm = `${'q='}${input}`;
  }
}

async function getWeather(input) {
  typeOfQuery(input);
  try {
    const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?${searchTerm}&appid=49257f6591cfc3ed8daf0b5970d519cb&units=standard`,
    { mode: 'cors' }
    );
    const data = await response.json();
    displayWeather(data);
  } catch (err) {
      alert(err);
    }
}

displayWeather = (data) => {
  switch (data.weather[0].main) {
    case 'Clear':
      document.body.style.backgroundImage = 'url("../images/clear.jpg")';
      break;
    case 'Clouds':
      document.body.style.backgroundImage = 'url("../images/cloudy.jpg")';
      break;
    case 'Rain':
    case 'Drizzle':
    case 'Mist':
    case 'Haze':
      document.body.style.backgroundImage ='url("../images/rain.jpg")';
      break;
    case 'Thunderstrom':
      document.body.style.backgroundImage = 'url("../images/thunderstrom.jpg")';
      break;
    case 'Snow':
      document.body.style.backgroundImage = 'url("../images/snow.jpg")';
      break;
    default:
      break;
  }

  const cityName = document.querySelector('[cityName]');
  const cityTemperature =document.querySelector('[cityTemperature]');
  const cityWeatherDescription = document.querySelector('[cityWeather]');
  const tempFeeling = document.querySelector('[tempFeeling]');
  const humidityMeter = document.querySelector('[humidity]');
  const windMeter = document.querySelector('[wind]');
  const weatherImg = document.getElementById('image');
  const datePreview = document.querySelector('[date-time]');
  const dateAndTime = data.timezone;
  const weatherDescription = data.weather[0].description;
  let temp = data.main.temp;
  let tempFeel = data.main.feels_like;

  cityName.innerHTML = `${data.name}, ${data.sys.country}`;
  datePreview.innerHTML = getLocalTime(dateAndTime);

  if (toggleSwitch.checked) {
    temp = kelvinToFahrenheit(temp);
    tempFeel = kelvinToFahrenheit(tempFeel);
    cityTemperature.innerHTML = `${temp + '&degF'}`;
  } else {
    temp = kelvinToCelcius(temp);
    tempFeel = kelvinToCelcius(tempFeel);
    cityTemperature.innerHTML = `${temp + '&degC'}`;
  }

  weatherImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  cityWeatherDescription.innerHTML =
      weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
  tempFeeling.innerHTML = `${'Feels like: '}${tempFeel + '&deg'}`;

  humidityMeter.innerHTML = `${'Humidity levels: '}${
        data.main.humidity + '%'}`;
  windMeter.innerHTML = `${'Wind: '}${data.wind.speed + 'k/m'}`;

  toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
      setTimeout(() => {
        temp = toFahrenheit(temp);
        tempFeel = toFahrenheit(tempFeel);
        cityTemperature.innerHTML = `${temp + '&degF'}`;
        tempFeeling.innerHTML = `${'Feels like: '}${tempFeel + '&deg'}`;
      }, 150);
    } else {
      setTimeout(() => {
        temp = toCelsius(temp);
        tempFeel = toCelsius(tempFeel);
        cityTemperature.innerHTML = `${temp + '&degC'}`;
        tempFeeling.innerHTML = `${'Feels like: '}${tempFeel + '&deg'}`;
      }, 150);
    }
  });
};
getWeather(input);
