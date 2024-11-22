// 2667. Create Hello World Function (22-11-2024)

var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    };
};

// Example usage:
const f = createHelloWorld();
console.log(f());           // Output: "Hello World"
console.log(f(1, 2, 3));    // Output: "Hello World"
console.log(f("test"));     // Output: "Hello World"
