// A
function toUpperCase(S) {
  return S.toUpperCase();
}

// Example usage
console.log(toUpperCase("hello")); // Output: HELLO


//B
function capitalizeFirstChar(S) {
  return S.charAt(0).toUpperCase() + S.slice(1);
}

// Example usage
console.log(capitalizeFirstChar("hello")); // Output: Hello


//C
function toLowerCase(S) {
  return S.toLowerCase();
}

// Example usage
console.log(toLowerCase("HELLO")); // Output: hello

//D
function swapHalves(S) {
  let mid = Math.floor(S.length / 2);
  return S.length % 2 === 0 ? S.slice(mid) + S.slice(0, mid) : S.slice(mid + 1) + S[mid] + S.slice(0, mid);
}

// Example usage
console.log(swapHalves("abcdef")); // Output: defabc
console.log(swapHalves("abcde"));  // Output: deabc

// E
function countRepeatingCharacters(S) {
  let charCount = {};
  for (let char of S) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

// Example usage
console.log(countRepeatingCharacters("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }

//F
function reverseString(S) {
  return S.split('').reverse().join('');
}

// Example usage
console.log(reverseString("hello")); // Output: olleh
