exports.seed = function(knex, Promise) {
  return knex('movies').del()
    .then(function () {
      return knex('movies').insert([
        {
          title: "Schizopolis", 
          director: "Steven Soderbergh",
          year: "1976", 
          rating: 4, 
          poster_url: "https://img.moviepostershop.com/schizopolis-movie-poster-1996-1020196516.jpg"
        }, 
        {
          title: "Nashville", 
          director: "Robert Altman",
          year: "1976", 
          rating: 5,
          poster_url: "https://cdn.shopify.com/s/files/1/1057/4964/products/nashville-vintage-movie-poster-original-1-sheet-27x41-7347.jpg?v=1535847579"
        }, 
        {
          title: "Idiocracy", 
          director: "Mike Judge",
          year: "2006", 
          rating: 5,
          poster_url: "https://images-na.ssl-images-amazon.com/images/I/51pLNnbThwL._SY450_.jpg"
        }, 
        {
          title: "Love Actually", 
          director: "Richard Curtis",
          year: "2003", 
          rating: 1,
          poster_url: "https://www.movieposter.com/posters/archive/main/177/MPW-88655"

        }, 
        {
          title: "Holy Mountain", 
          director: "Alejandro Jodorowsky",
          year: "1973", 
          rating: 2,
          poster_url: "https://i.etsystatic.com/11328982/r/il/3ea12c/1037070241/il_570xN.1037070241_nsr7.jpg"
        }
      ])
    })
}