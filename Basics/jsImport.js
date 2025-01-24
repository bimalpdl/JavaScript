// You can import modules into a file in two ways, based on if they are named exports or default exports. 
// Named exports are constructed using curly braces. Default exports are not.	

// importing named eport(both in-line and all at bottom ones ):
import {name, age,name1, age1 } from "./jsExport.js";
console.log(`Name: ${name}, Age: ${age}`);   // Name: Bimal, Age: 23
console.log(`Name: ${name1}, Age: ${age1}`);  // Name: Rohini, Age: 31


// import default exports:
import message from "./jsExport.js";
console.log(message());    // Hello, I am Bimal and I'm 23 years old.

