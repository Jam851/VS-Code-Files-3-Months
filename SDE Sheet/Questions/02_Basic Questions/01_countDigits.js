//THE OPTIMAL SOLUTION ->
//The formula for the optimal sol. is 
//The integer part of - [ log10(N) + 1 ] represents the number of places that N has

// if N is 7789 then integer part from above formula is 4

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