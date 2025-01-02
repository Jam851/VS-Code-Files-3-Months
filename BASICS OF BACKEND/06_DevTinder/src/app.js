const express = require('express')

const app = express();

app.get("/", (req, res) => {
    res.send("Dashboard Loaded Successfully")
})

app.get("/page1", (req, res) => {
    res.send("First Page Loaded Successfully")
})

app.listen(3000, () => console.log("Succesfully listening at port 3000"));