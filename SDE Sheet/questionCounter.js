function TotalQuestions(n){
    const str = n
    const strlength = str.length
    let counter = Ccounter = 0
    // let Ccounter = 0

    for(let i = 0; i<strlength; i++){
        if(str[i] == "."){
            counter++
        } else if (str[i] == ","){
            Ccounter++
        }
    }
    console.log(counter + (Ccounter*0.1))
}

const n = ""
TotalQuestions(n)