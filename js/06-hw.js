// Посилання на API https://unsplash.com/documentation
// Отримати дані з API по ключовому слову і відрендерити галерею зображень
// Параметри запиту зібрати за допомогою SearchParams

// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY


const form = document.querySelector("#searchForm");
const gallery = document.querySelector(".gallery");

const BASE_URL = "https://api.unsplash.com/search/photos";
const API_KEY = 'xankM5JcWjNdU3aQm9SCaf_qfZApy4ZcN2-HgCA1cGs';

let searchQuery = "";

function fetchData(searchQuery) {
    const params = new URLSearchParams({
        client_id: API_KEY,
        query: searchQuery,
        per_page: 20,
        orientation: "portrait",

    })
    return fetch(`${BASE_URL}?${params}`)
        .then(res => {
            if (!res.ok) {
                throw new Error("Network response was not OK!")
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            return data;
        })
    .catch(error => console.log(error))
}

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    gallery.innerHTML = "";
    searchQuery = form.elements.searchQuery.value.trim();
    console.log(searchQuery);
    fetchData(searchQuery)
        .then(data => renderMarkup(data))
}

function renderMarkup(data) {
    const markup = data.results.map(element => `<li>
<p>${element.description}</p>
<img src="${element.urls.small}" alt="${element.alt_description}" />
</li >`).join("")
    gallery.innerHTML = markup;
}






// const form = document.querySelector("#searchForm");
// const container = document.querySelector(".gallery");
// const API_KEY = 'xankM5JcWjNdU3aQm9SCaf_qfZApy4ZcN2-HgCA1cGs';
// const BASE_URL = "https://api.unsplash.com/search/photos";
// let searchQuery = "";

// function fetchData(searchQuery) {
//   const params = new URLSearchParams({
//     client_id: API_KEY,
//     query: searchQuery,
//     per_page: 20,
//     orientation: "portrait",
//   });
//   return fetch(`${BASE_URL}?${params}`)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error("Network response was not OK!")
//       }
//       return res.json();
//     })
//     .catch(error => console.log(error))
// }
// form.addEventListener("submit", onSubmit);

// function onSubmit(event) {
//   event.preventDefault();
//   container.innerHTML = ""; // очищаємо пошук
//   searchQuery = form.elements.searchQuery.value.trim(); // доступ до значення в імпуті з ім'ям searchQuery
//   fetchData(searchQuery)
//   .then(data => renderMurcup(data)) // в ДЗ треба тут зробити перевірку за доп бібліотеки iziToast "Sorry, there are no images matching your search query. Please try again!"
// }

// function renderMurcup(data) {
//   const murcup = data.results.map(element => `<li>
//         <p>${element.description}</p>
//         <img src="${element.urls.small}" alt="${element.alt_description}" />
//       </li>`).join("")
//   container.innerHTML = murcup;
// }




