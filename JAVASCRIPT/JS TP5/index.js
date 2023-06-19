// // Créer 3 variables pour stocker 3 chiffres aléatoires
// let rgb1 = Math.floor(Math.random() * 256);
// let rgb2 = Math.floor(Math.random() * 256);
// let rgb3 = Math.floor(Math.random() * 256);
// // let rgbAll = [rgb1, rgb2, rgb3].join(",");

// console.log(rgb1, rgb2, rgb3);

// //donner au body la couleur de fond en rgb()

// //montrer sur le body la couleur en rgb()

// const rgbSpan = document.createElement("span");
// document.body.appendChild(rgbSpan);
// rgbSpan.classList.add("rgb-span");
// // jouer a interval régulier une noulle couleur

// const rgbGenerator = () => {
//     let rgb1 = Math.floor(Math.random() * 256);
//     let rgb2 = Math.floor(Math.random() * 256);
//     let rgb3 = Math.floor(Math.random() * 256);
//     // let rgbAll = [rgb1, rgb2, rgb3].join(",");
//     let rgbAll = `${rgb1}, ${rgb2}, ${rgb3}`;
    
//     document.body.style.background = rgbAll;
//     rgbSpan.innerText = `rgb (${rgbGenerator(rgbAll)})`;
// };


// setInterval(() => {
//   rgbGenerator();
// }, 2000);
//=======================================================================
//=======================================================================
// Créer un élément span pour afficher la couleur RGB actuelle
const rgbSpan = document.createElement("span");
document.body.appendChild(rgbSpan);
rgbSpan.classList.add("rgb-span");

// Fonction pour générer une couleur RGB aléatoire et l'appliquer en tant que couleur de fond
const rgbGenerator = () => {
  let rgb1 = Math.floor(Math.random() * 256);
  let rgb2 = Math.floor(Math.random() * 256);
  let rgb3 = Math.floor(Math.random() * 256);

  // Utiliser des virgules pour séparer les valeurs RGB
  let rgbAll = `${rgb1}, ${rgb2}, ${rgb3}`;

  // Modifier la couleur de fond du document
  document.body.style.background = `rgb(${rgbAll})`;

  // Mettre à jour le texte du span pour afficher la couleur actuelle en RGB
  rgbSpan.innerText = `rgb(${rgbAll})`;
};

// Appeler la fonction rgbGenerator toutes les 2 secondes
setInterval(rgbGenerator, 2000);
