import React, { Component } from 'react';
import {SearchMovie} from '../../helpers';

class OMDBApp extends Component {
  render() {
    const movie = SearchMovie('Shawshank');
    debugger;
    return (
      <div >
          <br />
          <br />
          OMDB
      </div>
    )
  }
}

export default OMDBApp;

