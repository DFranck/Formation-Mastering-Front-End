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
    message: "Yo les gens!",
  }),
  mode: "cors",
  credentials: "same-origin",
};
document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts", init2).then(() => console.log("Data envoyé"));
});
