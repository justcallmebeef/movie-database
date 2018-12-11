const express = require('express') 
const app = express() 
const queries = require('./queries')
const bodyParser = require('body-parser')
const cors = require('cors') 
const port = process.env.PORT || 3002

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res, next) => {
    queries.listAll().then(allMovies => res.json(allMovies))
})

app.get('/:id', (req, res, next) => {
    queries.getById(req.params.id).then(movieById => res.json(movieById))
})

app.post('/', (req, res) => {
    queries.createMovie(req.body).then(newMovie => res.json(newMovie[0]))
})

app.delete('/:id', (req, res, next) => {
    queries.deleteMovie(req.params.id).then(res.sendStatus(204))
})

app.put('/:id', (req, res, next) => {
    queries.updateMovie(req.params.id, req.body).then(updatedMovie => res.json(updatedMovie[0]))
})

app.use((req, res, next) => {
    res.status(404).json({ error: { message: 'data not found' }})
})
 
 app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error: err})
})

app.listen(port)