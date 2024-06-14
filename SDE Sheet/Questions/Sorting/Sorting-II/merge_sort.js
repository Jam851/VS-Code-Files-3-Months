//create array of 8 [then of 9]
//using recursion - merge sort -> divide & merge
//pointers for first & last element of array that is divided [also mid]
//temp array to be used when merging
//base case


// const array = [1, 5, 3, 9, 8, 2, 5, 12]               //[8 elements]
const array = [1, 5, 3, 9, 8, 2, 5, 12, 0]         //[9 elements]

const merge_sort = function(array, first, last){
    //BASE CASE
    if(first >= last){
        return
    }

    let mid = Math.floor((first + last)/2)
    
    //MERGE SORT RECURSION
    merge_sort(array, first, mid)       //LEFT
    merge_sort(array, mid+1, last)      //RIGHT
    merging(array, first, last, mid)
}


const merging = function(array, first, last, mid){
    //POINTERS FOR COMPARISON
    let left = first
    let right = mid+1

    let temp = []

//COMPARING ARRAY ELEMENTS & PUSHING THEM INTO TEMP ARRAY
    while(left <= mid && right <= last){
        if(array[left] < array[right]){
            temp.push(array[left])
            left++
        } else {
            temp.push(array[right])
            right++
        }
    }

//PUHSHING REMAINING VALUES INTO TEMP ARRAY
    if(array[left] && left <= mid){
        while(left <= mid){
            temp.push(array[left])
            left++
        }
    } else {
        while(right <= last){
            temp.push(array[right])
            right++
        }        
    }

//ACTUALLY PUSHING TEMP ARRAY ELEMENTS BACK ONTO THE ORIGINAL ARRAY
    for(let i = 0; i<temp.length; i++){
        array[first] = temp[i]
        first++
    }
}



//FUNCTION CALL
const first = 0
const last = array.length - 1
merge_sort(array, first, last)
console.log(array)