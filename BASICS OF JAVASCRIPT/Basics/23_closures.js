//f1 ended & returned f2 which should also erase i variable from memory.
function f1(){
    let i = 0
    let j = 50
    function f2(){
        i += 1
        return i
    }

    return f2
}

//Since i is used in f2 function, JScript adds it to the scopes.closure property of the f2 function.
const res = f1()

//Through which i can be accessed by f2.
console.log(res())
console.log(res())
console.log(res())

//JScript will not add j variable in scope.closure for f2() because it was never used within f2.
//This can be observed in the properties of the function. [ add it to a object in browser, only then will it show all properties ]