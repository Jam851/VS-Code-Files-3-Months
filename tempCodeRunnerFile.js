
Object.defineProperty(user, 'age', {enumerable: false})
console.log(Object.getOwnPropertyDescriptor(user, 'age'))