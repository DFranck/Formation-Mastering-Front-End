
const navBar = document.getElementById("navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > lastScroll) {
    navBar.style.top = -60 + "px";
  } else {
    navBar.style.top = 0;
  }

  lastScroll = currentScroll;
  console.log(lastScroll, currentScroll);
});
