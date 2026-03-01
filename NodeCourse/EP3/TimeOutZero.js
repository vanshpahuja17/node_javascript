console.log("Hello World");

var a = 1078698;
var b = 20986;

// Sent to LibUV
// runs after callstack is empty 
setTimeout(() => {
    console.log("call me right now");
}, 0);

setTimeout(() => {
    console.log("call me after 3 seconds");
}, 3000);

function multiplyFn(x, y) {
    const result = x * y;
    return result;
}

var c = multiplyFn(a, b);
console.log("Multiplication result is:", c);