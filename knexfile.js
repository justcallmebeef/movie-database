module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/movie_db'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}