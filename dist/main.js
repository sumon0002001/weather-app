/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/* eslint no-useless-concat: \"error\" */\n/* eslint-env es6 */\n\nconst containerForm = document.querySelector('[container-form]');\nconst userEntry = document.querySelector('[new-entry]');\nconst toggleSwitch = document.querySelector('[switch]');\nconst locButton = document.querySelector('[location-button]');\nlet input = 'Dhaka';\nlet searchTerm;\n\nconst getLocalTime = (data) => {\n  const date = new Date();\n  const time = date.getTime();\n  const localOffset = date.getTimezoneOffset() * 60000;\n  const utc = time + localOffset;\n  const localTime = utc + 1000 * data;\n  const localTimeDate = new Date(localTime);\n  return localTimeDate.toLocaleString();\n};\n\nconst kelvinToFahrenheit = (temp) => {\n  temp = parseFloat(temp);\n  temp = Math.round(((temp -= 273.15) * 9) / 5 + 32);\n  return temp;\n};\n\nconst kelvinToCelcius = (temp) => {\n  temp = parseFloat(temp);\n  temp = Math.round(temp -= 273.15);\n  return temp;\n};\n\nconst toFahrenheit = (temp) => {\n  temp = parseFloat(temp);\n  temp = Math.round((temp = temp * 1.8 + 32));\n  return temp;\n};\n\nconst toCelsius = (temp) => {\n  temp = parseFloat(temp);\n  temp = Math.round((temp = (temp - 32) * (5 / 9)));\n  return temp;\n};\n\nconst clear = () => {\n  userEntry.value = '';\n};\n\nconst typeOfQuery = (input) => {\n  if (containsNumber(input)) {\n    searchTerm = input;\n  } else if (isANumber(input) && input.length <= 5) {\n    searchTerm = `${'zip='}${input}`;\n  } else {\n    searchTerm = `${'q='}${input}`;\n  };\n};\n\nasync function getWeather(input) {\n  typeOfQuery(input);\n  try {\n    const response = await fetch(\n      `https://api.openweathermap.org/data/2.5/weather?${searchTerm}&appid=49257f6591cfc3ed8daf0b5970d519cb&units=standard`,\n      { mode: 'cors'}\n    );\n    const data = await response.json();\n    displayWeather(data);\n  } catch (err) {\n      alert(err);\n    }\n}\n\nlocButton.addEventListener('click', (e) => {\n  e.preventDefault();\n  const successCallback = (location) => {\n    const userLocation = `${\n      'lat=' + location.coords.latitude + '&lon=' + location.coords.longitude\n    }`;\n    getWeather(userLocation);\n  };\n  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);\n});\n\ncontainerForm.addEventListener('submit', (event) => {\n  event.preventDefault();\n  input = userEntry.value;\n\n  getWeather(input);\n  clear();\n});\n\nisANumber = (input) => {\n  return !/\\D/.test(input);\n};\n\ncontainsNumber = (input) => {\n  return /\\d/.test(input);\n};\n\nconst displayWeather = (data) => {\n  switch (data.weather[0].main) {\n    case 'Clear':\n      document.body.style.backgroundImage = 'url(\"../images/clear.jpg\")';\n      break;\n    case 'Clouds':\n      document.body.style.backgroundImage = 'url(\"../images/cloudy.jpg\")';\n      break;\n    case 'Rain':\n    case 'Drizzle':\n    case 'Mist':\n    case 'Haze':\n      document.body.style.backgroundImage ='url(\"../images/rain.jpg\")';\n      break;\n    case 'Thunderstrom':\n      document.body.style.backgroundImage = 'url(\"../images/thunderstrom.jpg\")';\n      break;\n    case 'Snow':\n      document.body.style.backgroundImage = 'url(\"../images/snow.jpg\")';\n      break;\n    default:\n      break;\n  };\n\n  const cityName = document.querySelector('[cityName]');\n  const cityTemperature =document.querySelector('[cityTemperature]');\n  const cityWeatherDescription = document.querySelector('[cityWeather]');\n  const tempFeeling = document.querySelector('[tempFeeling]');\n  const humidityMeter = document.querySelector('[humidity]');\n  const windMeter = document.querySelector('[wind]');\n  const weatherImg = document.getElementById('image');\n  const datePreview = document.querySelector('[date-time]');\n  const dateAndTime = data.timezone;\n  const weatherDescription = data.weather[0].description;\n  let temp = data.main.temp;\n  let tempFeel = data.main.feels_like;\n\n  cityName.innerHTML = `${data.name}, ${data.sys.country}`;\n  datePreview.innerHTML = getLocalTime(dateAndTime);\n\n  if (toggleSwitch.checked) {\n    temp = kelvinToFahrenheit(temp);\n    tempFeel = kelvinToFahrenheit(tempFeel);\n    cityTemperature.innerHTML = `${temp + '&degF'}`;\n  } else {\n    temp = kelvinToCelcius(temp);\n    tempFeel = kelvinToCelcius(tempFeel);\n    cityTemperature.innerHTML = `${temp + '&degC'}`;\n  };\n\n  weatherImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;\n\n  cityWeatherDescription.innerHTML =\n      weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);\n  tempFeeling.innerHTML = `${'Feels like: '}${tempFeel + '&deg'}`;\n\n  humidityMeter.innerHTML = `${'Humidity levels: '}${\n        data.main.humidity + '%'}`;\n  windMeter.innerHTML = `${'Wind: '}${data.wind.speed + 'k/m'}`;\n\n  toggleSwitch.addEventListener('change', () => {\n    if (toggleSwitch.checked) {\n      setTimeout(() => {\n        temp = toFahrenheit(temp);\n        tempFeel = toFahrenheit(tempFeel);\n        cityTemperature.innerHTML = `${temp + '&degF'}`;\n        tempFeeling.innerHTML = `${'Feels like: '}${tempFeel + '&deg'}`;\n      }, 150);\n    } else {\n      setTimeout(() => {\n        temp = toCelsius(temp);\n        tempFeel = toCelsius(tempFeel);\n        cityTemperature.innerHTML = `${temp + '&degC'}`;\n        tempFeeling.innerHTML = `${'Feels like: '}${tempFeel + '&deg'}`;\n      }, 150);\n    }\n  });\n};\ngetWeather(input);\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;