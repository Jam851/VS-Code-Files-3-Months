let string = ""

for (let i = 0; i<10; i++){
    if(i == 4){
        continue        //goes back to iterate & check condition & goes back in the loop skipping the lines after
        console.log("4 HIT")
    } else{
    string += i
    string += " "
}
}

console.log(string)