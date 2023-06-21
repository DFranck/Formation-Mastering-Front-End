// XMLHttpRequest

function reqListener() {
  //   console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();

//==================================================
//FETCH
//==================================================

fetch("monlien", "objetd'option(token, autorisatien")
  .then((response) => {
    //console.log(response)
  })
  .catch((error) => {
    // console.log(error)
  });

//==================================================
//FETCH syntaxe commenté = syntaxe autre
//==================================================

fetch("data.txt").then((res) => res.text());
//   .then((data) => console.log(data));

fetch("data.json").then((res) => res.json());
// .then((data) => console.log(data));

const myHeaders = new Headers();

const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

// fetch("data.json", init).then((res) => console.log(res));

//CRUD => Create = POST, read = GET, update = PUT, delete = DELETE

const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "POLYMORF",
    message: "COmment ca va!",
  }),
  mode: "cors",
  credentials: "same-origin",
};
document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts", init2).then(() =>
    console.log("Data envoyé")
  );
});
// const init2 = {
//   method: "DELETE",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   mode: "cors",
//   credentials: "same-origin",
// };
// document.querySelector("form").addEventListener("submit", () => {
//   fetch("http://localhost:3000/posts/2", init2).then(() =>
//     console.log("Data envoyé")
//   );
// });

//==================================================
//Asynchrone
//==================================================

setTimeout(() => {
  // console.log("test 2 second");
}, 2000);

//Promise

// fetch("monlien").then((res) => res);

// async/await

async function fetchData() {
  await fetch("monlien");
  // await = ne jou pas la suite tant que le await n'est pas terminé
  executeFunction();
}

const fetchData2 = async () => {
  await fetch("monlien");
  // await = ne jou pas la suite tant que le await n'est pas terminé
  executeFunction();
};

//==================================================
//Le JSON
//==================================================

//Méthode .json() => méthode qui s'auto-résout en renvoyant le body de la requête.

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    // Stryngify => convertit en JSON
    let settings = JSON.stringify(data);
    //Parse => transforme json en objet JS
    // console.log(JSON.parse(settings));
  });
//==================================================
// Web API
//==================================================

// CLIENT STORAGE
//---------------
//Local Storage============

localStorage.data = "je stock la data";
// document.body.textContent = localStorage.data;
localStorage.removeItem("data");

const user = {
  name: "denis",
  age: "22",
};

// localStorage.user = user;
// il faut passer des chaine de caractères

localStorage.user = JSON.stringify(user);

// console.log(JSON.parse(localStorage.user));

// Session Storage==========

// sessionStorage.dataSetting = "55px";
// sessionStorage.clear();

//Cookies============
document.cookie = "username= polymorf";

//Bonne Pratique

document.cookie = "Pseudo=PM;path=/; max-age=450000; secure; samesite";
