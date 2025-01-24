// JavaScript modules allow you to break up your code into separate files. This makes it easier to maintain a code-base.
// Modules only work with the HTTP(s) protocol.
/*
  <script type="module">
import message from "./message.js";
</script> 

 */

// There are two types of exports: Named Exports and Default Exports.
// Named export:  You can create named exports two ways. In-line individually, or all at once at the bottom.

// In-line export:  (type of named export)
export const name = "Bimal Paudel";
export const age = 23;

// all at once at the bottom: (type of named export)
const name1 = "Rohini";
const age1 = 31;

export {name1, age1};


// default export:
const message = () => {
  const name = "Bimal";
  const age = 23;
  return `Hello, I am ${name} and I'm ${age} years old.`;
};
export default message;
// You can only have one default export in a file.

