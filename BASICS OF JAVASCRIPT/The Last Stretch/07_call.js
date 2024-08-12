function setName(NAME){
    this.username = NAME
    console.log("Used")
}

function Profile(username, id, age){
    setName.call(this, username)        //Sends arguments & current execution context (this) of function to another
    this.id = id
    this.age = age
}

const User1 = new Profile("Kunal", "204", 20)
console.log(User1)