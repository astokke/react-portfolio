import React, { Component } from 'react';
import {SearchMovie} from '../../helpers';
import _ from 'lodash';

import SearchBar from './SearchBar';
import Movie from './Movie';
import ListMovie from './ListMovie';

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


  componentWillMount() {
    const localStorageRef = localStorage.getItem(`movies`);
    if(localStorageRef) {
      this.setState({
        movies: JSON.parse(localStorageRef)
      });
    } 
       
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`movies`, JSON.stringify(nextState.movies));
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
    const movies = {...this.state.movies};
    const favorites = this.state.favorites;
    console.log(movies);
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
          <div className="movie-list">
                {
                    Object.keys(this.state.movies)
                    .map(key => <ListMovie
                                key={key}
                                movie={this.state.movies[key]} 
                                movieSearch={movieSearch}
                                />)
                }
            </div>
        </div>
      </div>
    )
  }
}

export default OMDBApp;

