function find_largest(n, arr) {
  if (n > arr.length) {
    throw new Error("n is larger than the array length");
  }
  let sortedArr = arr.sort((a, b) => b - a);
  return sortedArr[n - 1];
}

let numbers = [3, 45, 6, 7, 23, 5, 7, 8];
console.log('3rd largest number:', find_largest(3, numbers));
