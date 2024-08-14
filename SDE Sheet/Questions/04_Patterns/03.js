

for (let i = 0; i<5; i++){

    let stringToPrint = ""
    let numbersToIncrement = 0

        for (let j = 0; j<=i; j++){
            numbersToIncrement++
            stringToPrint += numbersToIncrement
        }
        
    console.log(stringToPrint)
}