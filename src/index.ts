// TypeScript - TypeAlias

//Primitive Types
type UserName = string
type YesorNo = boolean
type Age = number

let userName:UserName = 'John'
let isEng:YesorNo = true
let age:Age = 30
//Array

type NamesArray = string[]

let userNames:NamesArray = ['a','b']

//Object

type User = {
    name:UserName,
    age:Age,
    isEng:YesorNo
}

let user:User = {name:'John',age:30,isEng:true}

//Union Type

type StrOrNum = string | number

let errorCode:StrOrNum = '401'

errorCode = 401
//Tuples

type NameAndAge = [name:string,age:number]

let userTuple:NameAndAge = ['John',30]
