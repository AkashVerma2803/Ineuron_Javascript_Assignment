function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return `${celsius}°C is ${fahrenheit}°F`;
}

function fahrenheitToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;
  return `${fahrenheit}°F is ${celsius}°C`;
}

// Example usage:
console.log(celsiusToFahrenheit(60)); // 60°C is 140°F
console.log(fahrenheitToCelsius(45)); // 45°F is 7.222222222222222°C
