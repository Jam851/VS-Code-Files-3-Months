//OPTIMAL SOLUTION
//When finding divisors for a given number, the divisors from the left side i.e the smaller value side will never be greater than 
//the square root of the original number. By using this limit we can decrease the Time Complexity from O(N) to O(SqRt(N)) 
//which is exponentially lesser.
//              36 = 4 * 9      left side number is always lesser than sq root of original number or equal to it
//              36 = 6 * 6      this is the universal extent since SqRt(36) is 6
//              36 != 7 * 7

let N = 36
let Array = []

for (let i = 1; i*i <= N; i++){     //condition is mathematically true

    if (N % i == 0){
        Array.push(i)           //to push all left side divisors

        if (N / i != i){        //condition to prevent same number divisors to get pushed
            Array.push(N / i)       //to include right side or large in value divisors
        }
    }
}

console.log(Array)




//MY SOLUTION
let originalNumber = 36
let divisorsArray = []

for (let i = 1; i<=originalNumber; i++){

    if (originalNumber % i == 0){
        divisorsArray.push(i)
    }

}

console.log(divisorsArray)