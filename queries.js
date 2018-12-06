const database = require('./db-connection')

module.exports = {
    listAll() {
        return database('movies')
    }
}