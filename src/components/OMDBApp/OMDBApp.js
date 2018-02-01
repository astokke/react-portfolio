import React, { Component } from 'react';
import {SearchMovie} from '../../helpers';
import _ from 'lodash';

import SearchBar from './SearchBar';
import Movie from './Movie';

class OMDBApp extends Component {
  constructor() {
    super();
    this.movieSearch = this.movieSearch.bind(this);

    this.state = {
      movie: {}
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

  render() {
    const movieSearch = _.debounce(term => {
      this.movieSearch(term);
    }, 500);

    return (
      <div >
          <SearchBar onSearchTermChange={movieSearch} />
        <div className="movie-wrapper">
          <Movie movie={this.state.movie} />
          <div className="movie-list"> List </div>
        </div>
      </div>
    )
  }
}

export default OMDBApp;

