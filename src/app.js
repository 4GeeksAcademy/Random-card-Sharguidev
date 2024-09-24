/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generateCard();
};

function generateCard() {
  const numberRan = document.querySelector("#card-numbers");
  const icono = document.querySelector("#card-icons");
  const ico = document.querySelector("#card-icon");

  const icons = ["♦", "♥", "♠", "♣"];
  const numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "♛",
    "♚",
    "Ace"
  ];

  const randomIcons = icons[Math.floor(Math.random() * icons.length)];
  const randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];

  numberRan.innerHTML = randomNumbers;
  icono.innerHTML = randomIcons;
  ico.innerHTML = randomIcons;
}
