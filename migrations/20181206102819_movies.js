exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', (movie) => {
      movie.increments('id')
      movie.string('title')
      movie.string('director', [50])
      movie.string('year', [4])
      movie.integer('rating')
      movie.string('poster_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('movies')
};