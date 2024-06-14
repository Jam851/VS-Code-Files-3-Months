"use strict";
// treat all JS code as newer version

//number dataType Range-> 2 to pwr 53
//null -> standalone value
//symbol dataTypes -> unique

console.log(typeof undefined)
//undefined type
console.log(typeof null)
//object type



let id = Symbol('123')      
// console.log(id)
let idNew = Symbol('123')
// console.log(idNew)

console.log(id == idNew)
//both variables are unique despite inputting the same symbols