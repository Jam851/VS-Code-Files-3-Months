const express = require('express')

const app = express()

app.get("/", (req, res, next) => {
    console.log("/ path accessed")
    next()
})

app.get("/net", (req, res, next) => {
    res.send("net path accessed")
})

app.listen(9999, () => console.log("Successfully listening from port 9999"))