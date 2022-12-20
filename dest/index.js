"use strict";
// TypeScript - Abstract Class
//Abstract class - Incomplete class
class Person {
}
// Child class
class Student extends Person {
    constructor(x) {
        super();
        this.print = () => {
            console.log(this.name);
        };
        this.name = x;
    }
}
let studentObject = new Student('John');
studentObject.print();
//typeof
console.log('hi');
