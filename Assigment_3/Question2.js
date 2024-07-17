function isArmstrongNumber(number) {
  let sum = 0;
  let temp = number;
  while (temp > 0) {
      let digit = temp % 10;
      sum += Math.pow(digit, 3);
      temp = Math.floor(temp / 10);
  }
  return sum === number;
}

// Example usage:
console.log(isArmstrongNumber(153)); // true
console.log(isArmstrongNumber(370)); // true
console.log(isArmstrongNumber(371)); // true
console.log(isArmstrongNumber(407)); // true
console.log(isArmstrongNumber(123)); // false
