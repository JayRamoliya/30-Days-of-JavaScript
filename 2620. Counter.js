// DAY 2
// 2620. Counter (23-11-2024)

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).


// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.

var createCounter = function(n) {
    return function(...args) {
        console.log(...args);
        return n++;
    };
};

const counter = createCounter(10)
console.log(counter);

console.log(counter()); 
console.log(counter()); 
console.log(counter()); 

// n++ is a post-increment operator:
// It first returns the current value of n (which is 10).
// Then it increments n by 1 (so n becomes 11).