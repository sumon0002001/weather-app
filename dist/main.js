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

eval("const containerForm = document.querySelector('[container-form]');\n  const userEntry = document.querySelector('[new-entry]');\n  const toggleSwitch = document.querySelector('[switch]');\n  const locButton = document.querySelector('[location-button]');\n  let input = 'Dhaka';\n  let searchTerm;\n\nkelvinToFahrenheit = (temp) => {\n  temp = parseFloat(temp);\n  temp = Math.round(((temp = temp - 273.15) * 9) / 5 + 32);\n  return temp;\n}\n\nkelvinToCelcius = (temp) => {\n  temp = parseFloat(temp);\n  temp = Math.round(temp = temp -273.15);\n  return temp;\n}\n\ntoFahrenheit = (temp) => {\n  temp = parseFloat(temp);\n  temp = Math.round((temp = temp * 1.8 + 32));\n  return temp;\n}\n\ntoCelsius = (temp)  => {\n  temp = parseFloat(temp);\n  temp = Math.round((temp = (temp - 32) * (5 / 9)));\n  return temp;\n}\n  \nclear = () => {\n  userEntry.value = '';\n}\n\nlocButton.addEventListener('click', (e) => {\n    e.preventDefault();\n    console.log(\"hello\");\n})\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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