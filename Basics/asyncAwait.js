// "async and await make promises easier to write". async makes a function return a Promise. await makes a function wait for a Promise.
// The keyword async before a function makes the function return a promise:
function displaySth(sth) {
  console.log(sth);
}

async function myFunction() {
  return "Hello there!";
}

/* this function above is same as:
 
 async function myFunction() {
   return Promise.resolve("Hello");
 }


Here is how to use the Promise:
myFunction().then(
  function(value) { // code if successful  },
  function(error) { // code if some error  }
);
 */ 

myFunction.then(
  function(value) {
    displaySth(value);
  },
  function(error) {
    displaySth(error);
  }
);


// The await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
