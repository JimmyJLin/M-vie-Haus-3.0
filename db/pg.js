var pgp = require('pg-promise')({});

var cn = {
    host: 'localhost', // 'localhost' is the default;
    port: 5432, // 5432 is the default;
    database: 'movie',
    user: 'jimmylin',
    password: 'desertprince69'
};

var db = pgp(cn)

function showOneMovie (req, res, next){
  db.any("SELECT * FROM movies WHERE movie_id = $1", [req.params.id])
    .then((data)=>{
      console.log(data)
      res.rows = data;
      next();
    })
    .catch((error)=>{
      console.log(error);
    })
}


function showAllMovies (req, res, next){
  db.any("SELECT movies.title, showtime.showtime, movies.movie_id FROM movies LEFT JOIN showtime ON movies.showtime_id = showtime.showtime_id ORDER BY movies.movie_id")
    .then((data)=>{
      res.rows = data;
      next();
    })
    .catch((error)=>{
      console.log(error);
    })
}

function addMovies (req, res, next){
  var poster = req.body.poster;
  var title = req.body.title;
  var year = req.body.year;
  var rated = req.body.rated;
  var director = req.body.director;
  var actors = req.body.actors;
  var plot = req.body.plot;
  db.any('INSERT INTO movies (poster, title, year, rated, director, actors, plot) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;', [poster, title, year, rated, director, actors, plot])
    .then((data)=>{
      res.rows = data;
      next();
    })
    .catch((error)=>{
      console.log(error);
    })

// function showtime
// db.any(array_agg(s.showtimes)
// group by m.movie)


}

module.exports.db = db;
module.exports.pgp = pgp;
module.exports.showOneMovie = showOneMovie;
module.exports.showAllMovies = showAllMovies;
module.exports.addMovies = addMovies;
