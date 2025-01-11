// A JavaScript string is zero or more characters written inside quotes. we can use both single and double quotes both are the same.
// Template Strings | string literals | template literals: templates are string enclosed in side backticks. eg: `This's an example of "Template string"`.
// Template literals also works with HTML, check the interesting implementations.

// String Length: To find the length of a string, use the built-in length property:
let text = "Hello Didey, how are you doin\' today?";
console.log(`The length of the string: "${text}" is ${text.length}.`);

let text1 = `Hello buddy, 
this is an example of 
template string
`;   // templates allow multiline string.
console.log(text1);


// JavaScript Strings as Objects: `Normally, JavaScript strings are primitive values, created from literals:
let text3 = "This is a random text.";

// But strings can also be defined as objects with the keyword new:
let text4 = new String("This is a object string.");

// NOTE: Do not create String objects. The new keyword complicates the code and slows down execution speed. String objects can produce unexpected results:
let x = "Bimal";
let y = new String("Bimal");
console.log(`Are x: "${x}" and y: "${y}" same? ${x == y}`);  // true
console.log(`Are x: "${x}" and y: "${y}" same? ${x === y}`);  // true

let a = new String("Rohini");
let b = new String("Rohini");
console.log(`Are a: "${a}" and b: "${b}" same? ${a == b}`);  // false: This is because Comparing two JavaScript objects always returns false. 
console.log(`Are a: "${a}" and b: "${b}" same? ${a === b}`);  // false: This is because Comparing two JavaScript objects always returns false. 

// Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.
// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).
let text5 = "Namaste Duniya.";
let subText5 = text5.slice(0,6);
console.log(subText5); // Namast (since last index isn't included by slice())

// If you omit the second parameter in slice(), the method will slice out the rest of the string:
let subText5a = text5.slice(6);
console.log(subText5a);  // e Duniya 

// If a parameter is negative, the position is counted from the end of the string:
let subText5b = text5.slice(-5);
console.log(subText5b);  // niya


// A string is converted to upper case with toUpperCase():
console.log(`Using .toUpperCase(): ${text5.toUpperCase()}`);  // NAMASTE DUNIYA

// A string is converted to lower case with toLowerCase():
console.log(`Using to.LowerCase(): ${text5.toLowerCase()}`);  // namaste duniya

let first = "Namaste";
let second = "Didey";
let combined = first.concat(" ", second);
console.log(combined);  // Namaste Didey


let randomString = "      Hello There!!      ";
console.log(`"${randomString}" is trimmed to "${randomString.trim()}".`);
// trimStart()  trims the whitespace from beginning, trimEnd() trims the whitespace from end of the string.


// The replace() method replaces a specified value with another value in a string: By default, the replace() method replaces only the first match:
let repString = "I use windows. I love using windows as well.";
console.log(`${repString.replace("windows", "Linux")}`);  // I use linux. I love using windows as well.

// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced though it supports string too.
let replString = "I love windows, windows is my favorite operating system.";
console.log(replString.replaceAll("windows", "linux"));  // I love linux, linux is my favorite operating system.


//  string can be converted to an array with the split() method:
let animals = "Cat, Dog, Rabbit, Fox, Mouse";
let birds = "Pigeon Sparrow Crow Eagle";
console.log(animals.split(","));  // splits the string into array based on comma ",":  [ 'Cat', ' Dog', ' Rabbit', ' Fox', ' Mouse' ]
console.log(birds.split(" "));  // splits the string into array based on whitespace.: [ 'Pigeon', 'Sparrow', 'Crow', 'Eagle' ]

// The includes() method returns true if a string contains a specified value. It is case sensitive.
console.log(`Does ${text5} contain 'Duniya?' ${text5.includes("Duniya")}`);  // true

// The startsWith() method returns true if a string begins with a specified value. It is case sensitive.
console.log(`Does ${text5} starts with "Namaste"?: ${text5.startsWith("Namaste")}`); // true

// The startsWith() method returns true if a string ends with a specified value. It is case sensitive.
console.log(`Does ${text5} ends with "Namaste"?: ${text5.endsWith("Namaste")}`);  // false 


console.log(`<h1>Hello</h1>`)






