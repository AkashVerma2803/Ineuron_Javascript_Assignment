function isFirstCharLowerCase(S) {
  return S[0] === S[0].toLowerCase();
}

console.log(isFirstCharLowerCase("apple")); // Output: true
console.log(isFirstCharLowerCase("Apple")); // Output: false
