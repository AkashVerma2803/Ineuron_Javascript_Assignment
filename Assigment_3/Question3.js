function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function isSpecialNumber(number) {
  let sum = 0;
  let temp = number;
  while (temp > 0) {
      let digit = temp % 10;
      sum += factorial(digit);
      temp = Math.floor(temp / 10);
  }
  return sum === number;
}

// Example usage:
console.log(isSpecialNumber(145)); 
console.log(isSpecialNumber(1));   
console.log(isSpecialNumber(2));   
console.log(isSpecialNumber(3));   
console.log(isSpecialNumber(10));  
