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