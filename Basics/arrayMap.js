// map() – Transform Each Element of an array
// The map() method creates a new array by applying a function to each element of an existing array.
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squareNums = num.map(function squareNumber(num) {
  return num * num;
})
// const squareNums1 = num.map(num => num * num);   # concise way to do the same thing with arrow function.
console.log(num);
console.log(squareNums);

// map() method supports two parameters in its callback function:
// Syntax => array.map((value, index, array) => { /* logic */ })
// value → The current element in the array.
// index → The index (position) of the current element. 
// array (optional) → The original array being mapped over.

const names = ["Bimal", "Rohini", "Nirmal", "Matrika"];
const displayNums= names.map((name, indexNum) => {    // here, name is current element value and indexNum is an index of current element.
// NOTE: parameter of map method (value and index)  must be passed in order i.e (value, index)
  console.log(`Index: ${indexNum} => Name: ${name}`);

})

const users = [
  {id: 101, name: "Bimal"},
  { id: 102, name: "Nirmal" },
  { id: 103, name: "Rohini" },
  { id: 104, name: "Matri"}
]
const updatedUser = users.map(user => {
  return `id => ${user.id}, name => ${user.name}`;
})
