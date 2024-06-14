const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const values = () => {for (const index of myArr) {
//     console.log(index)
//     return index
// }
// }

// console.log(values())





let newval

const values = myArr.forEach(element => {
    // console.log(element)
    if (element <= 5){
         return element
    }
});
//function will always execute for each values of the array...          return does not end the whole forEach thing, only for the specific value
//forEach does not return the value of the array as it is, only executes the function for current array element     [returns undefined]
//it can return to any other variable but not the one you are using for storing forEach...  [inconvenient & creates more space for another variable]
//for 2nd pt we use other methods such as .filter for array, it is returnable   [& executes for each element of array]

console.log(values)

//for not returning = forEach(),       for returning = .filter()