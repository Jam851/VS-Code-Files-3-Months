const obj = require("./module.js")  //executes the 'module.js' file & returns the object to be stored in variable

let a = 20
let b = 40

obj.Sum(a, b)     //Runs the Sum function
console.log(obj.name)   //Prints the name
console.log(obj.emoji)
console.log(obj.altName)

console.log(module.exports)     //It is an empty object