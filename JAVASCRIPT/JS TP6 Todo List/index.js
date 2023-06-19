// Créer un form pour taper les todos

//Ajouter sur le dom ce qui est tapé dans l'input à la validation du form
//mon input.value

//supprimer un todo lorsque l'on click dessus (.remove())

//Stocker dans le local storage la liste

//Consulter le local storage au lancement de l'application pour rajouter les todos

// const newToDo = document.getElementById("newToDo");
// const toDoList = document.getElementById("toDoList");
// const saveToDo = "";
// let toDoSaved = window.localStorage.saveToDo;

// newToDo.addEventListener("keypress", (validNewToDo) => {
//   if (validNewToDo.key === "Enter") {
//     validNewToDo.preventDefault();
//     toDoList.innerHTML += `<li>${newToDo.value}</li>`;
//     window.localStorage.saveToDo = newToDo.value;
//   }
// });

// toDoList.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     console.log("je te supprime");
//     event.target.remove();
//   }
// });

// toDoList = toDoSaved;

const newToDo = document.getElementById("newToDo");
const toDoList = document.getElementById("toDoList");

// Consulter le local storage au lancement de l'application pour rajouter les todos
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
savedTodos.forEach((todo) => {
  toDoList.innerHTML += `<li>${todo}</li>`;
});

newToDo.addEventListener("keypress", (validNewToDo) => {
  if (validNewToDo.key === "Enter") {
    validNewToDo.preventDefault();
    toDoList.innerHTML += `<li>${newToDo.value}</li>`;
    // Stocker dans le local storage la liste
    savedTodos.push(newToDo.value);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
    newToDo.value = "";
  }
});

toDoList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("je te supprime");
    const index = savedTodos.indexOf(event.target.innerText);
    if (index > -1) {
      savedTodos.splice(index, 1);
    }
    localStorage.setItem("todos", JSON.stringify(savedTodos));
    event.target.remove();
  }
});
