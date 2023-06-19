
// window.addEventListener("mousemove", (e) => {
//   // console.log(cursor, mouse1, mouse2);
//   cursor.style.top = e.pageY + "px";
//   cursor.style.left = e.pageX + "px";

//   mouse1.style.top = e.pageY + "px";
//   mouse1.style.left = e.pageX + "px";

//   mouse2.style.top = e.pageY + "px";
//   mouse2.style.left = e.pageX + "px";
// });

function updatePosition(element, e) {
    element.style.top = e.pageY + 'px';
    element.style.left = e.pageX + 'px';
}

window.addEventListener('mousemove', (e) => {
    [cursor, mouse1, mouse2].forEach(element => updatePosition(element, e));
});
