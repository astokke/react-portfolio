import React, { Component } from 'react';
import { randomMovie } from '../../helpers';
import _ from 'lodash';

import SearchBar from './SearchBar';
import Movie from './Movie';
import ListMovie from './ListMovie';

class OMDBApp extends Component {
  constructor() {
    super();
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.removeFromFavorites = this.removeFromFavorites.bind(this);
    this.isFavoriteMovie = this.isFavoriteMovie.bind(this);
    this.movieSearch = this.movieSearch.bind(this);

    this.state = {
      movie: {},
      movies: {},
      favorites: [],
      term: randomMovie()
    }
  }


  componentWillMount() {
    const localMovies = localStorage.getItem(`movies`);

    if(localMovies) {
      this.setState({
        movies: JSON.parse(localMovies)
      });
    } 

    const localFavorites = localStorage.getItem(`favorites`);

    if(localFavorites) {
      this.setState({
        favorites: JSON.parse(localFavorites)
      });
    } 
       
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`movies`, JSON.stringify(nextState.movies));
    localStorage.setItem(`favorites`, JSON.stringify(nextState.favorites));
  }

  movieSearch(term) {
    fetch(`https://www.omdbapi.com/?apikey=4c73fc32&type=movie&t=${term}`) 
    .then(result=>result.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        const movie = {
            Title:      response.Title,
            Year:       response.Year,
            Genre:      response.Genre,
            Director:   response.Director,
            Plot:       response.Plot,
            Country:    response.Country,
            Poster:     response.Poster,
            imdbRating: response.imdbRating,
            imdbVotes:  response.imdbVotes,
            imdbID:     response.imdbID,
            Response:   response.Response
        }

       this.setState({movie});
    });
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
    const videoSearch = _.debounce(term => {
      this.movieSearch(term);
    }, 300);
    

    const movieListTitle = (Object.values(this.state.movies).length === 0) ? 'Nothing here yet.' : ``;
    
    return (
      <div >
        <div className="description"> 
          <p>
            Implementing the <a href="https://www.omdbapi.com/"> OMDBApi</a> to create a small app for making a list of your favorite movies. 
          </p>
          <p> 
            Use the search bar to search for movies, and favorite them by clicking the heart icon.
          </p>
        </div>
        <SearchBar term={this.state.term} movieSearch={videoSearch}/>
        <div className="movie-wrapper">
          <Movie movie={this.state.movie} favorite={this.state.favorite} isFavoriteMovie={this.isFavoriteMovie} toggleFavorite={this.toggleFavorite}/>
          <div className="movie-list-wrapper">
            <span className="movie-list-title">Favorite Movies: </span> <br/>
            <span className="movie-list-title"> {movieListTitle} </span>
            <div className="movie-list">
                  {
                      Object.keys(this.state.movies)
                      .map(key => <ListMovie
                                  key={key}
                                  movie={this.state.movies[key]} 
                                  movieSearch={this.movieSearch}
                                  />)
                  }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OMDBApp;

