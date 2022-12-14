"use strict";
// TypeScript - any Type or Dynamic Type
//Basic Types
let empName = 'Test';
console.log(empName);
empName = 30;
console.log(empName);
empName = true;
console.log(empName);
//Array
let anyArray = [];
anyArray.push('Test');
anyArray.push(30);
anyArray.push(true);
console.log(anyArray);
let employee;
employee = { empName: 'test', age: 30 };
employee = { empName: 30, age: 'test' };
console.log(employee);
// null and undefined
let x = null;
let y = undefined;
