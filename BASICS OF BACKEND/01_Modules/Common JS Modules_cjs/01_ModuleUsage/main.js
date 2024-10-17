require("./module.js")

let a = 20
let b = 40

Sum(a, b)   //Throws error that function is not defined

//Sum function does not run in main.js because modules using required() protect their variables & functions.
//To use them the specific function or variable needs to be explicitly exported from modules.js & imported into the file that it is to be used in.