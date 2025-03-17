console.log("1" + "2") //doesnt not convert with arithmatic operations
console.log("1" > "2") //converts string number into number data type for comparison only


console.log(2 != 1)


let output = "Hello "
output += "Kunal"
output += "!!!"
console.log(output)
//here, output = output + "Kunal " is occuring


console.log(null > 0)   //converts null to 0 cz of comparison
console.log(null == 0)  //does not convert [wierd behaviour]
console.log(null >= 0)  //converts.....

console.log("2" == 2)   //converts string to number
console.log("2" === 2)  //triple equal checks data type also but does not convert