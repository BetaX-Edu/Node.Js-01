const express = require('express')
const app = express()
const PORT = 3000;

app.get('/', function (req, res) {
    res.send('Hello Node.js REST API...!')
})

app.listen(PORT, () => {
    console.log("Server is Listening!");
})