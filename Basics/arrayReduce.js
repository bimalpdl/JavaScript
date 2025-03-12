// reduce() – Accumulate a Value from an Array.
// The reduce() method processes an array and returns a single accumulated value (sum, product, etc.). 


// eg: Find the sum of an array:
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = nums.reduce((accumulator, num) => accumulator + num , 0);
console.log(`Elements in nums are: ${nums}`);
console.log(`Sum of nums elements are: ${sum}`);


/*
 How it works: 

    accumulator starts at 0 (the initial value).
    Loops through each element, adding it to accumulator.
    Returns the final single value (sum).

 */

const cart = [
  { item: "Laptop", price: 70000 },
  { item: "Mobile", price: 45000 },
  { item: "DSLR", price: 200000 }
];

const totalPrice = cart.reduce((total, product) => total + product.price, 0);
console.log(`Items in cart are: ${cart}`);
console.log(`Total price of cart items are: ${totalPrice}`);
