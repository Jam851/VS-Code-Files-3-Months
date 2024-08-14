for (let i = 0; i<5; i++){
    let stringToBePrinted = ""

    for (let j = 0; j<=i; j++){
        stringToBePrinted += "*"
    }
    console.log(stringToBePrinted)
}

for (let i = 4; i>0; i--){
    let stringToBePrintedReverse = ""

    for (let j = 0; j<i; j++){
        stringToBePrintedReverse += "*"
    }

    console.log(stringToBePrintedReverse)
}