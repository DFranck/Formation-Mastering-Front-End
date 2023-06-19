// Créer la logique de compte à rebours

// choice.value = 5 minutes

// choice.value * 60 = totalSeconds

// let minutes = Math.floor(totalSeconds / 60);
// let seconds = totalSeconds % 60

// Créer un événement à la validation du form pour lancer le compte à rebours
let totalSeconds;
let interval;
const countDown = () => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  let sec = seconds < 10 ? "0" + seconds : seconds;
  let min = minutes < 10 ? "0" + minutes : minutes;

  const countdownDisplay = document.getElementById("countdownDisplay");
  countdownDisplay.textContent = `${min}:${sec}`;
  if (totalSeconds > 0) {
    totalSeconds--;
    console.log(totalSeconds);
  } else {
    countdownDisplay.textContent = `C'est fini!`;
    clearInterval(interval);
    console.log(totalSeconds);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isNaN(choice.value)) {
    alert("Entrer un nombre avant que je me fache");
  } else {
    totalSeconds = choice.value * 60;
    clearInterval(interval);
    choice.value = "";
    interval = setInterval(countDown, 100);
  }
});
//==================================================================================
// GPT 4 SOLUTION
//==================================================================================
// const form = document.getElementById("form");
// const choice = document.getElementById("choice");
// const display = document.getElementById("countdownDisplay");
// let interval;

// choice.addEventListener("input", (e) => {
//   let total = e.target.value * 60;
//   clearInterval(interval); // s'assurer qu'il n'y ait pas d'intervalle précédent en cours d'exécution

//   interval = setInterval(() => {
//     let minutes = Math.floor(total / 60);
//     let seconds = total % 60;

//     if (total <= 0) {
//       clearInterval(interval);
//       display.innerHTML = `<span>00</span>:<span>00</span>`;
//       return;
//     }

//     display.innerHTML = `<span>${minutes.toString().padStart(2, "0")}</span>:<span>${seconds.toString().padStart(2, "0")}</span>`;

//     total--;

//   }, 1000);
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   choice.value = "";
// });
