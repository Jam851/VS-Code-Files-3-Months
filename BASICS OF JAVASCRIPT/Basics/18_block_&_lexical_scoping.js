//BLOCK
// { } a block is compound statement. It is needed to provide multiple statements when JS expects only one.
// Simple Example: Conditionals


//Single Statement
let b = 10

//Compound Statement
{
    let a = 20
    console.log(a)
    console.log("Hello World")
}

//Why to use Blocks? ->
//Single Statement Conditioinal only executes one line
if(false) console.log(b);

//Using block we can execute multiple lines of code
if(false) {
    let a = 20
    console.log(a)
    console.log("Hello World")
};




//LEXICAL SCOPING
//Each EC has its own Lexical Env. & a lexical env. has lexical scoping meaning it can have more than one level of scoping.

const x = 50

{   
    let a = 100
    {
        let c = 2
        {
            c = 4
            var d = 30
        }
    }
}

//Difference between Block, Script/Window, Global Scoping.
//In the above code there is only one EC & one Lexical Env. & it has Lexical Scoping which also has Scope Chaining.
//Both Lexical Env. & Lexical Scoping experience scope chaining.
// x = Script/Window Scope - Distinctly different from Global Object / Global Scope.
// a, c = Block Scope - a block, c block & d block have scope chaining. That's why c is accessible in d Block.
// d = Global Scope - var type scope is function scope which ignores block scope. d is part of the global object / has global scope.




//SHADOWING
//The below code has two variables with the same identifier but have different scopes.
//So, different memory locations have been allocated to both & are distinct from one another. This is called Shadowing.

let a = 100
{
    //block scope a, shadows script scope a
    let a = 200
    console.log(a)
}

console.log(a)


//LEGAL SHADOWING
//let with block scope let,  
//var with   ,,   ,,   let,
//var with   ,,   ,,   var


//ILLEGAL SHADOWING
//var has higher lexical scope than script scope i of let, 
//meaning we are re-declaring an identifier in a higher lexical scope which does not make sense in scope chaining & throws an error.

let i = 1
{
    //block scope a, shadows script scope a
    // var i = 2
    console.log(i)
}

console.log(i)