let originalNumber = 4554
let originalNumberCopy = originalNumber
let reversedNumber = 0

//Solution Logic
while (originalNumberCopy > 0){
    let remainder = originalNumberCopy % 10

    reversedNumber = (reversedNumber*10) + remainder
    
    originalNumberCopy = Math.floor(originalNumberCopy / 10)
}


//Console Statements
console.log(`Original Number: ${originalNumber} | Reversed Number: ${reversedNumber}`)

if (originalNumber == reversedNumber){
    console.log("Palindrome Status: True")
} else {
    console.log("Palindrome Status: False")
}