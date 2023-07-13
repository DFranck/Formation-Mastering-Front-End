// console.log(typeof obj);

// let array = [1, 2, 3];
// console.log(typeof array);
// console.log(typeof document.body);
// console.log(typeof null);

const obj = {
  //index: value
  pseudo: "Polymorf",
  ville: "Annecy",
  direBonjour: function () {
    console.log("Bonjour je suis " + this.pseudo);
  },
  // direBonjour() {
  // },
};
// Ajouter
obj.age = 15;
obj["admin"] = true;
//Modifier
obj.ville = "Lille";
//Supprimer
// delete obj.ville;
// console.log(obj);
//checker si une propriété existe
// console.log("pseudo" in obj);
// console.log("ville" in obj);

// Parcourir un objert
for (const key in obj) {
  // console.log(key + " : " + obj[key]);
}

// console.log(obj.direBonjour());

//Obtenir les clés

const keys = Object.keys(obj);
// console.log(keys);

//obtenir les valeurs

const values = Object.values(obj);
// console.log(values);

const nestedArray = Object.entries(obj);
// console.log(nestedArray);

const obj2 = {
  taille: "1m80",
  poids: "75kg",
  pseudo: "poly",
};

//Fusionner objets
const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);

//Empecher les modifs
// const newobj = Object.freeze(obj);

//Empeche les ajouts
const newobj = Object.seal(obj);
newobj.pseudo = "test";
newobj.adress = "42 avenue du code";
// console.log(newobj);

//==========================================
//Constructeur d'objets
//==========================================

//Fonction constructeur**************

function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;
  this.GetCity = function () {
    console.log(this.pseudo + " habite à " + this.ville);
  };
}

const user1 = new User("MsBox", "Annecy");
const user2 = new User("Lima", "Sevrier");

// console.log(user2.GetCity());

//Factory functions**************

function User3(pseudo, ville) {
  return {
    pseudo: pseudo,
    ville,
  };
}

const user4 = User3("Hélio", "Lamai");
// console.log(user4);

//==========================================
//Constructeur de class
//==========================================

class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  //METHODES
  sayMyName = function () {
    console.log("Bonjour je suis " + this.pseudo);
  };
}

const user5 = new Utilisateur("Paola", "Bretagne");

Utilisateur.prototype.sayCity = function () {
  console.log("J'habite à " + this.ville);
};

//Function et methode dans proto sons 30% plus rapide a jouer que directement dans l'objet

Object.assign(Utilisateur.prototype, {
  method1() {
    //ma methode
  },
  method2() {
    //ma methode
  },
  method3() {
    //ma methode
  },
});

// console.log(user5);

//==========================================
//Constructeur d'héritage
//==========================================

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saySomething(text) {
    console.log(this.name + " dit " + text);
  }
}

class Dogs extends Animal {
  run() {
    console.log("Le chien court!");
  }
}
class Cats extends Animal {
  hunt() {
    console.log("J'ai attrapé un oiseau!");
  }
}

const jairo = new Dogs("Chouchou", "8ans");

// console.log(jairo.run());
