let item;

document.addEventListener("dragstart", (e) => {
  item = e.target;
});

document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

document.addEventListener("drop", (e) => {
  e.preventDefault(e);
  if (e.target.getAttribute("data-draggable") == "target") {
    e.target.appendChild(item);
  }
});

document.addEventListener("dragend", (e) => {
  item = null;
});
