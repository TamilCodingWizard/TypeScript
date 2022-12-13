// TypeScript Arrays

//Implicit
// let numSample = [1,2,3]
// let strSample = ['a','b','c']
// let boolSample = [true,false]

//Explicit
// let numSample:number[] = [1,2,3]
// let strSample:string[] = ['a','b','c']
// let boolSample:boolean[] = [true,false]

//Declare and Assign later
// let numSample:number[] = [];
// let strSample:string[] = [];
// numSample.push(1)
// strSample.push('d')

//read only
let numSample:readonly number[] = [1,2,3]

numSample.push(4)