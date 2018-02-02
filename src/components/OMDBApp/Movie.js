import React, { Component } from 'react';
class Movie extends Component {
    constructor() {
        super();
        this.renderMovie = this.renderMovie.bind(this);
        this.movieNotFound = this.movieNotFound.bind(this);

    }
    renderMovie(movie) {
        const favClass = this.props.isFavoriteMovie(movie.imdbID) ? 'fas fa-heart favorite' : 'far fa-heart favorite';
        return (
            <div className="movie">
            <i className={favClass} onClick={() => this.props.toggleFavorite(movie)}></i>
            <span className="titleWrapper">
                    <span className="movieTitle">{movie.Title} ({movie.Year})</span>
                    <span className="movieDirector">Directed By {movie.Director}</span>
                </span>
                <span>
                    <img className="poster" src={movie.Poster} alt={movie.Title} />
                </span>
                    <span className="moviePlot">{movie.Plot}</span>
                <div className="info">
                    <span> 
                        Country: {movie.Country}
                    </span>
                    <span className="genre">Genre: {movie.Genre}</span>
                    
                    <span className="rating">
                        <span>Rating: {movie.imdbRating} / 10</span>
                        <span className="votes">( {movie.imdbVotes} votes )</span>
                    </span>
                </div>
            </div>
    )
    }
    
    movieNotFound() {
        return (
             <div className="movie"> 
                <div className="movie-not-found">
                     No result
                </div>

             </div>
        )
    }

    render() {
        const { movie } = this.props;
        
        if(movie) {
            return this.renderMovie(movie);
        }else return this.movieNotFound();
    }
}
export default Movie;


// <i class="far fa-heart"></i>
// <i class="fas fa-heart"></i>