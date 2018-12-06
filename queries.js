const database = require('./db-connection')

module.exports = {
    listAll() {
        return database('movies')
    }, 
    getById(id) {
        return database('movies').where({id: id}).first()
    }, 
    createMovie(movie) {
        return database('movies').insert(movie).returning('*')
    }, 
    deleteMovie(id) {
        return database('movies').where('id', id).delete()
    }, 
    updateMovie(id, movie) {
        return database('movies').where('id', id).update(student).returning('*')
    }
}