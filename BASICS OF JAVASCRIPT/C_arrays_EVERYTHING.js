// const myArray = [0,1,2,3,4,5]
//Using 'const' keyword to declare array means that you cannot reassign the same variable to some other array.
//The variable is bonded with this array however changes can be made to this bonded array 

const myArray1 = new Array(1,2,3,4,5)

// console.log(myArray1[1])        //2
// console.log(typeof myArray1)    //object

//PUSH & POP
// myArray1.push(9)        //[ 1, 2, 3, 4, 5, 9 ]  Pushes 9 to the back of array
// myArray1.pop()          //9 gets removed from the end

//UNSHIFT & SHIFT
// myArray1.unshift(8)     //[ 8, 1, 2, 3, 4, 5 ]  Pushes 8 to front of array & Shifts further array elements by one index. Resource Intensive in LARGE arrays
// myArray1.shift()        //Removes 8 from front of array

//INCLUDES
// console.log(myArray1.includes(5))           //true
// myArray1.push("hello")
// console.log(myArray1.includes('hello'))     //true

//INDEXOF
// console.log(myArray1.indexOf(2))        //1     Index of '2' in array is 1
// console.log(myArray1.indexOf(10))       //-1    Returns '1' if element is not present

//JOIN
// const newArr = myArray1.join('-')          //1-2-3-4-5
//Joins the array into a string. Must be put in a new array. By default seperator is ',' comma

//SLICE
// let newArr = myArray1.slice(0,3)    
// console.log(newArr)                 //[ 1, 2, 3 ]           Part of Array gets sliced
// console.log(myArray1)               //[ 1, 2, 3, 4, 5 ]     Original array remains the same

//SPLICE   [ Special Slice ]
// newArr = myArray1.splice(0,3)       
// console.log(newArr)                 //[ 1, 2, 3 ]           ,,      ,,      ,,      ,,
// console.log(myArray1)               //[ 4, 5 ]              Original array changes. The part that gets sliced is removed from the original array



const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes     = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)          //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heroes[3][1])       //flash     Accessing array elements of prey array within predator array



//CONCAT
// const allHeroes = marvel_heroes.concat(dc_heroes)       //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//Puts both array elements in one new array.         ( NOTE:  Does not concatenate prey arrays )


//SPREAD
// const all_Spread_Heroes = [...marvel_heroes, ...dc_heroes]      //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//Same as 'concat' method, can handle more than just two arrays.
//Concatenates multiple arrays


//FLAT
const JJK_char = ["Gojo", "Geto", "Toji", ["Todo", "Itadori", ["Maki", "Yuta"], ["Mahito", "Jogo"]] ]
// let flat_Array = JJK_char.flat(2)                      ( NOTE: Concatenates prey arrays. If not sure about depth then write Infinity as depth )
//Concatenates one array to the desired depth


//FROM
// console.log(Array.from("Kunal"))                //[ 'K', 'u', 'n', 'a', 'l' ]       Puts a string into an array by each character
// console.log(Array.from({name: "Kunal"}))        //Must specify in objects to make an array of either the keys or values
//Returns empty array when not specified



// ISARRAY
// console.log(Array.isArray("Kunal"))


//OF
// let score1 = 100
// let score2 = 200
// let score3 = 300

// const AAA = Array.of(score1, score2, score3)        //[ 100, 200, 300 ]     Creates an array using specified variables