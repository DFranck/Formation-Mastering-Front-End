// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)
const mouse = document.createElement("span");
mouse.classList.add("mouse");
document.body.appendChild(mouse);
const mediumMouse = document.createElement("span");
mediumMouse.classList.add("mediumMouse");
document.body.appendChild(mediumMouse);
const bigMouse = document.createElement("span");
bigMouse.classList.add("bigMouse");
document.body.appendChild(bigMouse);
// console.log(mouse,mediumMouse,bigMouse);
// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")
window.addEventListener("mousemove", (e) => {
  console.log(e);
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
  mediumMouse.style.top = e.pageY + "px";
  mediumMouse.style.left = e.pageX + "px";
  bigMouse.style.top = e.pageY + "px";
  bigMouse.style.left = e.pageX + "px";
});
// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
