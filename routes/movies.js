const express     = require('express');
const movies       = express.Router();

const db = require('../db/pg');

movies.route('/new')
  .get((req, res)=>{
    var addmovies = req.query.searchInput
    request('http://www.omdbapi.com/?t='+addmovies, function(error, response, body){
     console.log(res.body)
    })
  })
  .post(db.addMovies, (req, res)=>{
    res.send(res.rows)
  })

movies.route('/:id')
  .get(db.showOneMovie, (req, res)=>{
    res.send(res.rows)
  })

// Edite one movie
// movies.route('/:id/edit')
//   .put(db.editOneMovie, (req, res)=>{
//     res.send(res.rows)
//   })
//   .delete(db.editOneMovie, (req, res)=>{
//     res.send(res.rows)
//   })




module.exports = movies;
