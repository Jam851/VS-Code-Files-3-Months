let numbersToIncrement = 1
let n = 4
let stringToPrint = ""

for (let i = 0; i<n; i++){

        for (let j = 0; j<=i; j++){
            stringToPrint += numbersToIncrement + " "
            numbersToIncrement++
        }

    stringToPrint += "\n"
}

for (let i = 0; i<n+1; i++){
    stringToPrint += numbersToIncrement + " "
    numbersToIncrement++
}

console.log(stringToPrint)