/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const palo = ["♦", "♥", "♠", "♣"];
const valor = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const getRandom = maxCount => {
  return Math.floor(Math.random() * maxCount);
};

/* Dejo comentado esto que debí cambiar por conflicto con los colores desde el botón*/
function mostrarEvento() {
  let numero = document.querySelector(".numero");
  let rango = getRandom(valor.length);
  let rangoPalos = getRandom(palo.length);
  let palo1 = document.querySelector(".palo-sup");
  let palo2 = document.querySelector(".palo-inf");
  /*let claseColor = rangoPalos < 2 ? "rojo" : "negro";*/

  numero.innerHTML = valor[rango];
  palo1.innerHTML = palo[rangoPalos];
  /*palo1.className += " " + claseColor;*/
  palo2.innerHTML = palo[rangoPalos];
  /*palo2.className += " " + claseColor;*/
  /*console.log(claseColor);*/

  if (rangoPalos < 2) {
    palo1.style.color = "red";
    palo2.style.color = "red";
  } else {
    palo1.style.color = "black";
    palo2.style.color = "black";
  }
}

window.onload = function() {
  mostrarEvento();
};

document.querySelector(".boton").onclick = function() {
  mostrarEvento();
};
