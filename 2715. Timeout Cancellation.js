// DAY 14
// 2715. Timeout Cancellation (06-12-2024)


// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

// setTimeout(cancelFn, cancelTimeMs)
// Initially, the execution of the function fn should be delayed by t milliseconds.

// If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.


// Input: fn = (x) => x * 5, args = [2], t = 20
// Output: [{"time": 20, "returned": 10}]
// Explanation: 
// const cancelTimeMs = 50;
// const cancelFn = cancellable((x) => x * 5, [2], 20);
// setTimeout(cancelFn, cancelTimeMs);

// The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of fn(2) at 20ms.

var cancellable = function(fn, args, t) {
    let timeoutId;

    const cancelFn = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null; // Clear reference to indicate it's cancelled
        }
    };

    timeoutId = setTimeout(() => {
        fn(...args);
        timeoutId = null; // Clear reference after execution
    }, t);

    return cancelFn;
};


const fn = (x) => console.log(x * 5);
const args = [2];
const t = 20;

const cancelFn = cancellable(fn, args, t);

// Schedule cancellation after 50ms
setTimeout(cancelFn, 50); // No cancellation happens since fn runs at 20ms
