// TypeScript - Abstract Class

//Abstract class - Incomplete class

abstract class Person {
    abstract name:string

    abstract print():void
}

// Child class

class Student extends Person {
    name: string

    constructor(x:string) {
        super()
        this.name = x
    }

    print = () => {
        console.log(this.name)
    }
}

let studentObject = new Student('John')

studentObject.print()


// Abstract vs Interface

interface AddressInterface {
    city:string
}

//typeof

console.log('hi')