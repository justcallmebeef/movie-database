exports.seed = function(knex, Promise) {
  return knex('movies').del()
    .then(function () {
      return knex('movies').insert([
        {
          title: "Schizopolis", 
          director: "Steven Soderbergh",
          year: "1976", 
          rating: 4
        }, 
        {
          title: "Nashville", 
          director: "Robert Altman",
          year: "1976", 
          rating: 5
        }, 
        {
          title: "Idiocracy", 
          director: "Mike Judge",
          year: "2006", 
          rating: 5
        }, 
        {
          title: "Love Actually", 
          director: "Richard Curtis",
          year: "2003", 
          rating: 1
        }, 
        {
          title: "Holy Mountain", 
          director: "Alejandro Jodorowsky",
          year: "1973", 
          rating: 2
        }
      ]);
    });
};
