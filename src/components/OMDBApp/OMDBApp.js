import React, { Component } from 'react';
import {SearchMovie} from '../../helpers';
import _ from 'lodash';

import SearchBar from './SearchBar';

class OMDBApp extends Component {
  constructor() {
    super();
    this.movieSearch = this.movieSearch.bind(this);

    this.state = {
      movie: {}
    }
  }
  movieSearch(term) {
    const movie = SearchMovie(term);
    this.setState({movie});
    console.log(movie);
  }

  render() {
    const movieSearch = _.debounce(term => {
      this.movieSearch(term);
    }, 500);

    return (
      <div >
          <SearchBar onSearchTermChange={movieSearch} />
      </div>
    )
  }
}

export default OMDBApp;

