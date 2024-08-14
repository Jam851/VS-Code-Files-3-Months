//HASHING FOR NUMBERS

let arr = new Array(1, 1, 5, 4, 2, 4, 5, 5)
let n = arr.length
let hash_array = []

//Loop is necessary only bcz NaN show hoga varna harr index mei
for (let i = 0; i < n; i++){
    hash_array[arr[i]] = 0 
}

for (let i = 0; i < n; i++){
    hash_array[arr[i]] += 1 
}



let q = 2
console.log(`${q} repeats in the array: ${hash_array[q]} times`)
// console.log(hash_array[0])