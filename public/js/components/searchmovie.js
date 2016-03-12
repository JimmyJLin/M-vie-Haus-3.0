'use strict'
var React = require('react');
var ReactDOM = require('react-dom');


const SearchMovie = React.createClass({

  handleSubmit : function(event){
    event.preventDefault()
    var movie = {searchInput: this.refs.searchInput.value}
    this.props.addMovie(movie)
    this.refs.movieForm.reset()
  },

  render : function(){
    return (
      <form ref="movieForm" onSubmit={this.handleSubmit}>
        <section className="col s12">
          <div className="input-field">
            <section id="todo-display" className="col s7">
            <input id="search" type="text" ref="searchInput" required />
            <label htmlFor="search"><i className="material-icons">search</i></label>
            </section>
            <section id="todo-display" className="col s5">
            <button type="submit" className="btn btn-primary btn-sm" id="searchButton">Search</button>
            </section>
          </div>
        </section>
      </form>
    )
  }

})


module.exports = SearchMovie;
