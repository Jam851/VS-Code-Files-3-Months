let oddNumbers = 9


for (let i = 0; i<5; i++){
    let stringToBePrinted = ""
    
    for (let j = 0; j != i; j++){
        stringToBePrinted += " "
    }

    let forloopOddNumbers = oddNumbers
    
    for (let k = i; k < forloopOddNumbers; k++){
            stringToBePrinted += "*"
    }

    oddNumbers = oddNumbers - 1

    console.log(stringToBePrinted)
    
}