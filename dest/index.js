"use strict";
// TypeScript - Class
// simple class
class User {
    constructor(x) {
        this.id = x;
    }
}
let userobject = new User(10);
console.log(userobject.id);
// class implements interface
class Person {
    constructor(id, name, city) {
        this.getName = () => {
            return this.name;
        };
        this.id = id;
        this.name = name;
        this.city = city;
    }
}
let person = new Person(100, 'John', 'Chennai');
console.log(person.name);
console.log(person.getName());
// class implements multiple interfaces
//extends
class Student extends Person {
    constructor() {
        super(...arguments);
        this.studentId = 101;
    }
    print() {
        console.log(`name is ${this.name} and id is ${this.studentId}`);
    }
}
let student = new Student(100, 'Testing', 'Chennai');
student.print();
