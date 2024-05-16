let numberFlag = true

for (let i = 0; i<5; i++){
    let stringToBePrinted = ""

    let flagInNumberForm = Number(numberFlag)
    let numberForInsideLoopIncrementation = flagInNumberForm

    for (let j = 0; j<=i; j++){
        
        stringToBePrinted += numberForInsideLoopIncrementation
        
        if (numberForInsideLoopIncrementation == 0){
            numberForInsideLoopIncrementation = 1
        } else {
            numberForInsideLoopIncrementation = 0
        }
        //if statement - to alternate between 1 & 0 inside the row
        
    }

    numberFlag = !(numberFlag)
    //for incrementing 1 & 0 at the start of each row 

    console.log(stringToBePrinted)
}