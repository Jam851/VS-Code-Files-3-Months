// const arr = [1,2,4,7,7,5]
const arr = [2]

let smallest, second_smallest
let largest, second_largest

smallest = arr[0], second_smallest = arr[1]
largest = arr[0], second_largest = arr[1]


for(let i = 1; i<arr.length; i++){
    if(arr[i] < smallest){ 
        second_smallest = smallest
        smallest = arr[i]
    }   else if (arr[i] < second_smallest && arr[i] != smallest){
        second_smallest = arr[i]
    }

    if(arr[i] > largest){
        second_largest = largest
        largest = arr[i]
    }   else if (arr[i] > second_largest && arr[i] != largest){
        second_largest = arr[i]
    }
}
//CONDITION IF ARR.LENGTH IS 1
if(arr.length == 1){
    smallest = arr[0], second_smallest = -1
    largest = arr[0], second_largest = -1
}


console.log("Small-s: "+smallest+" & "+second_smallest)
console.log("Large-s: "+largest+" & "+second_largest)