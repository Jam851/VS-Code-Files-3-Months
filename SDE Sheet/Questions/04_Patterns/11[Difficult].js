for (let i = 0; i<4; i++){

    let stringToPrint = ""
    let numbersToIncrement = 0

        for (let j = 0; j<=i; j++){
            numbersToIncrement++
            stringToPrint += numbersToIncrement
        }

        for (let k = 2*(4-i-1); k>0; k--){
            stringToPrint += " "
        }
        
        for (let l = i; l>=0; l--){
            let numberToBeAdded = l+1
            stringToPrint += numberToBeAdded
        }
        
    console.log(stringToPrint)
}