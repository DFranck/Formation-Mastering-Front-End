const counterDisplay = document.querySelector("h3");
//=Déclaration de la variable counterDisplay et liaison avec le h3
// console.log(counterDisplay);
//=controle liaison
let counter = "";

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  //=Création d'une balise span dans le fichier html cible
  bubble.classList.add("bubble");
  //ajoute une class à la balise "span(html)" crée via "const bubble(js)"
  document.body.appendChild(bubble);
  //=indique la balise parent de la balise
  //   console.log(bubble);
  //=test si la balise est bien reliée
  const size = Math.random() * 200 + 200 + "px";
  //=La "methode" Math.random permet de generer des chiffre aleatoire entre 0 et 1, on peut ensuite multiplier, additioner.. ce chiffre
  //   console.log(size);
  //=Controle le chiffre de la constante "size"
  bubble.style.height = size;
  bubble.style.width = size;
  //=Injection du style height et width dans la balise "span" de class bubble avec les valeur de la const size
  const positiontop = Math.random() * 100 + 50 + "%";
  const positionleft = Math.random() * 100 + "%";
  //=Création de variable contenant la position top et left de bubble (POSITION CSS !!ABSOLUTE!!)
  //   console.log(positiontop);
  //=Controle de la bonne déclaration de la variable
  bubble.style.top = positiontop;
  bubble.style.left = positionleft;
  //=Injection du style top et left à la balise de class bubble
  const plusMinus = Math.random() > 0.4 ? 1 : -1;
  //=condition ternaire (if else)
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
  //=Injection du style a la variable --left de la class bubble (!!CREE EN CSS!!)
  bubble.addEventListener("click", () => {
    counter++;
    //=incrémente la variable counter de 1 lorsqu'on click sur une bulle
    console.log(counter);
    //=controle la valeur de counter
    counterDisplay.textContent = counter;
    //=remplace le text h3 lié a la variable counterdisplay par la valeur de counter (texteContent dans les balise) innerhtml si la balise c'est pas encore crée
    bubble.remove(counter);
  });
  //=supprimer la balise span class bubble au click
  setTimeout(() => {
    bubble.remove();
  }, 8000);
  //=supprimer la balise span class bubble apres 8s (8000ms)
};
//=Création de la fontion bubbleMaker une fois que la logique bubble fonctionne

setInterval(bubbleMaker, 1000);
//=jou la fontion bubbleMaker toute les x milliseconde
