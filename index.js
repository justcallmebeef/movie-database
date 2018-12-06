const express = require('express') 
const app = express() 
let port = process.env.PORT || 3002

app.get('/', (req, res) => {
    res.send("i am awesome")
})

app.listen(port)