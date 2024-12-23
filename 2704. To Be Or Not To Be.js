// DAY 3
// 2704. To Be Or Not To Be (25-09-2024)

// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 


// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.

var expect = function(val) {
    
    return {
        toBe: function(expected) {
            console.log("test",expected);
            
            if (val === expected) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expected) {
            if (val !== expected) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
};


// Example usage:

try {
    console.log(expect(5).toBe(5)); // Output: true
    console.log(expect(5).notToBe(4)); // Output: true
    console.log(expect(5).notToBe(5)); // Throws "Equal" error
} catch (error) {
    console.error(error.message);
}