function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomSet = new Set();
while (randomSet.size < 4) {
  randomSet.add(getRandomInt(0, 10));
}

let hasEight = randomSet.has(8);

console.log('Set contents:', randomSet);
console.log('Does the set have 8?', hasEight);
