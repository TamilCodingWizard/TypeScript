"use strict";
// TypeScript - Data Modifiers 
// Public, Protected, private
//readonly
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Employee extends Person {
    constructor() {
        super(...arguments);
        this.print = () => {
            console.log(this.name);
        };
        this.changeName = (name) => {
            this.name = name;
        };
    }
}
let empObject = new Employee('John');
empObject.print();
// empObject.changeName('Test')
// empObject.print()
// empObject.name = 'Testing'
// empObject.print()
// read only
