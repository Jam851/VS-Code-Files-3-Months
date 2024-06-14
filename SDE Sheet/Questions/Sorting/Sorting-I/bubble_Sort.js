/*BUBBLE SORT ->
    the biggest no. is put in the back, by bubbling it to the back
    the iteration size for array gets smaller as the largest numbers are arranged in order in the back of array
    bubbling is done by comparing adjacent elements of the array & forcing big number in the back
    [{5, 3, 2, 8, 6}]     ->      [{5, 3, 2, 8}, 6]     ->      [{5, 3, 2}, 8, 6]     till      [{5, 3}, 2, 8, 6]
*/

// let arr = [5, 3, 2, 8, 6]
let arr = [1, 2, 3, 4, 5]           //best case
let n = arr.length

//from n-1 to 1 -> first loop
for (let  i = (n-1); i > 0; i--){
    for (let  j = 0; j < i; j++){

        if (arr[j] > arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }

}

console.log(arr)