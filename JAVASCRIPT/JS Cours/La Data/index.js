// Rappel des types de données****************************

let string = "chaine de caractère";
let number = 45;
let boolean = true;
// let maVariable; undefined
// let maVariable = null; object
// console.log(typeof maVariable);

// Tableaux

let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[0][3]);
let array2 = ["Bordeaux", 24, true, [1, 2, "Test"], { nom: "Denis" }];
// console.log(array2[4].nom);

// Objet

let object = {
  pseudo: "Poly",
  age: 33,
  technos: ["Javascript", "React", "NodeJS"],
  admin: false,
};
object.adress = "22 rue du code";
// console.log(object.adress);

//ObjetS!

let data = [
  {
    pseudo: "Poly",
    age: 33,
    technos: ["Javascript", "React", "NodeJS"],
    admin: false,
  },
  {
    pseudo: "Lima",
    age: 32,
    technos: ["CSS", "SASS", "NodeJS"],
    admin: false,
  },
  {
    pseudo: "Helio",
    age: 4.5,
    technos: ["SASS", "React", "NodeJS"],
    admin: true,
  },
];
// console.log(data[2].pseudo[0]);

// Structures de controle*************************************

if (data[0].age > data[1].age) {
  // console.log(data[0].pseudo + " plus agé que "+ data[1].pseudo);
} else {
  //valeur si faut
}

// if(valeur à tester) valeur si vrai
// if(valeur à tester)
// valeur si vrai
// else
// valeur si faux

// valeur a tester ? si vrai: si faux

//while
let w = 0;

// while (w < 10) {
//   w++;
//   console.log("la valeur de w est de : " + w);
// }

//Do while
let dw = 0;

// do {
//   dw++;
//   console.log(dw);
// } while (dw <li 5);

//FOR

for (const user of data) {
  // document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`
}

// 1: On déclare la valeur de i
// 2: On defini le nombre d'interval de boucle
// 3: Incrémentation si le nombre d'interval de boucle pas atteint
for (i = 0; i < data.length; i++) {
  // console.log(i)
  // console.log(data[i].technos[0]);
  // document.body.innerHTML += `<h2> ${data[i].pseudo}</h2>`
}

// Switch
document.body.addEventListener("click", (e) => {
//   console.log(e.target.id);
  switch (e.target.id) {
    case "javascript":
        document.body.style.background = "yellow";
        break;
    case "php":
        document.body.style.background = "purple";
        break;
    case "python":
        document.body.style.background = "blue";
        break; 
    default:
        break;
  }
});
