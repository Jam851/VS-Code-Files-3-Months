let n = 5
let alphabeticalArray = ["A","B","C","D","E","F","G","H"]

for (let i = 0; i<n; i++){

    let stringToPrint = ""
    let counter = 0

        for (let j = n; j>i; j--){
            
            stringToPrint += alphabeticalArray[counter]
            counter++
        }

    console.log(stringToPrint)
}