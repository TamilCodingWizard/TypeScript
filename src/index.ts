// TypeScript - Generics

//Resuable code

const toArray = (x:any,y:any,z:any) => {
    return [x,y,z]
}

let arr = toArray('1','2',3)

console.log(arr)
// Generics

const toArrayGeneric = <T>(x:T,y:T,z:T) => {
    return [x,y,z]
}

let genericArray = toArrayGeneric<number>(1,2,3)

console.log(genericArray)

// Multiple Types

// let printValues = <X,Y,Z>(a:X,b:Y,c:Z) => {
//     console.log(`a is ${typeof a} b is ${typeof b} c is ${typeof c}`)
// }

// printValues(1,"one",true)

// Type and Generics Together


// Multiple Types

let printValues = <X,Y,Z>(a:X,b:Y,c:Z,d:string) => {
    console.log(`a is ${typeof a} b is ${typeof b} c is ${typeof c}`)
}

printValues(1,"one",true,'Hi')