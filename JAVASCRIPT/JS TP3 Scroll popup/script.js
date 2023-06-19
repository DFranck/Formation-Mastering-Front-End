let lastScroll = 0;
const improviseImg = document.getElementById("imgImprovise");
const popUp = document.getElementById("popup");
// console.log(popUp);

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  // console.log(currentScroll);
  if (currentScroll > lastScroll) {
    navbar.style.height = 45 + "px";
  } else {
    navbar.style.height = 90 + "px";
  }
  lastScroll = currentScroll;

  if (currentScroll > improviseImg.offsetTop - window.innerHeight * 0.4) {
    improviseImg.style.opacity = 1;
    improviseImg.style.transform = "translateX(0)";
  } else {
    improviseImg.style.opacity = 0;
    improviseImg.style.transform = `translateX(-200px)`;
  }

  if (currentScroll > popUp.offsetTop - window.innerHeight*0.00005) {
    popUp.style.opacity = 1;
    popUp.style.transform = "translateX(0px)";
  } else {
    popUp.style.opacity = 0;
    popUp.style.transform = "translateX(400px)";
  }
});

closeBtn.addEventListener("click", () => {
  popUp.style.display = "none";
});

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
