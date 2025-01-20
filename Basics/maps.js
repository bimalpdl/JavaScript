// A Map holds key-value pairs where the keys can be any datatype. A Map remembers the original insertion order of the keys
// You can create a JavaScript Map by: i) Passing an Array to new Map(),   ii) Create a Map and use Map.set()

const fruits = new Map([  // Passing an array to new Map()
  ["Apple", 155],   
  ["Kiwi", 865],
  ["Grapes", 250]
]);

const cars = new Map();
cars.set("Tesla", 5000);
cars.set("BYD", 4000);
cars.set("BMW", 7000);

// The set() method can also be used to change existing Map values:
cars.set("BYD", 4500);

// The get() method gets the value of a key in a Map:
cars.get("BYD");  // 4500


console.log(`Typeof Map: ${typeof cars}`);  // object
console.log(`cars instanceof Map: ${cars instanceof Map}`);  // true
console.log(`Size of Map cars is: ${cars.size}`);  // 3

// How maps are different than objects? :
// Maps are (directly iterable, have a size property, keys can be any data type, keys are ordered by insertion, do not have default keys.)



// Map() methods:
// The delete() method removes a map element:
cars.delete("Tesla");

let text = "";
for (const car of cars) {
  text += `${car} `;
}
console.log(`Elements in car map: text ${text}`);

// The clear() method removes all the elements from a map:
cars.clear();

text = "";   // reassing the variable text as empty string.
for (const car in cars) {
  text += `${car} `;
}
console.log(`After clear() method: ${text}`);


// The has() method returns true if a key exists in a map:
console.log(`fruits.has("Apple"): ${fruits.has("Apple")}`);
console.log(`fruits.has("Mango"): ${fruits.has("Mango")}`);

// The forEach() method invokes a callback for each key/value pair in a map:
text = "";
fruits.forEach(function(value, key) {
  text += `${key} = ${value} `;
})

console.log(`Elements in fruits Map(): ${text}`);


// The entries() method returns an iterator object with the [key,values] in a map:
text = "";
for(const x of fruits.entries()) {
  text += x;
}
console.log(`fruits.entries() => returns iterator object with[key,value] in map: ${text}`);

// The keys() method returns an iterator object with the keys in a map:
text = "";
for(const x of fruits.keys()) {
  text += x;
}
console.log(`fruits.keys(): ${text}`);

// The values() method returns an iterator object with the values in a map:
text = "";
for (const x of fruits.values()) {
  text += x;
}
console.log(`fruits.value(): ${text}`);

// You can use the values() method to sum the values in a map:
let total = 0;
for (const x of fruits.values()) {
  total += x;
}
console.log(`Sum of fruits.value(): ${total}`);


// Being able to use objects as keys is an important Map feature.

// create objects:
const apples = {name: "Apples"};
const bananas = {name: "Bananas"};

// create map:
const fruits1 = new Map();

// insert objects as map keys(elements):
fruits1.set(apples, 500);
fruits1.set(bananas, 250);
console.log(`fruits1.get(apples): ${fruits1.get(apples)}`);
// The key is an object (apples), not a string ("apples"):
// console.log(fruits1.get("apples"));   # this will throw an error since apples is an object, not a string.

