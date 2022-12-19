// TypeScript - Interfaces

//Interface - Only work with Objects

interface User {
    name:string,
    age:number
}

const user:User = {
    name:'Test',
    age:40
}

//function Interface
interface Function {
    (x:number,y:number): number
}

let add:Function = (p1:number,p2:number) => {
    return p1 + p2
}


//Extending Interfaces

interface Employee extends User {
    employeeId:number
}

const employee:Employee = {
    name:'John',
    age:30,
    employeeId:100
}


//type cant be replaced with

type StrOrNum = string | number

let errorCode:StrOrNum = '401'

errorCode = 401



