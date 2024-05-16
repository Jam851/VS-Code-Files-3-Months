let n = 5
let alphabeticalArray = ["A","B","C","D","E","F","G","H"]

for (let i = 0; i<n; i++){

    let stringToPrint = ""
    let counter = i

        for (let j = 0; j<=i; j++){
            
            stringToPrint += alphabeticalArray[counter]
        }

    console.log(stringToPrint)
}