//========================================
//CANVAS
//========================================
function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect(50, 50, 50, 150);

  ctx.fillStyle = "rgba(0,100,200,.5)";
  ctx.fillRect(50, 30, 100, 50);

  ctx.fillStyle = "rgba(100,100,200,.5)";
  ctx.fillRect(10, 25, 100, 100);
  ctx.clearRect(15, 25, 40, 40);
  ctx.strokeRect(125, 75, 50, 50);

  ctx.fillStyle = "rgba(200,100,200,.5)";
  ctx.beginPath();
  ctx.moveTo(180, 150);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 150);
  ctx.fill();
}

window.addEventListener("load", () => {
  draw();
});

//========================================
// TRY CATCH
//========================================

try {
  //test un block de code
  maFunction();
} catch (err) {
  // console.log(err);
}

function isValidJSON(txt) {
  try {
    JSON.parse(txt);
    return true;
  } catch {
    return false;
  }
}

// console.log(isValidJSON(51));

//Finally
try {
  //test un block de code
  maFunction();
} catch (err) {
  // console.log(err);
} finally {
  // console.log("on est arrivé au bout!");
}

//Throw
function isNumber(num) {
  if (isNaN(num)) {
    throw "not a number";
  } else {
    console.log("c'est un nombre");
  }
  //plein de code potentiel
}

try {
  isNumber("2d");
} catch (err) {
  // console.log(err);
}

//========================================
// STRICT MODE
//========================================

// "use strict";
//TOUT EN HAUT DE PAGE
