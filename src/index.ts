// TypeScript - Data Modifiers 

// Public, Protected, private

//readonly

class Person {
     name:string

    constructor(name:string) {
        this.name = name
    }
}

class Employee extends Person {

    print = () => {
        console.log(this.name)
    }

    changeName = (name:string) => {
        this.name = name
    }
}

let empObject = new Employee('John')

empObject.print()

// empObject.changeName('Test')

// empObject.print()

// empObject.name = 'Testing'

// empObject.print()








// read only