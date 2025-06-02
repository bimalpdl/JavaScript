const users = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 25 }
];

// 1. forEach - Loop through objects
users.forEach(user => console.log(user.name));

// 2. find - Find the first match
const foundUser = users.find(user => user.age > 21);
console.log("Found:", foundUser);

// 3. filter - Get all matching objects
const filtered = users.filter(user => user.age >= 22);
console.log("Filtered:", filtered);

// 4. map - Extract property
const names = users.map(user => user.name);
console.log("Names:", names);

// 5. map - Update object
const updatedUsers = users.map(user =>
  user.name === "Alice" ? { ...user, age: 21 } : user
);
console.log("Updated:", updatedUsers);

// 6. reduce - Accumulate values
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log("Total Age:", totalAge);

// 7. splice - Remove at index (mutates original array)
const copy1 = [...users];
copy1.splice(1, 1); // removes 1 element at index 1
console.log("After splice:", copy1);

// 8. push - Add to end
const copy2 = [...users];
copy2.push({ name: "David", age: 28 });
console.log("After push:", copy2);

// 9. pop - Remove last
const copy3 = [...users];
copy3.pop();
console.log("After pop:", copy3);

// 10. sort - Sort by age
const sorted = [...users].sort((a, b) => a.age - b.age);
console.log("Sorted by age:", sorted);

// 11. some - At least one matches
const hasSenior = users.some(user => user.age > 24);
console.log("Has senior:", hasSenior);

// 12. every - All match condition
const allAdults = users.every(user => user.age >= 18);
console.log("All are adults:", allAdults);

