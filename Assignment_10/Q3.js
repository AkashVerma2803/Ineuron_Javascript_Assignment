// Higher Order Function
function processArray(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

// Callback Function
function square(num) {
  return num * num;
}

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = processArray(numbers, square);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
