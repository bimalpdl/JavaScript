// myFunction is passed to setTimeout() as an argument. eg: setTimeout() function.
// In the real world, callbacks are most often used with asynchronous functions.

const prompt = require('prompt-sync')();
setTimeout(myFunction, 5000);     // myFunction is passed to setTimeout() as an argument. time is given in miliseconds i.e. 5000 = 5 seconds 

function myFunction() {      // myFunction is used as a callback 
  console.log("Hello there!!");
}


let naam = prompt("Eneter your name: ");
// Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead:
setTimeout(function() {myFunction1(naam);}, 2000);  
// this is bit tricky, here is the explanation why we've invoked the myFunction inside anonymous function: 

/* Here, myFunction(naam) executes immediately when JavaScript reaches this line.
The return value of myFunction (which is likely undefined since it doesn’t return anything) gets passed to setTimeout(), instead of a function reference.
As a result, setTimeout() does not work as expected, because it expects a function reference, not the result of a function call.


Here, function() { myFunction(naam); } is an anonymous function that is passed as a reference to setTimeout().
setTimeout() waits for 3 seconds, and then executes this function.
Inside this function, myFunction(naam) is called after 3 seconds, not immediately.

Instead of using anonymous funtion, we can use arrow function as well:
eg:   setTimeout(() => myFunction(naam), 2000);
*/


function myFunction1(name) {
  console.log(`Hello ${name}, how are you doing today?`);
}



// Waiting for intervals: 
setInterval(myFunction2, 2000);    // invokes myFunction2 in every 2 seconds.

// When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:
function myFunction2() {
  let d = new Date();
  console.log(`Current time: ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
}


 


//  most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming is solved using Promises instead.
