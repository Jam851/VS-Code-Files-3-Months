//In javascript there are only 2 broad types of memories used for passing values
//STACK: Primitive Datatypes    &    HEAP: Non-Primitive Datatypes

//Stack is when the data is directly copied to pass its data to a variable or to a function as its argument
//Changes in the copied data does not cause any changes in the original data

//Heap is when the data is indirectly passed. This is done by passing a reference to the original data. For a variable or as an argument to a function
//Any changes made through this reference will also cause changes to be made in the original data.

//for example ->

//STACK
let data = 20
dataCopy = data

dataCopy = 40
console.log(data)



//HEAP
let object = {
    "first": "data is original"
}
let objectCopy = object

objectCopy["first"] = "data is inauthentic"
console.log(object)
