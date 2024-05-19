let originalNumber = 10400 
let reversedNumber = ""

let loopChecker = true
let loopCounter = 0     //to keep a check on the power of 10 used in the iteration

let previousRemainder = 0   //to minus from remainder in the loop in the next iteration

while (loopChecker){

    loopCounter++
    let remainder = originalNumber % Math.pow(10,loopCounter)
    
    if (remainder == 0){    //to remove any 0's at the end of original number from being included in the reversedNumber
        continue
    }

    let currentRemainder = remainder    //remainder needs to stay the same so it could be used in the next iteration as it is

    if(loopCounter != 1){
        currentRemainder = currentRemainder - previousRemainder         //turning any remainder value into a multiple of 10
        currentRemainder = currentRemainder / Math.pow(10, (loopCounter - 1))      //dividing the remainder value that is a multiple of 10 with appropriate power of 10 to get the next 10s place in the original integer
    }

    reversedNumber += currentRemainder  //recording the appropriate integer value to the reversed order

    previousRemainder = remainder       //updating the previous remainder to be used for next iteration

    if(remainder == originalNumber){        //loop end condition
        loopChecker = false
        console.log(Number(reversedNumber))
    }
}