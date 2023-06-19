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

fetch("data.txt")
  .then((res) => res.text())
//   .then((data) => console.log(data));

fetch("data.json")
  .then((res) => res.json())
  .then((data) => console.log(data));

// fetch("data.txt")
//   .then((res) => {
//     return res.text();
//   })
//   .then((data) => {
//     console.log(data);
//   });
