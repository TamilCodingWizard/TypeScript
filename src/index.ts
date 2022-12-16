// TypeScript - Tuples or Typed Array

//Array
// let userArray = ['John',30,true]

// userArray[0] = 40
// console.log(userArray)

//Tuple

// let userTuple:[string,number,boolean] = ['John',30,true]

// userTuple[0] = 'Test'

// userTuple.push(4)

// console.log(userTuple)


//readonly
// let userTuple: readonly [string,number,boolean] = ['John',30,true]

//Named

let userTuple: readonly [userName:string,age:number,isEng:boolean] = ['John',30,true]


//Accessing Named Tuple / Destructuring

let [userName,age,isEng] = userTuple


console.log(userName)

