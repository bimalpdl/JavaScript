let users = [
  { id: 101, fname: "Bimal", lname: "Paudel", rollNum: 51 },
  { id: 102, fname: "Anup", lname: "Chand", rollNum: 71 },
  { id: 103, fname: "Niroj", lname: "Thapa", rollNum: 70 }
]

console.log(`Original user detail:`);
// we're using forEach loop here since we're not willing to modify (transform) the array element but simply display them.
users.forEach(user => {
  console.log(`ID: ${user.id}, First-name: ${user.fname}, Last-name: ${user.lname}, Roll-Number: ${user.rollNum}`);
})

// we're using map() array method here because we're trying to transform / modify some array elements.
// map() method returns a new transformed array:

let updatedUsers = users.map( (user, index) => {
  return {
    ...user,   // note here, to avoid modifying the original 'users' array, we've used spread operator, it copies the existing properties and only updates the that are explicitly modified. In this case it only updates user.id and user.rollNum.
    id: user.id + 5,
    rollNum: user.rollNum + 2
  };
});
console.log('\nModified user detail using map() array method: ');
updatedUsers.forEach(user => {
  console.log(`ID: ${user.id}, First-name: ${user.fname}, Last-name: ${user.lname}, Roll-Number: ${user.rollNum}`);



})
