const BASE_URL = "https://65afbd2c2f26c3f2139ba4a7.mockapi.io";
const ENDPOINT = "books";

function checkResponse(resp) {
    if (!resp.ok) {
        throw new Error(resp.statusText);
    }
    return resp.json();
}

//** Read (GET) */ 

function fetchBooks () {
    return fetch(`${BASE_URL}/${ENDPOINT}`).then(checkResponse);
}

function fetchBookByID (bookID) {
    return fetch(`${BASE_URL}/${ENDPOINT}/${bookID}`).then(checkResponse);
}

fetchBooks().then(console.log).catch(console.error);
fetchBookByID(2).then(console.log).catch(console.error);