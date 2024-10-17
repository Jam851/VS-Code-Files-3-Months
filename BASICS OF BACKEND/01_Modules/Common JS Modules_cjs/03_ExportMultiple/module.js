console.log("Module is running")

let a = b = 6

Sum(a, b)
function Sum(a, b){
    console.log(a + b)
}

let name = "Unga-Bunga"
let emoji = "0_0"
let altName = "Will"

module.exports = {
    emoji,          //Automatically takes 'emoji' variable
    Sum: Sum,
    name: name
}

module.exports.altName = altName        //Since it is an empty object this is another way of importing