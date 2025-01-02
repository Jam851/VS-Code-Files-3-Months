const http = require("http")

const server = http.createServer(function (req, res){
    if(req.url === "/secretData"){
        res.end("Data: Secret Sent")
    }
    res.end("Response has been sent by server")
})

server.listen(3000 )