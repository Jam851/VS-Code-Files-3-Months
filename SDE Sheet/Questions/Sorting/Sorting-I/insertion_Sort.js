/*INSERTION SORT ->
    the iteration size of the array gets bigger 
    & new elements are inserted each time       [since it increases by 1 index each time]
    new element gets compared with smaller indexed element, slowly moving to the front of the array
    when new element is inserted, the previous iteration of array is already in ascending order, so new element only gets inserted to the place it belongs (in a sense)
[{5, 4}, 3, 2, 1]     ->      [{4, 5, 3}, 2, 1]     ->      [{3, 4, 5, 2}, 1]       till        [{2, 3, 4, 5, 1}]
*/


function insertion_Sort(arr, n){
    for (let i = 0; i <= (n-1); i++) {
        let j = i
        while (j > 0 && arr[j-1] > arr[j]){
            let temp = arr[j-1]
            arr[j-1] = arr[j]
            arr[j] = temp

            j--
        }
        
    }
    return arr
}


let arr = [5, 4, 3, 2, 1]        //to check worst condition
// let arr = [1, 2, 3, 4, 5]               //to check best condition
let n = arr.length

console.log(insertion_Sort(arr, n))