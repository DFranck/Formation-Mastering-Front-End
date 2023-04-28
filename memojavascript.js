// alert ("salutjs");

console.log("coucou j'enregistre");

// Kamel Case
let maSuperVariable = "hello";

// une variable est un espace de stockage, une boite; exemple maSuperVariable dans
// laquel on a ranger "hello"

// Les variables

// Var = vieux js
var unTexte = "voici un texte";

// const = constante (non modifiable apres déclaration)
const prenom = "justine";

// Let = la variable peut évoluer
let unChiffre = 24;

// changement du contenu de la boite
unChiffre = 22;

let chaine = "je suis une chaine de caractere entre guillement";

// concatenation + pour des petite concaténation
let nouvelleChaine = "chaine précédente" + chaine;

// Concatenation longue avec altgr7
let autreConcatenation = `autre concatenation chaine précédente ${chaine}`;

// types de données
let string = "je suis une chaine de caractere (avec des guillement bien sur)";
let number = 24;
let boolean = true;

// Tableau est composé des types de données encadré de crochet []
let array = ["je", "suis", 57, true];

// l'objet est composé des types de données encadré de acolade {}
let objet = {
  // Clé: valeur (types de données) puis une virgule, pour passer à la clé suivante
  prenom: "audrey",
  age: 33,
  ville: "bordeau",
  aSonBac: true,
};

// il est possible d'ouvrir une boite qu'on remplira plustard
let arbre;

// Les Opérateurs

// console.log(4 + 5);
// console.log(4 - 5);
// console.log(4 / 5);
// console.log(4 * 5);

// // puissance
// console.log(4 ** 5);

// les operateurs d'affectations

let total = 0;

total = total + 1;
total++;

total += 5;
total -= 4;
total *= 2;

// console.log(total);

// Structure de controle

let x = "2";
let y = 2;

// if (x > y) {
//     alert("yes x plus gros que y")
// }else if (y > x) {
//     alert("Y plus grand")
// }else{
//     alert("IL SONT EGAUX")
// }

// on teste si la variable est true
if (x) {
  // console.log("x existe!");
}

// ne teste pas une egalité!
// if ((x = y)) {
// //   console.log("IL SONT EGAUX");
// }

//  == teste legalité de valeur sans prendre le type
// === teste l'égalité en type et en valeur 2 et "2" ne sont pas égaux
if (x === y) {
  // console.log("IL SONT EGAUX");
} else {
  // console.log("PAS EGAUX");
}

// || ou
// && et

let a = 2;
let b = "2";

if (a < b || a > 1) {
  // console.log("OUI");
} else {
  // console.log("NON");
}

// Les fonctions

// fonction classique
function faireQuelqueChose() {
  console.log("Je fait un truc");
  console.log("Je fait un autre truc" + 3 + 4);
  console.log(3 + 4);
  alert("Calcule terminé");
}

// il faut bien penser a appeler la fonction sinon elle ne se joue pas, faireQuelqueChose();

// fonction flechée , (a,b) est le parametre
const addition = (a, b) => {
  console.log(a + b);
};
// NaN Note a Number si on ne remplit pas les parantheses,,,,,,
addition(4, 3);
addition(450, 52200);

// portée des variable

function add2() {
  let a = 4;
  console.log(a + 2);
}
