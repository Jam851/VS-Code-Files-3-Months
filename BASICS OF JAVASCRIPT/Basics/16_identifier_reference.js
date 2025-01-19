// IDENTIFIER (Variable Name)
// Name used in code to access a value
// Refers directly to the value. It doesn't hold the value directly but is used to refer to the value stored in memory.
// Stores Primitive Values: Immutable data that cannot be changed once set. examples of primtive values are Number, String, Symbol, Bool, etc

let x = 10;
let y = x; // Copy of value
y = 20;

console.log(x); // 10 (x is not affected by changes to y)
console.log(y); // 20




// REFERENCE
// The actual pointer to the memory location
// Points to the memory address of the object.

let obj1 = { key: "value" };
let obj2 = obj1; // Reference to the same object
obj2.key = "new value";

console.log(obj1.key); // "new value" (both refer to the same object so change is reflected in both)
