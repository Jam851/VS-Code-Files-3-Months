let N = 12
let Array = []
let check = true
for (let i = 2; i*i <= N; i++){     //condition is mathematically true

    if (N % i == 0){
        if (N / i != i){
            console.log(`Divisible by: ${i} & ${N/i}\nPrime Status: False`)
        }
        check = false
        break
    }
}

if (check){
    console.log(`Prime Status: True`)
}