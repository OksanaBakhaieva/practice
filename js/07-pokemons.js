/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 */

function fetchPokemon(pokemonID) {

}

const cardContainer = document.querySelector(".card-container");
const searchForm = document.querySelector("#searchForm");


function renderPokemonCard(pokemonID) {
  
}
const markup = `<div class="card">
   <div class="card-img-top">
     <img src="${sprites.front_default}" alt="${name}">
   </div>
   <div class="card-body">
     <h2 class="card-title">Ім'я: ${name}</h2>
     <p class="card-text">Вага: ${weight} g</p>
     <p class="card-text">Зростання: ${height} ft</p>

     <p class="card-text"><b>Уміння</b></p>
     <ul class="list-group">${abilityListItems}</ul>
   </div>
</div>`;