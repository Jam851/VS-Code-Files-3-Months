//EXECUTION CONTEXT
// Everything in JS happens in Execution Contexts [ECs]
// An EC is created in 2 phases -> 1) Memory Creation Phase   2) Code Execution Phase

// 1) Memory Creation Phase ->
// Js Interpreter goes through the whole code & allocates memory to all variables & functions.
// For variables it stores undefined. For Fns it stores the whole code within that fn

// 2) Code Execution Phase ->
// In code execution the code logic is executed line by line. 
// All variables are assigned their respective values. 
// Fns are not executed until they are called to be ran. When Fns are called they have their own EC created in the Call Stack.

// When a Fn is returned or the code to be ran is finished, the EC for it gets deleted from the Call Stack.




//LEXICAL ENVIRONMENT
// When an EC is created, its Lexical Environment is also created.
// lexical environment = local memory + lexical env of its parent
// lexical means hierarchal
// The act of looking in the parent lexical env when local memory doesn't have the required variable in a chain is called Scope Chaining.
// Each function when called to run has its own EC & Lexical Env.
//     draw CallStack, GEC & other EC diagram on your own by creating a function