/*INSERTION SORT ->
    the 'insertion' comes from introducing a new element in each iteration of loop.
    in each iteration of loop the targeted array's length increases until the end of the array
    the targeted array's adjacent elements are compared, unlike bubble sort here- the comparison starts from the end to the start [i = 1] of the array.
    In each iteration of loop, by the end of that specific iteration the targeted array is sorted, & a new element is introduced 'to be' sorted within the array.   [since targeted array are smaller at first they get sorted easily]
    new element when inserted at the back of the array slowly moves to the front of the array as it gets compared with its adjacent elements
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