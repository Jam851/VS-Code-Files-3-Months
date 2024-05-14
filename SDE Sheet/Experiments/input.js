//In a BROWSER
let username;

username = window.prompt("What's your username ?")  //Takes in input from user in a browser & stores it in the variable

console.log(username);





//In a NODE ENVIRONMENT
const readline = require('readline')        //readline module stored in variable for easy use

const r1 = readline.createInterface({      //readline's method - createInterface used and stored in another variable
    input: process.stdin,
    output: process.stdout
})

r1.question('Please enter username: ', (username) => {      //r1.question method prompts the user for input in the terminal 
    console.log(`Your name is: ${username}`)
    r1.close()
})
