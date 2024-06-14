// -------------------------------------------------------NUMBERS-------------------------------------------------------------

// const score = 400

const balance = new Number(100)
// console.log(balance)                     //[Number: 100]


//VALUEOF
// console.log(balance.valueOf())           //100           Gives value within the object
// Works only on objects created with 'new' keyword.

//TOSTRING
// console.log(balance.toString().length)      //3

//TOFIXED
// console.log(balance.toFixed(1))             //100.0         Returns number with specified no.s of '0' after decimal


//TOPRECISION
// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(5))        //123.90        Returns number within set digits by rounding off
// console.log(otherNumber.toPrecision(2))        //1.2e+2        Or converting to exponential       [Since '.' decimal was present it must be included in the conversion]


//TOLOCALESTRING
// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-UK'))     //1,000,000
// console.log(hundreds.toLocaleString('en-IN'))     //10,00,000


// -------------------------------------------------------MATH-------------------------------------------------------------

