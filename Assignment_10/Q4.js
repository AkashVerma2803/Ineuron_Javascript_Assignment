const names = ['John', 'Tina', 'Kale', 'Max'];

function useFunction(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function argFn(name) {
  console.log("Hello " + name);
}

useFunction(names, argFn);


/*
Hello John
Hello Tina
Hello Kale
Hello Max

*/

/*
b) Which function is a Higher Order Function here?
The useFunction function is the higher-order function because it takes another function (fn) as an argument and uses it within its own body.
*/