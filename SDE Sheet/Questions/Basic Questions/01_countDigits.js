let originalNumber = 7789

let loopChecker = true
let loopCounter = 0

while (loopChecker){

    loopCounter++
    let remainder = originalNumber % Math.pow(10,loopCounter)

    if(remainder == originalNumber){
        loopChecker = false
        console.log(`Places in original number: ${loopCounter}`)
    }
}