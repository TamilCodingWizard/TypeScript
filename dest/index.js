"use strict";
// TypeScript - Functions
// Function Type
//let greet:Function;
let greet = () => {
    return "Hello";
};
let printObject = (user) => {
    console.log(`name is ${user.name} and age is ${user.age}`);
};
printObject({ name: 'Test', age: 30 });
// rest params
// let add = (a:number,b:number,...c:number[]):number => {
//     console.log(c)
//     let d = c.reduce((x,y) => x+y,0)
//     return a + b + d;
// }
// console.log(add(10,10,1,1,2,3))
// Function signature
let add;
add = (a, b, ...c) => {
    console.log(c);
    let d = c.reduce((x, y) => x + y, 0);
    return a + b + d;
};
console.log(add(10, 10, 1, 1, 2, 3));
