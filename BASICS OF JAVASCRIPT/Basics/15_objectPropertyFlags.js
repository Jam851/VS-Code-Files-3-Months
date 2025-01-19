/*
Property flags ->
Object properties, besides key-value, have three special attributes (so-called “flags”):

writable – if true, the value can be changed, otherwise it’s read-only.
enumerable – if true, then listed in loops, otherwise not listed.
configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
*/

const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43,
    logDetails() {
        console.log(`${this.name} is ${this.age} year(s) old!`)
    }
}

console.log(Object.getOwnPropertyDescriptor(user, "name"))      //Enumerable: true

Object.defineProperty(user, 'age', {enumerable: false})         
console.log(Object.getOwnPropertyDescriptor(user, 'age'))       //Enumerable: false

//age property is not iterated on because of 'false' enumerable descriptor
for(let key in user){
    console.log(key)
}