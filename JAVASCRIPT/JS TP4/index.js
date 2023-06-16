// // Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus
// const btn = document.getElementById("btn");
// const sideBar = document.getElementById("side-bar");
// const btnSpan = btn.querySelectorAll("span");
// const btnSpan1 = btn.querySelector(".btn1");
// const btnSpan2 = btn.querySelector(".btn2");
// const btnSpan3 = btn.querySelector(".btn3");
// // btn.addEventListener("click", () => {
// //   console.log("HambergerClicked!");
// //     sideBar.classList.toggle("side-bar");
// //     //   sideBar.style.left = "0 !important"; POSSIBLE???????????
// // });

// window.addEventListener("click", (e) => {
//   //   console.log(e.target);
//   if (e.target == btn || Array.from(btnSpan).includes(e.target)) {
//     sideBar.classList.toggle("side-bar");
//     btnSpan1.style.transform = "rotate(-45deg)";
//     btnSpan2.style.transform = "rotate(45deg) translate(-10px, -10px)";
//     btnSpan3.style.display = "none";
// } else {
//     sideBar.classList.remove("side-bar");
//   }
//   btnSpan1.style.transform = "";
//   btnSpan2.style.transform = "";
//   btnSpan3.style.display = "";

// });

// // Ranger la sidebar si on click sur le contenu principal

// // BONUS
// // Créer en css l'hamburger menu qui se transforme en croix

// // Aide
// // Priorités en CSS : id > classe > baliseHtml

// *****************CORRECTION***********************

const btn = document.getElementById("btn");
const sideBar = document.getElementById("side-bar");
const content = document.querySelector(".content");
console.log(btn);

btn.addEventListener("click", () => {
  // console.log("btnclick!");
  sideBar.classList.toggle("active");
});

content.addEventListener("click", () => {
  sideBar.classList.remove("active");
});
