/*SELECTION SORT -> 
    minimum no. select karte hai array mei
    after storing the minimum no. in a variable, swap it with the first index element of array  [of current iteration]
    the elements from the start will become ascending in order, while the array becomes smaller
    [{5, 3, 2, 8, 6, 4}]     ->     [5, {3, 2, 8, 6, 4}]     ->     [5, 3, {2, 8, 6, 4}]    till    [5, 3, 2, 8, {6, 4}]
*/

let arr = [5, 3, 2, 8, 6, 4]
// let arr = [1, 2, 3, 4, 5]           //best case
let n = arr.length

for (let  i = 0; i <= n-2; i++){
    let minimum = arr[i]
    for (let  j = i; j <= n-1; j++){

        if (arr[j] < minimum){
            minimum = arr[j]
        }

        arr[arr.indexOf(minimum)] = arr[i]
        arr[i] = minimum
    }
}

console.log(arr)