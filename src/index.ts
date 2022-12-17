// TypeScript - Type Casting

//syntax
// as or <>

//unknown string to string
let x:unknown = 'Hello'

console.log((x as string).length)
console.log((<string>x).length)

//unknown number to string
let y:unknown = 20

console.log((y as string).length)

//DOM

let input = document.querySelector('input') as HTMLInputElement
let inputValue = input.value