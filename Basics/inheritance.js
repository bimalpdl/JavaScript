//To create a class inheritance, use the extends keyword.
//A class created with a class inheritance inherits all the methods from another class:

class Car {    // parent class 
  constructor(brand) {  
    this.carName = brand;
  }

  showDetails() {     // method inside a class, NOTE: we don't need to use 'function' keyword here.
    return `Carname: ${this.carName}`;
  }
} 

class Model extends Car {     // derived class 'Model'
  constructor(brand , model) {
    // The super() method refers to the parent class.
    super(brand);     // passes the value from parameter 'brand' to the constructor of class 'Car'
    // By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

    this.modelName = model;    // new property of 'Model' class.
    }

  fullDetail() {
    return `${this.showDetails()}, model: ${this.modelName}`;     // accessing the method of parent class.
  }

}

let myCar = new Model("Tesla", "Y");    // object of class 'Model'
console.log(myCar.fullDetail());
