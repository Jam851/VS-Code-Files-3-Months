const {sum , multiply, name, data} = require("./moduleFolder")

console.log(name)
sum(7, 3)
console.log(data)

//If "index.js" is the name of the collection of modules in the folder then it will be automatically selected on choosing the 'modulesFolder'
//If the name of the collection of modules is anything other than 'index.js', an error will be thrown that engine can't find the module