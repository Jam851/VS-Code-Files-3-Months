console.log("Module is running")

let a = b = 6

Sum(a, b)
function Sum(a, b){
    console.log(a + b)
}

module.exports = Sum    //Sum will now be exported