export function getRandomUser() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://randomuser.me/api/?nat=us&inc=name,gender,email,phone,picture", false);
    xhr.send();

    const response = JSON.parse(xhr.responseText).results[0];
    const user = {
        firstName:  response.name.first,
        lastName:   response.name.last,
        gender:     response.gender,
        email:      response.email,
        phone:      response.phone,
        pic:        response.picture.large
    }

    return user;

}

export function SearchMovie(title) {


    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", `http://www.omdbapi.com/?apikey=4c73fc32&type=movie&t=${title}`, false);
    xhttp.send();
    const response = JSON.parse(xhttp.responseText);
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

    return movie;
}


export function randomMovie() {
    const movies = [
            "Waking Life",        
            "Fantastic Planet",
            "Stalker",        
            "Ponyo",        
            "Star Wars: Episode IV",        
            "Blade Runner",        
            "Dr. Strangelove",        
            "Akira",        
            "THX 1138"       
    ]

    const movie = movies[Math.floor(Math.random()*movies.length)];

    return movie;
}