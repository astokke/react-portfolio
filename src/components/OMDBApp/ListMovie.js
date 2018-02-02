import React, { Component } from "react";

class ListMovie extends Component {
    constructor() {
      super();
      this.SetSearchField = this.SetSearchField.bind(this);
    }
    
    SetSearchField(title){
      this.props.movieSearch(title);
    }
    render() {
        const movie = this.props.movie;
    return (
      <span className="movie-item">
            <img onClick={ () => this.SetSearchField(movie.Title)} className="poster" src={movie.Poster} alt={movie.Title} />
      </span>
    );
  }
}

export default ListMovie;
