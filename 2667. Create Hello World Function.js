// DAY 1
// 2667. Create Hello World Function (22-11-2024)

// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".


var createHelloWorld = function() {
    return function(...args) {
        console.log("TEST" , ...args);
        return "Hello World";
    };
};

// Example usage:
const f = createHelloWorld();
console.log(f());           // Output: "Hello World"
console.log(f(1, 2, 3));    // Output: "Hello World"
console.log(f("test"));     // Output: "Hello World"

console.log(f(42, "test", true)); 


/*
The ...args syntax (called the rest parameter) is used to collect all the arguments passed to the inner function into an array. This allows the function to handle a variable number of arguments.

1. Capture any number of arguments: The inner function can accept any number of arguments without explicitly defining them. All arguments will be collected into the args array.

2. Use the arguments if needed: Even though the inner function doesn't use args in its logic (it simply logs them), this design allows it to handle dynamic inputs. For example:

It provides flexibility:

If you later decide to use the arguments (e.g., conditional logic based on inputs or returning a modified string), they are already captured.
The function becomes more adaptable to future requirements without needing redesign.
*/ 