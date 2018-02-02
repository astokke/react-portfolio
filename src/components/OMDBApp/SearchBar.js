import React, { Component } from "react";
import { randomMovie } from '../../helpers';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
        term: randomMovie()
    }
  }
  componentDidMount() {
    this.props.movieSearch(this.state.term);
  }
  render() {
    return (
      <div className="search-bar">
        <input
          className="search-input"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.movieSearch(term);
  }
}

export default SearchBar;
