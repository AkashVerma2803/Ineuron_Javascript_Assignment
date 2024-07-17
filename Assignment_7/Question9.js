function checkYesInput(input) {
  return input.toLowerCase() === 'yes';
}

console.log(checkYesInput("yes")); // Output: true
console.log(checkYesInput("YES")); // Output: true
console.log(checkYesInput("Yes")); // Output: true
console.log(checkYesInput("no")); // Output: false
