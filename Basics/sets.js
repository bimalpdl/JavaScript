// A JavaScript Set is a collection of unique values. Each value can only occur once in a Set. The values can be of any type, primitive values or objects.
// You can create a JavaScript Set by: i) Passing an array to new Set(), ii) Create an empty set and use add() to add values

// create a set using 'new Set()' constructor:
const names = new Set(["Bimal", "Rohini", "Matrika", "Nirmal"]);

// we use 'for..of' loop to list the set elements:
let text1 = "";
for (const name of names) {
  text1 += `${name} `;
}
console.log(`The Set names has ${names.size} values.`);  // setName.size returns the size of Set().
console.log(text1);

// The has() method returns true if a specified value exists in a set.
console.log(`Does names contain name "Bimal"?: ${names.has("Bimal")}`);

// create an empty set and add values later:
const cars = new Set();
console.log(`Type of cars: ${typeof(cars)}`);   // objects
console.log(`cars instanceof Set?: ${cars instanceof Set}`);  // true

// Add values to the set:
cars.add("Tesla");
cars.add("BMW");
cars.add("BYD");
// If you add same element to the set, only the first entry will be saved.
cars.add("BYD");

// we use 'for..of' loop to list the set elements:
let text = "";
for (const car of cars) {
  text += `${car} `;
}
console.log(text);
console.log(`Does the cars Set() contain "Toyota"?: ${cars.has("Toyota")}`);

// create a set and add variables:
const letters = new Set();

// create variables
const a = "A";
const b = "B";
const c = "C";

// add variables to the set:
letters.add(a);
letters.add(b);
letters.add(c);
let text3 = "";
for(const letter of letters) {
 text3 += `${letter} `;
}
console.log(text3);

const fruits = new Set(["Apple", "Banana", "Kiwi", "Orange"]);
let text4 = "";
fruits.forEach(function(value) {
  text4 += `${value} `;
})  // these all reside inside forEach()
console.log(text4);  // Apple Banana Kiwi Orange

// The values() method returns an Iterator object with the values in a Set:
text5 = "";
for(const x of fruits.values()){
text5 += `${x} `;
}
console.log(text5);  // Apple Banana Kiwi Orange

// The keys() method returns an Iterator object with the values in a Set:
// NOTE: A Set has no keys, so keys() returns the same as values(). This makes Sets compatible with Maps.


// The entries() method returns an Iterator with [value,value] pairs from a Set.
// NOTE: The entries() method is supposed to return a [key,value] pair from an object.
// A Set has no keys, so the entries() method returns [value,value]. This makes Sets compatible with Maps.
text6 = "";
for (const y of fruits.entries()) {
text6 += `${y} `;
}
console.log(`entries() method will return: ${text6}`);











