let Boxes = ["2x4", "4x4"]
Boxes[4] = "19x16"
console.log(Boxes)      // [ '2x4', '4x4', <2 empty items>, '19x16' ]
console.log(Boxes.length)   //only 3 elements filled yet the length is 5


let keys = Object.keys(Boxes)
console.log(keys)       // [ '0', '1', '4' ]
//in javascript an array is an object instead of an advanced datatype

