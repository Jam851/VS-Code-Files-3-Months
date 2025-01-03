const express = require('express')

const app = express()

app.get("/user", (req, res, next) => {              //1st routeHandler
    console.log("requestHandler_1 Working")
    next()
},
(req, res, next) => {                            //2nd routeHandler
    console.log("requestHandler_2 Working")
    // res.send("Response_2 Recieved !!!")
    next()
},
[                                                //Wrapping routeHandlers in Array does not change there functionality  
    (req, res, next) => {                        //3rd routeHandler
    console.log("requestHandler_3 Working")
    // res.send("Response_3 Recieved !!!")
    next()
    },
    (req, res, next) => {                        //4th routeHandler
        console.log("requestHandler_4 Working")
        res.send("Response_4 Recieved !!!")
    }
]
)

app.listen(9999, () => console.log("Successfully listening from port 9999"))