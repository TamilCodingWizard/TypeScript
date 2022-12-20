// TypeScript - Class

// simple class
class User {
    id:number 

    constructor(x:number) {
        this.id = x
    }
}

let userobject = new User(10)

console.log(userobject.id)

// Interface

interface PersonInterface {
    id:number,
    name:string
}

interface AddressInterface {
    city:string    
}


// class implements interface

class Person implements PersonInterface,AddressInterface {
    id:number
    name:string
    city:string

    constructor(id:number,name:string,city:string) {
        this.id = id
        this.name = name
        this.city= city
    }

    getName = () => {
        return this.name
    }

}

let person = new Person(100,'John','Chennai')
console.log(person.name)
console.log(person.getName())


// class implements multiple interfaces


//extends

class Student extends Person {
    studentId:number = 101

    print() {
        console.log(`name is ${this.name} and id is ${this.studentId}`)
    }

}


let student = new Student(100,'Testing','Chennai')

student.print()