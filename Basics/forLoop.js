/* JavaScript supports different kinds of loops:

    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    for/of - loops through the values of an iterable object
    while - loops through a block of code while a specified condition is true
    do/while - also loops through a block of code while a specified condition is true
*/ 
// The for statement creates a loop with 3 optional expressions: for (expression 1; expression 2; expression 3){  // loop body }
// You can omit expression 1 when your values are set before the loop starts:
let i = 2;
for(;i < 6; i++){
  console.log(i);  //  2 3 4 5
}

// You can intiate many values in expression 1 (separated by comma):
const cars = ["BMW", "Tesla", "Toyota", "BYD", "Honda"];
let len1;
for(let i = 0, len1 = cars.length; i < len1; i ++){
  console.log(`car ${i}: ${cars[i]}.`);
}

// for in loop: The JavaScript for in statement loops through the properties of an Object:
// syntax: for(key in object) {}
const Person = {name: "Bimal Paudel", age: 23, gender: "Male"};
let text = "";
for(let key in Person){  // each iteration returns a key. The key is used to access the value of the key. The value of the key is person[x].
  text += `${Person[key]} `;
}
console.log(text);

// similar to object, it can also be used in array: syntax => for(variable in array){}
const numbers = [2, 56, 87.5, 59, 6];
let text1 = "";
for(let i in numbers){
  text1 += `${numbers[i]} `;
}
console.log(text1);

// Do not use for in over an Array if the index order is important.
// The index order is implementation-dependent, and array values may not be accessed in the order you expect.
// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.


// for of loop: The JavaScript for of statement loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
// syntax: for(variable of iterable) {}
// variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
// iterable - An object that has iterable properties.
let text3 = "";
for (let i of cars) {
text3 += `${i} `;
}
console.log(text3);


// looping over a string: 
let text4 = "Hello threre!";
let text5 = "";
for (let i of text4) {
  text5 += `${i} `;
}
console.log(text5);


// while() and do while() loops are same as in C++.



