// console.log(typeof obj);

// let array = [1, 2, 3];
// console.log(typeof array);
// console.log(typeof document.body);
// console.log(typeof null);

const obj = {
  //index: value
  pseudo: "Polymorf",
  ville: "Annecy",
};
// Ajouter
obj.age = 15;
//Modifier
obj.ville = "Lille";
//Supprimer
delete obj.ville;
console.log(obj);
//checker si une propriété existe
// console.log("pseudo" in obj);
// console.log("ville" in obj);

// Parcourir un objert
for (const key in obj) {
  console.log(key);
  console.log(key.value);
}
