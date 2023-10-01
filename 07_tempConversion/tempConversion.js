const convertToCelsius = function(initialTemp) {
    let finalTemp = Math.round(((initialTemp - 32) * (5/9)) * 10) / 10;
    return finalTemp;
};

const convertToFahrenheit = function(initialTemp) {
    let finalTemp = Math.round((initialTemp * (9/5) + 32) * 10) / 10;
    return finalTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
