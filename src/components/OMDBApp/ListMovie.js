import React, { Component } from "react";

class ListMovie extends Component {
    
    render() {
        const movie = this.props.movie;
    return (
      <span className="movie-item">
            <img onClick={ () => this.props.movieSearch(movie.Title)} className="poster" src={movie.Poster} alt={movie.Title} />
      </span>
    );
  }
}

export default ListMovie;
