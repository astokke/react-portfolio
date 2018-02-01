import React, { Component } from 'react';
import {SearchMovie} from '../../helpers';
import _ from 'lodash';

import SearchBar from './SearchBar';
import Movie from './Movie';

class OMDBApp extends Component {
  constructor() {
    super();
    this.movieSearch = this.movieSearch.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.removeFromFavorites = this.removeFromFavorites.bind(this);
    this.isFavoriteMovie = this.isFavoriteMovie.bind(this);

    this.state = {
      movie: {},
      movies: {},
      favorites: []
    }
  }

  // for development
  componentWillMount() {
    const localStorageRef = localStorage.getItem(`movie`);
    if(localStorageRef) {
      this.setState({
        movie: JSON.parse(localStorageRef)
      });
    } 
       
  }
  // for development
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`movie`, JSON.stringify(nextState.movie));
  }

  movieSearch(term) {
    const movie = SearchMovie(term);
    this.setState({movie});

  }
  // Check if movie is favorited, and either add or remove it from the list. 
  toggleFavorite(movie) {
    if(!this.isFavoriteMovie(movie.imdbID)){
      this.addToFavorites(movie);
    } else {
      this.removeFromFavorites(movie);
    }
    
  }  

  // Add Movie to Favorites
  addToFavorites(movie) {
    const movies = {...movies};
    const favorites = this.state.favorites;

    movies[`movie-${movie.imdbID}`] = movie;
    favorites.push(movie.imdbID);
    this.setState({movies});
    this.setState({favorites});
  }

  // Remove movie from Favorites
  removeFromFavorites(movie) {
    const movies = {...this.state.movies};
    const favorites = this.state.favorites;
    const index = favorites.indexOf(movie.imdbID);

    favorites.splice(index,1);
    delete movies[`movie-${movie.imdbID}`];


    this.setState({movies});
    this.setState({favorites});
  }

  isFavoriteMovie(movieID){
    return this.state.favorites.indexOf(movieID) > -1;
  } 

  render() {
    const movieSearch = _.debounce(term => {
      this.movieSearch(term);
    }, 500);

    return (
      <div >
          <SearchBar onSearchTermChange={movieSearch} />
        <div className="movie-wrapper">
          <Movie movie={this.state.movie} favorite={this.state.favorite} isFavoriteMovie={this.isFavoriteMovie} toggleFavorite={this.toggleFavorite}/>
          <div className="movie-list"> List </div>
        </div>
      </div>
    )
  }
}

export default OMDBApp;

