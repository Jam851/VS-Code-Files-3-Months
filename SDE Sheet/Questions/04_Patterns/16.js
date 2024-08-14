let n = 5
let alphabeticalArray = ["A","B","C","D","E","F","G","H"]


for (let i = 0; i<n-1; i++){

    let stringToPrint = ""

        for (let j=n-1; j>i; j--){
            stringToPrint += " "
        }


    let counter = 0

        for (let j = 0; j<=i; j++){
            stringToPrint += alphabeticalArray[counter]
            counter++
        }

        counter--

        for (let j = 0; j<i; j++){
            counter--
            stringToPrint += alphabeticalArray[counter]
        }

    console.log(stringToPrint)
}





//ABCDE wall
// for (let i = 0; i<n; i++){

//     let stringToPrint = ""
//     let counter = 0

//         for (let j = 0; j<=i; j++){
//             stringToPrint += alphabeticalArray[counter]
//             counter++
//         }

//     console.log(stringToPrint)
// }