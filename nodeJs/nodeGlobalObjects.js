// Global objects are equivalent to window object in browsers
global.a = 'This is a global variable'; // accessible globally accross the application
console.log(a);

// console object: used for printing message to standard output or error output
console.log('Hello there!');
console.error('I am error message');
console.warn('I\'m warning message.');

// process object: provides information about currently running nodeJs process
console.log(`Process ID: ${process.pid}`);
console.log('Node JS version: ' + process.version);


// __dirname and __filename: repersent the directory name and file name of the current module (file).
console.log(__dirname);
console.log(__filename);

// setTimeout() and setInterval(): used to schedule the execution of code
// setTimeout(): runs a function after a specified delay
// setInterval(): runs a function repeatedly at fixed intervals
setTimeout(() => {
    console.log('This runs after 2 seconds');
}, 2000);  // time specified in miliseconds

setInterval(() => {
    console.log('This runs every 3 seconds');
}, 3000);


// URL and URLSearchParams
// URL: used to handle URL related operations
// URLSearchParams: helps with manipulating URL query parameter
const myURL = new URL('http://bimalpdl.github.io:3000/?name=Bimal');
console.log(myURL.searchParams.get('name'));  // Bimal
myURL.searchParams.append('gender', 'male'); // appends 'gender=male' on the URL
console.log(myURL.href); // http://bimalpdl.github.io:3000/?name=Bimal&gender=male

