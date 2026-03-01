const fs = require('node:fs'); // node: is optional
const https = require('https');

// Declare variables a and b
const a = 5;
const b = 10;

// Function to make an API call
function makeApiCall() {
    https.get('https://dummyjson.com/products/1', (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            console.log('API Response was received');
        });
    }).on('error', (err) => {
        console.error('Error making API call:', err.message);
    });
}

// Call the API function
makeApiCall();

// Use setTimeout to simulate a delay
setTimeout(() => {
    console.log('This message is displayed after 2 seconds');
}, 5000);

// Syncronous but given to libuv
fs.readFileSync('example.txt', "utf8");
console.log("Execute in sync way")

// // A-Syncronous text file
fs.readFile('example.txt', "utf8", (err, data) => {
    if (err) {
        console.error('Error reading file:', err.message);
        return;
    }
    console.log('File Content:', data);
});

// Function to multiply two numbers
function multiply(x, y) {
    return x * y;
}

// Call the multiply function with a and b and log the output
const product = multiply(a, b);
console.log('The product of a and b is:', product);

