const convertToCelsius = function (farenheit) {
  return Number(((farenheit - 32) * 0.55555555).toFixed(1));
};
const convertToFahrenheit = function (celcius) {
  return Number((celcius * 1.8 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
