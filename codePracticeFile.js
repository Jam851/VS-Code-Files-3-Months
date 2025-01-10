const obj1 = {
    firstName: "Magma",
    lastName: "Thakur",
    emailId: "Mthakur851@gmail.com",
    password: "lolololol",
    harry: "hermoine"
}

const allowed = [
    "firstName",
    "lastName",
    "emailId",
    "password"]

const obj2 = Object.keys(obj1).every((k) => allowed.includes(k))

console.log(obj2)