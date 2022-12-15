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

let add = (a:number,b:number,c:(string | number) = 10):number => {
    if (typeof c === 'number') {
        return a + b + c;
    }
    console.log(c)
    return a + b;
}

console.log(add(10,10))
