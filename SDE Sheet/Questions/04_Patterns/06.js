for (let i = 0; i<5; i++){

    let stringToPrint = ""
    let numbersToBeIncremented = 1

        for (let j = 4; j>=i; j--){
            stringToPrint += numbersToBeIncremented
            numbersToBeIncremented++
        }
        
    console.log(stringToPrint)
}