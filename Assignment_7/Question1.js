function truncateString(S) {
  return S.length > 4 ? S.slice(0, 4) + '...' : S;
}


console.log(truncateString("Ice")); // Output: Ice
console.log(truncateString("Icecream")); // Output: Icec...
