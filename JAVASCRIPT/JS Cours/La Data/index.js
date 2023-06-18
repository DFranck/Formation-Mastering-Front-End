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

//-----------------------------------------------------------
// Structures de controle*************************************
//------------------------------------------------------------

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
//----------------------------------------------
// Méthodes String*************************************
//----------------------------------------------
let string2 = "Javascript est un langage orienté objet";

// console.log(eval(parseInt("1") + 2));
// console.log(parseInt("42"), typeof "42");
// console.log(isNaN("--48"));

// console.log(string2.length);
// console.log(string2[string2.length-1]);

// console.log(string2.indexOf('langage'));
// console.log(string2.indexOf('x')); //-1 = ne connais pas

// let newstring = string2.slice(20);
// let newstring = string2.slice(5, 17);
// console.log(newstring);

// console.log(string2.split(" "));

// console.log(string2.toLowerCase());
// console.log(string2.toUpperCase());

// console.log(string2.replace("Javascript", "PHP"));

//----------------------------------------------------------
// Méthodes Number******************************************
//----------------------------------------------------------

let number2 = 42.123456;
let numberString = "42.12 est une chiffre";

// console.log(number2.toFixed("2"));
// console.log(parseInt("43"));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));

// Math***********************

// console.log(Math.PI);
// console.log(Math.round("4.5"));
// console.log(Math.floor("4.9"));
// console.log(Math.ceil("4.1"));
// console.log(Math.pow(2, 7));
// console.log(Math.sqrt(16));

// console.log(Math.floor(Math.random() * 100));

//----------------------------------------------------------
// Méthodes Array******************************************
//---------------------------------------------------------

let array3 = ["Javascript", "PHP", "Python"];
let array4 = ["Ruby", "Solidity"];

// let newArray = array3.concat(array4);
// console.log(newArray);

let newArray = [...array3, ...array4];
// console.log(newArray);

// console.log(array3.join(" / "));

// console.log(array3.slice('1'));
// console.log(newArray.slice('1',4));

// console.log(array3.indexOf('Python'));

// array3.forEach((langages)=> console.log(langages));

// console.log(array3.every((langage) => langage === "PHP"));
// console.log(array3.some((langage) => langage === "PHP"));

// let shift = array3.shift()
// console.log(shift);

// console.log(array3.pop());

// const restArray = array3.splice(1, 1, "C++");
// //(a partir d'ou,combien,quoi)
// console.log(restArray);

//=====================================================
//IMPORTANT//
//======================================================

let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y));
arrayNumber.push(17, "coucou");
// console.log(arrayNumber);

//FILTER, SORT, MAP(for each en mieux, list des choses)

// console.log(arrayNumber.filter((number)=>number>10));
// console.log(arrayNumber.sort());
// console.log(arrayNumber.sort((a, b) => a - b));

// document.body.innerHTML = arrayNumber
//   .map((number) => `<li> ${number}</li>`)
//   .join("");

//=====================================================
//Méthode OBJET//
//======================================================

// document.body.innerHTML = data
//   .filter((user) => user.admin === false)
//   .filter((user) => user.pseudo.includes(""))
//   .sort((a, b) => a.age - b.age)
//   .map(
//     (user) =>
//       `
//   <div class="user-card">
//     <h2>${user.pseudo}</h2>
//     <h3>${user.technos}</h3>
//     <h4>Age: ${user.age} ans</h4>
//     <p>Status : ${user.admin ? "Modérateur" : "Membre"}</p>
//   </div>
// `
//   )
//   .join("");
