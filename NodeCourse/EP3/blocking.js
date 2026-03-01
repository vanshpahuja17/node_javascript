const crypto = require('node:crypto');

console.log("Hello World");

var a = 1078698;
var b = 20986;

// pbkdf2 - Password Base Key Derivative Function

// Synchronous Function - WILL BLOCK THE MAIN THREAD - DON'T USE IT
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("First Key is Generated");

// Async Function
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("Second Key is generated");
});

function multiplyFn(x, y) {
    const result = x * y;
    return result;
}
console.log(multiplyFn(a,b))