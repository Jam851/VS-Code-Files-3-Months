//OPTIMAL SOLUTION
//Using the Euclidean Algorithm
//      GCD(n1, n2)        =      GCD((n1 - n2), n2)        where (n1 > n2)
//Striver reduced the formula into 
//      GCD(n1, n2)        =      GCD((n1 % n2), n2)        where (n1 > n2)

let u1 = 12, u2 = 20

while (u1 != 0 && u2 != 0){
    if (u1 > u2){
        u1 = u1 % u2
    } else {
        u2 = u2 % u1       
    }

    if (u1 == 0){
        console.log(`GCD is: ${u2}`)
    } else if (u2 == 0){
        console.log(`GCD is: ${u1}`)
    }
}






//OPTIMAL BRUTE FORCE SOLUTION
let t1 = 12, t2 = 20    //t1 < t2

//starting loop from the end to ensure always the highest common factor btw the both no.s is chosen as i
for (let i = t1; i >= 1; i--){      //loop starts from lowest number since a no higher than lower no will never be a common factor

    if (t1 % i == 0 && t2 % i == 0){        //ensures the factor is common btw both numbers chosen
        console.log(`The GCD is: ${i} \n`)
        break
    }

}







//MY SOLUTION
let n1 = 20, n2 = 12
let array1 = [], array2 = []

//First Number Divisors
for (let i = 1; i*i <= n1; i++){     //condition is mathematically true

    if (n1 % i == 0){
        array1.push(i)           //to push all left side divisors

        if (n1 / i != i){        //condition to prevent same number divisors to get pushed
            array1.push(n1 / i)       //to include right side or large in value divisors
        }
    }
}

//Second Number Divisors
for (let i = 1; i*i <= n2; i++){     //condition is mathematically true

    if (n2 % i == 0){
        array2.push(i)           //to push all left side divisors

        if (n2 / i != i){        //condition to prevent same number divisors to get pushed
            array2.push(n2 / i)       //to include right side or large in value divisors
        }
    }
}

console.log(array1)
console.log(array2)




//Function for finding highest number in an array
function highestNumber(array){
let highest = 0
for (let i = 0; i < array.length; i++){
    highest = Math.max(array[i], highest) 
    }
return highest
}



//Finding the common divisors in the two arrays and making a new array
let commonDivisorsArray = []

for (let i = 0; i<array1.length; i++){
    for (let j = 0; j<array2.length; j++){
        if (array1[i] == array2[j]){
            commonDivisorsArray.push(array2[j])
        }
    }
}

console.log(highestNumber(commonDivisorsArray))