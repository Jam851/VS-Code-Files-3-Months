let n = 4

for (let i = 0; i<(2*n)-1; i++){

    let stringToPrint = ""
    for (let j = 0; j<(2*n)-1; j++){
        //Distances
        let fromTop = i
        let fromLeft = j
        let fromBottom = ((2*n) - 2) - i
        let fromRight = ((2*n) - 2) - j

        stringToPrint += 4 - Math.min(Math.min(fromTop, fromBottom) , Math.min(fromLeft, fromRight)) + " "
    }

    console.log(stringToPrint)
}