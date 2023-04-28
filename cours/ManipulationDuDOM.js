// DOM document objet model

// SELECTEURS

// CLICK EVENT

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector(".click-event p");
// console.log(response);

// le css secrit en kamel case en js et non pas avec les moins exemple border-radius devient borderRadius
questionContainer.style.borderRadius = "150px";

// questionContainer.addEventListener('Evenement', Function)

questionContainer.addEventListener("click", () => {
  //   console.log("click!");
  // questionContainer.classList.add('question-clicked')
  // questionContainer.classList.remove('question-clicked')
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  // console.log("click");
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  console.log("click");
  response.classList.add("show-response");
  response.style.background = "red";
});

// <div> > #id > .class > baliseHTML
//======================================================================//
//MOUSE EVENTS

// MOUSE MOVE
const mousemove = document.querySelector(".mouse-move");

// console.log(mousemove);

mousemove.classList.add("mousemove");

window.addEventListener("mousemove", (e) => {
  // console.log("mousemove");
  // console.log(e);
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  // console.log("test");
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
  mousemove.style.border = "2px solid teal";
});

window.addEventListener("mouseup", () => {
  // console.log("test");
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid pink";
});

questionContainer.addEventListener("mouseenter", () => {
  // console.log("je suis sur questionContainer!");
  questionContainer.style.background = "blue";
});

questionContainer.addEventListener("mouseout", () => {
  // console.log("Mouseout?");
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg";
});

//=======================================================
// KEY PRESS events
// VARIABLE
const keypresscontainer = document.querySelector(".keypress");
// console.log(keypresscontainer);
const key = document.getElementById("key");
// console.log(key);
// FONCTIONS
const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};

// LOGIQUE
document.addEventListener("keypress", (e) => {
  //   console.log(e.key);
  key.textContent = e.key;
  if (e.key === "j") {
    keypresscontainer.style.background = "pink";
  } else if (e.key === "i") {
    keypresscontainer.style.background = "orange";
  } else {
    keypresscontainer.style.background = "green";
  }
  if (e.key === "Enter") ring(e.key);
});

//========================================================
// SCROLL EVENT

const nav = document.querySelector("nav");

// console.log(nav);

window.addEventListener("scroll", () => {
  // console.log("Je teste le scroll!");
  // console.log(window.scrollY);
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//===========================================================================
// EVENEMENT SUR LES INPUT

const inputname = document.getElementById("name");
let Pseudo = "";
const inputselect = document.querySelector("select");
let language = "";
const form = document.querySelector("form");
// let cgv est inutile car les checkbox et les button n'ont pas besoin detre déclarée
// console.log(form);

// Récupération de la "valeur" d'un input
inputname.addEventListener("input", (e) => {
  // console.log(e.target.value);
  pseudo = e.target.value;
  // console.log(pseudo);
});

inputselect.addEventListener("input", (e) => {
  // console.log(e);
  language = e.target.value;
  // console.log(language);
});

form.addEventListener("submit", (e) => {
  // Cette methode fait que le formulaire ne change pas de page!
  e.preventDefault();
  // test de la checkbox id'cvg' peut se faire sans la déclarer
  // console.log(cgv.checked);

  if (cgv.checked) {
    // Ici on pointe la balise div du formulaire sans la déclarer puis on injecte du html
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo: ${pseudo}</h3>
    <h4>Language préféré!: ${language}</h4>
    `;
  } else {
    alert("veuillez accepter les CVG");
  }
});

//=====================================================================
// Load event

window.addEventListener("load", () => {
  // console.log("document chargé!");
});

//=======================================================================
// ForEach pour chaqun d'eux
const boxes = document.querySelectorAll(".box");

// console.log(boxes);

// ok mais pour un seul element
// boxes.addEventListener("click", () => console.log("test"));

// boxes.forEach((box) => {
//   box.addEventListener("click", (e) => {
//     e.target.style.transform = "scale(0.5)";
//   });
// });

//==========================================================
// addEventListener(plusieur evenement possible sur un seul element) vs onclick (rapide et facile mais un seul evenement par element)

// document.body.onclick = function() {
//   // console.log("On click à l'ancienne fonctione!");
// }

// celui ci ecrase le onclick precedent
// document.body.onclick = () => {
//   // console.log("On click fleché fonctione!");
// }

//Bubbling => fin (de base l'eventlistener est parametré en mode bubbling)
document.body.addEventListener(
  "click",
  () => {
    console.log("click 1!");
  }
  // false parametre de base
);

//Usecapture
document.body.addEventListener(
  "click",
  () => {
    console.log("click 2!");
  },
  true
);

//======================================================================
//Stop propagation

questionContainer.addEventListener("click", (e) => {
  // alert("STOP PROPAGATION MOUAHAH!");
  e.stopPropagation();
});

//removeEventListener est l'inverse de addeventlistener

//====================================================================

// BOM brother objet model

// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open("http://google.com", "cours js", "height=600", "width=800");
// window.close()

//EVENEMENT ADOSSES A WINDOW

// alert("hello");

//confirm
btn2.addEventListener("click", () => {
  confirm("voulez vous vraiment vous trompez?");
});

//prompt
let answer;
btn1.addEventListener("click", () => {
  answer = prompt("entrez votre nom!!");
  console.log(answer);
  // questionContainer.innerHTML = "<h3>Bravo " + answer + "</h3>";
  questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
});

//setTimeOut
setTimeout(() => {
  //logique à executrer
  questionContainer.style.borderRadius = "0px";
}, 2000);
// "un temps en milliseconde avant de déclencher"

//setIterval
// let interval = setInterval(() => {
//   document.body.innerHTML += `<div class='box'>
//       <h2>Nouvelle boite!</h2>
//     </div>`;
// }, 4000);

// document.body.addEventListener("click", (e) => {
//   // e.target.remove()
//   clearInterval(interval);
// });

//Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://")

window.onload = () => {
  location.herf = "http://youtube.com/";
};

//EVENEMENT ADOSSES A NAVIGATOR
// console.log(navigator.userAgent);

//history
console.log(history);
// history.back()
// history.go(-2)

//===================================================================
// SET PROPERTY
window.addEventListener("mousemove", (e) => {
  // console.log(e);
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});

