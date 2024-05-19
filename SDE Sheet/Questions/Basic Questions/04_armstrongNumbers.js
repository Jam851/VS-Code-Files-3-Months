//Armstrong number - The addition of the cube of its individual digits results in the original number

let originalNumber = 371
let originalNumberCopy = originalNumber
let armstrongNumber = 0

//Solution Logic
while (originalNumberCopy > 0){
    let remainder = originalNumberCopy % 10

    armstrongNumber += Math.pow(remainder, 3)
    
    originalNumberCopy = Math.floor(originalNumberCopy / 10)
}


//Console Statements
console.log(`Original Number: ${originalNumber} | Armstrong Number: ${armstrongNumber}`)

if (originalNumber == armstrongNumber){
    console.log("Armstrong Status: True")
} else {
    console.log("Armstrong Status: False")
}