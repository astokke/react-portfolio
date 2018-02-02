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