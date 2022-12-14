// TypeScript Objects

//Implicit or Type Inference
// let employee = {
//     empName:'Test',
//     age:30,
//     isPermanent:true
// }

// employee.age = 31

// employee = {
//     empName:'testing',
//     age:31,
//     isPermanent:false,
// }

//Explicit

// type Employee = {
//     empName:String,age:number,isPermanent:boolean
// }

// let employee:Employee = {
//     empName:'Test',
//     age:30,
//     isPermanent:true,
// }



//Optionals

type Employee = {
    empName:String,age?:number,isPermanent:boolean
}

let employee:Employee = {
    empName:'Test',
    isPermanent:true,
}




