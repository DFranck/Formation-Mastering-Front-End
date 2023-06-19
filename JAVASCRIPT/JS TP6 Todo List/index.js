// const newToDo = document.getElementById("newToDo");
// const toDoList = document.getElementById("toDoList");

// // Consulter le local storage au lancement de l'application pour rajouter les todos
// const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
// savedTodos.forEach((todo) => {
//   toDoList.innerHTML += `<li>${todo}</li>`;
// });

// newToDo.addEventListener("keypress", (validNewToDo) => {
//   if (validNewToDo.key === "Enter") {
//     validNewToDo.preventDefault();
//     toDoList.innerHTML += `<li>${newToDo.value}</li>`;
//     // Stocker dans le local storage la liste
//     savedTodos.push(newToDo.value);
//     localStorage.setItem("todos", JSON.stringify(savedTodos));
//     newToDo.value = "";
//   }
// });

// toDoList.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     console.log("je te supprime");
//     const index = savedTodos.indexOf(event.target.innerText);
//     if (index > -1) {
//       savedTodos.splice(index, 1);
//     }
//     localStorage.setItem("todos", JSON.stringify(savedTodos));
//     event.target.remove();
//   }
// });

//======================================================
// Correction
//======================================================
//STOCK EN LOCAL
const storeList = () => {
  window.localStorage.toDoList = list.innerHTML;
};
const getList = () => {
  if (window.localStorage.toDoList) {
    list.innerHTML = window.localStorage.toDoList;
  } else {
    list.innerHTML = `<li>Clicker sur un toDo pour supprimer</li>`;
  }
};
window.addEventListener("load", getList());
//AJOUTE
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`;
  storeList();
  item.value = "";
});
//SUPPRIME
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
  //   e.target.remove();
});
