function name1(){
    let username = "Kunal"
    // console.log(username + " at lvl 1")

    function name2(){
        // console.log(username + " at lvl 2")
    }
    name2()
}

// console.log(username + " at lvl 0")
name1()

const obj1 = {
    hello: "hi",
    name: "whatsup"
}

const obj2 = new Object(obj1)

console.log(obj1)

obj2.hello = "changed"
console.log(obj2)
console.log(obj1)