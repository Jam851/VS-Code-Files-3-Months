const fs = require("fs")


setTimeout(()=> console.log("Timer Expired 1"))
setImmediate(()=> console.log("setImmediate 1"))
Promise.resolve("Promise").then(console.log)

//After Callback of Poll phase is sent to callstack, eventloop moves ahead to next phase
fs.readFile("./Doubts_to_Solve.txt", "utf-8", ()=> {
    fs.readFile("./Doubts_to_Solve.txt", "utf-8", ()=> console.log("File Reading CB 2"))
    setImmediate(()=> console.log("setImmediate 2"))
    setTimeout(()=>{console.log("Timer Expired 2")}, 0)
    process.nextTick(()=> {console.log("Tick 3")})
    console.log("File Reading CB 1")
})

//Tick has higher priority so it runs recursively
process.nextTick(()=> {
    process.nextTick(()=> console.log("Tick 2"))
    console.log("Tick 1")
})

console.log("Last Line of File")
