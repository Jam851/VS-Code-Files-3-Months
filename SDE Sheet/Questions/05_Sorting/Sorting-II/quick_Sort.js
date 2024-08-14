//create array
//using recursion make quick sort algo work
//base case
//pick first element [pivot] & place small on the left & larger on the right
//swap larger from left & smaller from right
//on border put first element [swap with small number side]
//one example with multiple same no.s
 

// const array = [5, 2, 9, 1, 6, 12, 7]
const array = [5, 2, 9, 1, 6, 12, 7, 5]      //5 is present twice

const quick_sort = function(arr, first, last){
    //BASE CASE
    if(first >= last) return

    //POINTERS
    let i = first + 1
    let j = last
    let pivot = first

    //loop start for this whole process underneath & BASE CASE
    while(i <= j){

        //loop to find i & stop [Stops when element of i index is greater than pivot]
        while(arr[i] <= arr[pivot] && i <= last){
            i++
        }

        //loop to find j & stop
        while(arr[j] > arr[pivot] && j > first){
            j--
        }
    
        //swap with base condition
        if(i < j){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        } else {
            break
        }
    //loop repeats until 'i>j'
    }

    //coming out of big loop we have finally found the border, so replace smaller element reference 'j' with pivot
    let temp = arr[j]
    arr[j] = arr[pivot]
    arr[pivot] = temp
    pivot = j

    //call recursion for left & right
    quick_sort(array, first, pivot-1) //pivot -1
    quick_sort(array, pivot+1, last) //pivot +1

}




//FUNCTION CALL
const first = 0
const last = array.length - 1
quick_sort(array, first, last)

console.log(array)