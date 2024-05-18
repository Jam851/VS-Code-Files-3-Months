//Upper Half
for (let i = 5; i>0; i--){
let stringToPrint = ""

    //Left stars
    for (let j = i; j>0; j--){
        stringToPrint += "*"
    }
    
    //Middle Empty     
    for (let k = 5; k>i; k--){
        stringToPrint += "  "
    }

    //Right stars
    for (let j = i; j>0; j--){
        stringToPrint += "*"
    }
    console.log(stringToPrint)
}



//Lower Half
for (let i = 0; i<5; i++){
    let stringToPrint = ""

    //Left stars
        for (let j = 0; j<=i; j++){
            stringToPrint += "*"
        }

    //Middle Empty     
        for (let k = 5; k-1>i; k--){
            stringToPrint += "  "
        }

    //Right stars
        for (let j = 0; j<=i; j++){
            stringToPrint += "*"
        }

        console.log(stringToPrint)
    }