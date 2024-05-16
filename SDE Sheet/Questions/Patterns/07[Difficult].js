let rowForj = 4
let oddNumbers = 1


for (let i = 0; i<5; i++){
    let stringToBePrinted = ""
    
    for (let j = rowForj; j != 0; j--){
        stringToBePrinted += " "
    }
    rowForj--

    let forloopOddNumbers = oddNumbers
    
    for (let k = i; k < forloopOddNumbers; k++){
            stringToBePrinted += "*"
    }

    oddNumbers = oddNumbers + 3

    console.log(stringToBePrinted)
    
}