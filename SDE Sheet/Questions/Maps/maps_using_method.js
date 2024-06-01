//HASHING FOR STRINGS   [specifically using ASCII Values cz wierd banana hai]

let string = "abcbadfkssff"
let n = string.length
let map = new Map()



for (let i = 0; i < n; i++){
    if(map.has(string.charCodeAt(i))){

        let temp = map.get(string.charCodeAt(i))
        map.set(string.charCodeAt(i), ++temp)

        continue
    }

    map.set(string.charCodeAt(i), 1)
}


//asking for letter
let q = 'a'
console.log(`${q} repeats: ${map.get(q.charCodeAt(0))}`)