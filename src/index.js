const containerForm = document.querySelector('[container-form]');
  const userEntry = document.querySelector('[new-entry]');
  const toggleSwitch = document.querySelector('[switch]');
  const locButton = document.querySelector('[location-button]');
  let input = 'Dhaka';
  let searchTerm;

kelvinToFahrenheit = (temp) => {
  temp = parseFloat(temp);
  temp = Math.round(((temp = temp - 273.15) * 9) / 5 + 32);
  return temp;
}

kelvinToCelcius = (temp) => {
  temp = parseFloat(temp);
  temp = Math.round(temp = temp -273.15);
  return temp;
}

toFahrenheit = (temp) => {
  temp = parseFloat(temp);
  temp = Math.round((temp = temp * 1.8 + 32));
  return temp;
}

toCelsius = (temp)  => {
  temp = parseFloat(temp);
  temp = Math.round((temp = (temp - 32) * (5 / 9)));
  return temp;
}
  