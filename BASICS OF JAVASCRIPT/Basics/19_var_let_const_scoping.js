//let = block scope -   limited to the block in which they are declared. { }
//var = function scope -    limited to the scope of function in which they are declared, ignores block-level scope & so it leaks out of loops & conditionals.
//                          can be accessed from anywhere in its function scope.
//                          When declared outside of any function, it becomes part of the global scope.


//1) Scope Difference in let & var
function a(){
    if(true){
        var b = 10

        c()
        function c(){
            
        }
    }   

    //b inside its function scope
    console.log(b)
}
a()
//b outside of its function scope is undefined
// console.log(b)




//2) Accessibility
//x is in global scope & can be accessed anywhere.
console.log(x)
var x = 2

//y is in global scope but cannot be accessed before its initialization.
// console.log(y)
let y = 2




//3) Re-Declaration
//Same name identifiers cannot be re-declared within the same scope.
let i = 1
//let i = 2         //Throws error: Identifier 'i' has already been declared

//let i = 3
//var i = 4         //Throws error

//But for only var it does not throw any error
var j = 1
var j = 2




//4) 'const' 
// - has all the rules & restrictions of 'let' type declaration but unlike let, it needs to be initialised in the same line it is declared.
// Initialization later is allowed
let k
k = 10

// Is not allowed
// const m          //Throws error: SyntaxError: Missing initializer in const declaration
// m = 20