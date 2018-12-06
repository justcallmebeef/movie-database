const express = require('express') 
const app = express() 
const queries = require('./queries')
let port = process.env.PORT || 3002

app.get('/', (req, res) => {
    queries.listAll().then(response => res.send(response))
})

app.listen(port)