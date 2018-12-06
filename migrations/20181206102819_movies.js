exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', (movie) => {
      movie.increments('id')
      movie.string('title')
      movie.string('director', [50])
      movie.string('year', [4])
      movie.integer('rating')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('movies')
};