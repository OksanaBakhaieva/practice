

const list = document.querySelector(".todo-list");

const fetchTodos = () => {
    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            if (!response.ok) {
                throw new Error('Response error with status ${response.status}')
            }
            return response.json()
        
        })
   
}


fetchTodos().then(data => {
    console.log(data);
    list.insertAdjacentHTML("beforeend", createMarkup(data));
  })
  .catch((err) => console.log(err));
         
function createMarkup(data) {
      return data.map(createLi).join('')
}
  
function createLi({url, title}) {
     return `<li>
    <h2>${title}</h2>
    <img src="${url}"/>
    </li>`;
}

