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

app.get('/:id', (req, res) => {
    let id = req.params.id
    queries.getById(id).then(response => res.send(response))
})

app.post('/', (req, res) => {
    queries.createMovie(req.body).then(response => res.send(response[0]))
})

app.delete('/:id', (req, res) => {
    let id = req.params.id
    queries.deleteMovie(id).then(res.sendStatus(204))
})

app.put('/:id', (req, res) => {
    body = req.body
    id = req.params.id
    queries.updateMovie(id, body).then(response => res.send(response[0]))
})

app.listen(port)