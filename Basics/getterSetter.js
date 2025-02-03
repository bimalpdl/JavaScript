const Person = {
  firstName : "Bimal", 
  lastName : "Paudel",
  fullName() {   // this is better approach of defining function as object value insted of using 'fullName: function() { return sth }'.
    return  `${this.firstName} ${this.lastName}`
  }
}

console.log(Person.fullName());  // the fullName function must be accessed using parenthesis '()' and also the values are read-only, i.e we can't modify / update them.


// using getter and setter, we can invoke function of object without using parentesis () and also make them modifiable (both read and write).
// getter (using 'get' keyword) is used to access the properties while setter (using 'set' keyword) is used to update or modify the properties.

const Person1 = {
  firstName : "John",
  lastName : "Doe",
  get fullName() {
    return `${Person1.firstName} ${Person1.lastName}`;
  },  // don't forget comma(,) here; we're still in Person1 object body

  set fullName(updatedName) {
    const nameArray = updatedName.split(" ");   // split the updatedName based on whitespace and store the values in array.
    this.firstName = nameArray[0];
    this.lastName = nameArray[1];
  }
}

console.log(`Full name before: ${Person1.fullName}`);   // note that we arn't using parenthesis() to access the fullName function value in Person1 object.
Person1.fullName = "Tom Holland";
console.log(`Full name after updation: ${Person1.fullName}`);
