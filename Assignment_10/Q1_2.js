/*  
1. Difference Between Higher Order Functions and Callback Functions
Higher Order Functions: These are functions that either take other functions as arguments, return a function, or both. They are a key feature of functional programming.

Callback Functions: These are functions that are passed as arguments to other functions and are invoked (called back) inside the outer function to complete some kind of routine or action.

While a callback function is often used with higher-order functions, they are not the same concept. A higher-order function is defined by its ability to operate on other functions, while a callback function is defined by being passed and called within another function.

2. Is filter a Higher Order Function in JavaScript?
Yes, filter is a higher-order function because it takes a function as an argument. The function passed to filter is used to test each element of the array. The filter method creates a new array with all elements that pass the test implemented by the provided function.
*/