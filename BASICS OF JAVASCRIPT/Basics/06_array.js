let arrayofcolors = ['Narangi', 'Neela']
// created an array

console.log(arrayofcolors);

arrayofcolors[2] = 2;
// dynamically added an element to the array
// 2 is the index in the array

arrayofcolors[1] = 'Safed';
// changed 1st index element

console.log(arrayofcolors);

console.log(arrayofcolors.length)
// length function of array

let colorpicked = arrayofcolors[0];
console.log(colorpicked)



//Destructuring in Arrays
const arr = [56, "Hello"]
const [num, msg] = arr

console.log(`\nElements of array are: ${num} & ${msg}`)