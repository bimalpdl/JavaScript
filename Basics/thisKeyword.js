// In JavaScript, the this keyword refers to an object.

// The this keyword refers to different objects depending on how it is used:
// In an object method, this refers to the object.
const Person = {
  firstName: "Bimal",
  lastName: "Paudel",
  fullName: function() {
    return`${this.firstName} ${this.lastName}`;   // this refers to the 'Person' object since fullName method is a method of Person obeject.
  }
};
console.log(Person.fullName());   // Bimal Paudel


// Alone, this refers to the global object.
//  let x = this;    # When used alone, this refers to the global object, because this is running in the global scope.
// In a browser window the global object is [object Window]:


// In a function, this refers to the global object.
function myFunction() {
  return this;    // 'this' refers to the global object.
}


// In a function, in strict mode, this is undefined.
/* "use strict";
 function myFunction() {
 return this;      // this'll cause an error.
 }
*/

// In an event, this refers to the element that received the event.
// In HTML event handlers, this refers to the HTML element that received the event:
/* 
 <button onclick="this.style.display='none'">
  Click to Remove Me!
</button> 
*/ 

// Methods like call(), apply(), and bind() can refer this to any object.
// for these methods, refer the documentation / w3school
