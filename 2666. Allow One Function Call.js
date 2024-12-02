// DAY 10
// 2666. Allow One Function Call (01-12-2024)

// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.
 


// Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
// Output: [{"calls":1,"value":6}]
// Explanation:
// const onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn was not called


var once = function(fn) {
    let called = false; // Flag to check if the function has been called
    let result;         // Store the result of the first call
    
    return function(...args) {
        if (!called) {            // If the function hasn't been called yet
            called = true;        // Set the flag to true
            result = fn(...args); // Call the function and store the result
            return result;        // Return the result
        }
        return undefined;         // Return undefined for subsequent calls
    };
};

const fn = (a, b, c) => (a + b + c);
const onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6 (fn is called)
console.log(onceFn(2, 3, 6)); // undefined (fn is not called)
