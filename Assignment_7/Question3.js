function swapWords(S) {
  let words = S.split(' ');
  return words.length === 2 ? `${words[1]} ${words[0]}` : S;
}

console.log(swapWords("Hii Boy")); // Output: Boy Hii
