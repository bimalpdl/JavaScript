const fruits = ["Banana", "Mango", "Apple", "Grapes", "Papaya", "Kiwi"];
console.log(fruits[2]);  // Apple   # arraName.length property returns the length of the array 
console.log(fruits.at(2));  // Apple   #arrayName.at(indexNum) as same as arrayName[indexNum]  

// The join() method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator:
console.log(fruits.join(" * "));  // Banana * Mango * Apple * Grapes * Papaya * Kiwi

// The pop() method removes the last element from an array, it returns the value that was popped out.
console.log(`Original Array: ${fruits}`);
console.log(`Popped item: ${fruits.pop()}`);  //  kiwi
console.log(`Array after one pop operation: ${fruits}`);

// The push() method returns the new array length:
console.log(`Length of the array is: ${fruits.push("Kiwi")}`); // 6  


// Shifting is equivalent to popping, but working on the first element instead of the last. The shift() method removes the first array element and "shifts" all other elements to a lower index.
console.log(fruits.shift()); // The shift() method returns the value that was "shifted out":

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements, it returns the new array length.
console.log(fruits.unshift("Orange"));  


// Warning !: Using delete() leaves undefined holes in the array. Use pop() or shift() instead.
delete fruits[1];   // hole in 1 index
console.log(fruits);

fruits[1] = "Mango";


// JavaScript Array concat(): The concat() method creates a new array by merging (concatenating) existing arrays: The concat() method does not change the existing arrays. It always returns a new array.

// The concat() method can take any number of array arguments.
const colors = ["Red", "Green", "Blue"];
const foodAndColors = fruits.concat(colors);
console.log(`Concatenated array: ${foodAndColors}`);


// splice() and slice() methods are different, splice() method is used to delete elements (can be used to delete element without leaving 'holes') from the arry while slice returns a new sub-array from the existing array(without altering the original one.)


// slice() method: The slice() method creates a new array. The slice() method does not remove any elements from the source array.
const subFruits = fruits.slice(3);  // subArray include the elements after index 3 (incluing 3)
console.log(subFruits);  //  ['Grapes', 'Papaya', 'Kiwi']

// The slice() method can take two arguments like slice(1, 3). The method then selects elements from the start argument, and up to (but not including) the end argument.

const subFruits1 = fruits.slice(1,5); // subArray includes elements from index 1 to 4 (excluding 5).
console.log(subFruits1);


// Searching in JS array: 
// indexOf(): The indexOf() method searches an array for an element value and returns its position.
// Array.indexOf() returns -1 if the item is not found. If the item is present more than once, it returns the position of the first occurrence.
console.log(`"Apple" is at index: ${fruits.indexOf("Apple")}`)

// Array.includes():  This allows us to check if an element is present in an array (including NaN, unlike indexOf).
console.log(`Does the array contain mango?: ${fruits.includes("Mango")}`);
console.log(`Does the array contain Lemon?: ${fruits.includes("Lemon")}`);


















