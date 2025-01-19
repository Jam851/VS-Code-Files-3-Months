//Hoisting Concept in Js is a byproduct of how Execution Contexts are used to execute code.
//Hoisting is a concept in which the interpreter appears to move some code to the top of their scope before their declaration 
//like functions [function (Name){}], variables [only var]

//From the line in which let & const declarations are hoisted till the line in which these declarations are initialized, exists the Temporal Dead Zone. 
//In which they are inaccessible and throws an error ->  Reference Error - Cannot access before initialization.


getName()               //hoisted
// getMsg()             //hoisted but not initialised. Throws Error. It is undefined until its declaration is executed.
console.log(x)          //hoisted but not initialised.
// console.log(y)       //Placed in Temporal Dead Zone (TDZ) until its declaration is executed.



function getName(){
    console.log("Alex")
}

// var getMsg = () => {
//         console.log("Hello")
//     }

var x = 2
let y = 2