// Creating an Object
let Box = {
 Reciever: 'Priya',   
 Length: 20,
 Breadth: 12,
}

//Printed the Box Object
// console.log(Box);

//Dot notation method
Box.Reciever = 'Shreya';

//Bracket method
Box['Length'] = 40;

// console.log(Box);




//valueOf()
//by default: returns you the same object. Can be overridden.
// console.log(Box.valueOf())                     //{ Reciever: 'Shreya', Length: 40, Breadth: 5 }
// console.log(typeof Box.valueOf())             // object
Box.valueOf = function() {return 20}
// console.log(Box.valueOf())                   //20
// console.log(typeof Box.valueOf())            //number


//toString()
//by default: All objects have a string of "[object Object]" set to there 'toString()' value. It can be overridden.
// console.log(Box.toString())                   //[object Object]
// console.log(typeof Box.toString())            //string
Box.toString = function() {return 5}
// console.log(Box.toString())                    //5
// console.log(typeof Box.toString())             //number