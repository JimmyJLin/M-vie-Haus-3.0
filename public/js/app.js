'use strict'
var React = require('react');
var ReactDOM = require('react-dom');
var SearchMovie = require('./components/searchmovie.js');
var ListOneMovie = require('./components/listonemovie.js');
var CurrentMovies = require('./components/currentmovies.js');


const App = React.createClass({
  getInitialState : function(){
  return {movies: {}}
  },

  // componentDidMount : function(){
  //   this.serverRequest = $.get(this.props.source, function(result){
  //     var lastGist = result[0];
  //     this.setState({
  //
  //     })
  //   }.bind(this));
  // },

  addMovie : function (newMovie){
    var updateData = (data)=>{
      var newID = data.movie_id
      this.state.movies[newID] = data;
      this.setState({movies: this.state.movies})
      console.log(data)
      console.log("inside updateData event handler")
    }
      // var addmovies = req.query.searchInput
    // $.ajax({
    //   url: 'http://www.omdbapi.com/?t=' + this.props.searchInput.value,
    //   dataType: 'json',
    //   sucess: function(data){
    //     this.setState({movies: data});
    //   }.bind(this),
    //   error: function(xhr, status, err){
    //     console.error(this.props.url, status, err.toString());
    //   }.bind(this)
    // })
    // $.get('http://www.omdbapi.com/?t=', newMovie)
    // $.get((req, res)=>{
    //   var addmovies = req.query.searchInput
    //   request('http://www.omdbapi.com/?t='+addmovies, function(error, response, body){
    //    console.log(res.body)
    //   })
    // })
    // .done(updateData)
    // $.post('/movies/new', newMovie)
    // .done(updateData)
  },

  render : function(){
    return (
      <div className="container">
        <div className="row" id="searchbar">
          <div className="nav-wrapper">
            <br/>

            {/* API movie search bar here */}
            <SearchMovie addMovie={this.addMovie}/>
          </div>
        </div>

        <div className="row">
          <section className="col s12">
          <section id="todo-display" className="col s6">
            <div>

            {/* List all movies here */}
              <CurrentMovies />
            </div>
          </section>
          <section id="todo-display" className="col s6">
            <div>

            {/* one movies search result detail here */}

            {/* List one movies detail here */}
              <ListOneMovie />
            </div>
          </section>
          </section>
        </div>
      </div>
    )
  }
})








ReactDOM.render(<App source='/movies/new'/>, document.querySelector('#container'))
