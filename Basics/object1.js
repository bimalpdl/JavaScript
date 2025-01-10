// Displaying JS object properties: they can be displayed in 4 ways: 
// i) using 'objectName.propertyName', ii) using loop, iii) using 'object.values()', iv) using "JSON.stringify()"
const person = {
  name : "Bimal", 
  age: 23,
  city: "Kathmandu"
};

console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);  // using objectName.propertyName 

// Displaying properties in a loop: properties of object can be collected in a loop.
// Build a text 
let text = "";
for(let x in person){
  text += person[x] + " ";
};
console.log(text);  // only displays the properties, not the key. i.e Bimal 23 Kathmandu

// Note: You must use person[x] in the loop. person.x will not work (Because x is the loop variable).

// Using Object.values(): Object.values() creates an array from the property values:
const myArray = Object.values(person);
console.log(myArray); // Outputs an array with only properties without keys. i.e ['Bimal', 23, 'Kathmandu']

// Using Object.entries(): Object.entries() makes it simple to use objects in loops
const fruits = {banana: 300, apple: 550, orange: 150};

let text1 = "";
for(let[fruit, price] of Object.entries(fruits)){
  text1 += fruit + " : " + price + "\n";
}
console.log(text1);


// Using JSON.stringify(): JavaScript objects can be converted to a string with JSON method JSON.stringify().
// Note: The result will be a string written in JSON notation: {"name":"John","age":50,"city":"New York"}
 
// stringify Object:
let myString = JSON.stringify(person);
console.log(myString);




