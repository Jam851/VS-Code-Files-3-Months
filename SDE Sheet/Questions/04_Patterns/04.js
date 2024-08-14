let numbersToIncrement = 1


for (let i = 0; i<5; i++){
    let stringToPrint = ""

        for (let j = 0; j<=i; j++){
            stringToPrint += numbersToIncrement
        }

    console.log(stringToPrint)
    numbersToIncrement++
}