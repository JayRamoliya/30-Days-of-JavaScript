// DAY 8
// 2629. Function Composition (30-11-2024)

// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

 

// Example 1:

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65


var compose = function(functions) {
    // Return a new function that takes x as input
    return function(x) {
        // Use reduceRight to apply functions from right to left
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
};

// Example usage
let functions = [
    x => x + 1,    // Adds 1 to the input
    x => x * x,    // Squares the input
    x => 2 * x     // Multiplies the input by 2
];

let x = 4;
let fn = compose(functions);
console.log(fn(x)); // Output: 65
