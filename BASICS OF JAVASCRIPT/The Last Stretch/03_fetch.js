const url = "https://api.github.com/users/Jam851"
// const url = "https://http.cat/status/200"
const myobject = {
                    Greeting: "Welcome to Kunal's PC",
                    ID: "12345"
                }

//REQUEST1
const request1 = new Request(url, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
        },
    // body: JSON.stringify(myobject)       //cannot send body through GET Request
})

async function getData(request){
    const myresponse = await fetch(request)
    // const value = await myresponse.json()

    // console.log(myresponse)
    console.log("OK: " + myresponse.ok + ",  Status: " + myresponse.status)
    // console.log("Name: " + value.name)
}
// getData(request1)



//REQUEST2
const request2 = request1.clone()       //clone used only when using a method request with body [ not necessary here for GET ]
// getData(request2)



//REQUEST3
const request3 = new Request(request1, {
    method: "POST"
})
async function response3Data(){
    const myresponse = await fetch(request3)
    console.log("Status text: " + myresponse.statusText)    //not found error because url only accepts GET requests
}
// response3Data()





//!response.ok      *****
//response.status   *****
//.json()           *****

//  method: "POST"                                      *****
//  body: JSON.stringify({ username: "example" })       *****
//  headers: {                                          *****
//     "Content-Type": "application/json",
//   }

//.clone()  *****

// const response = await fetch("https://example.org/post", {   *****
//   headers: myHeaders, })

// throw new Error(`Response status: ${response.status}`);

// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// error.message [try & catch, catch method]
