const express = require('express') 
const app = express() 
const queries = require('./queries')
const bodyParser = require('body-parser')
const cors = require('cors') 
let port = process.env.PORT || 3002

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    queries.listAll().then(response => res.send(response))
})

app.listen(port)