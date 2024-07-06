
//SETTIMEOUT
new setTimeout(function(){
    console.log("Message of 1 sec delay")
}, 1000)


//PROMISES
// const First = new Promise(function(res, rej){
//     console.log("Hello")
//     res("World")
// }).then(function(msg){
//     console.log(msg)
//     return msg[0]
// }).then((letter)=>{
//     console.log(letter)
// }).catch(function(err){
//     console.log(err)
// }).finally(()=>{
//     console.log("Final Statment")
// })


// Using ASYNC & AWAIT 
const Second = new Promise(function(res, rej){
    setTimeout(function(){
        let error = false
        if(!error){
            res({username: "Kunal", Age: 20})
        } else{
            rej('ERROR DETECTED')
        }
    }, 1000)
})


//Async without try & catch
async function afterPromise(){
    const value = await Second
    console.log("Promise Waited For Successfully")
    console.log(value)
}
// afterPromise()


//Async with try & catch
async function afterProm(){
    try {
        const value = await Second
        console.log(value)
    } catch(err) {
        console.log(err)
    }
    console.log("Promise Waited For Successfully")
}
afterProm()

// TRY AWAIT FETCH TO WEBSITE PLEASE in async function
// await fetch 