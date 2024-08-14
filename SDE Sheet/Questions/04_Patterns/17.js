let alphabetArray = ["A", "B", "C", "D", "E"]
let n = 5

for (let i = 0; i<n; i++){
    let stringToPrint = ""
    let arrayIndexToRecycle = (n-1) - i

    for (let j = 0; j<=i; j++){
        stringToPrint += alphabetArray[arrayIndexToRecycle]
        arrayIndexToRecycle++
    }
    
    console.log(stringToPrint)
}