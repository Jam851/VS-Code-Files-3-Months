let n = 4;

for (let i = 0; i<n; i++){
    let stringToPrint = ""

    if (i == 0 || i == (n-1)) {
        for (let j = 0; j<n; j++){
            stringToPrint += "*"
        } 
    } else {
        stringToPrint += "*"
        for (let k = 0; k < (n-2); k++){
            stringToPrint += " "
        }
        stringToPrint += "*"
    }

    console.log(stringToPrint)
}