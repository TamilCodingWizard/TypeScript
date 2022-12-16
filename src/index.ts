// TypeScript - Functions

// Function Type
//let greet:Function;

let greet = () => {
    return "Hello"
}

// Function with Parameters

// let add = (a:number,b:number) => {
//     return a + b;
// }

// console.log(add(10,10))

//Function with Return type

// let add = (a:number,b:number):number => {
//     return a + b;
// }

// console.log(add(10,10))

//Function with Union Type params

// let add = (a:number,b:number,c:(string | number)):number => {
//     if (typeof c === 'number') {
//         return a + b + c;
//     }
//     return a + b;
// }

// console.log(add(10,10,12))


//Function with optional params 

// let add = (a:number,b:number,c?:(string | number)):number => {
//     if (typeof c === 'number') {
//         return a + b + c;
//     }
//     console.log(c)
//     return a + b;
// }

// console.log(add(10,10))


// Function with default value

// let add = (a:number,b:number,c:(string | number) = 10):number => {
//     if (typeof c === 'number') {
//         return a + b + c;
//     }
//     console.log(c)
//     return a + b;
// }

// console.log(add(10,10))

// Function with Type alias params

type StrOrNum = string | number

// let add = (a:number,b:number,c:StrOrNum = 10):number => {
//     if (typeof c === 'number') {
//         return a + b + c;
//     }
//     console.log(c)
//     return a + b;
// }

// console.log(add(10,10))

type User = {
    name:string,age:number
}
let printObject = (user:User) => {
    console.log(`name is ${user.name} and age is ${user.age}`)
}

printObject({name:'Test', age:30})

// rest params

// let add = (a:number,b:number,...c:number[]):number => {
    

//     console.log(c)
//     let d = c.reduce((x,y) => x+y,0)
//     return a + b + d;
// }

// console.log(add(10,10,1,1,2,3))


// Function signature

let add : (x:number,y:number,...z:number[]) => void;

add = (a:number,b:number,...c:number[]):number => {
    

    console.log(c)
    let d = c.reduce((x,y) => x+y,0)
    return a + b + d;
}

console.log(add(10,10,1,1,2,3))