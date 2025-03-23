/*
Coercion means TypeConversion or relating to it.
JScript converts the type of many primitives & objects to execute operations (like + or -)
The logic of how JScript handles type conversion underneath eveything is called Coercion.
*/

//If you can tell the ouputs of the given below questions then you know coercion. Refer to ECMAScript.

let obj1 = {}
console.log(18 - obj1)

console.log(18 + obj1)

console.log("18" + obj1)

console.log(typeof NaN)

console.log(undefined == null)

console.log(typeof +"10")