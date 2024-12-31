
var random1 = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;

var imageSource1 = "images/dice" + random1 + ".png";
var imageSource2 = "images/dice" + random2 + ".png";

var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

image1.setAttribute("src", imageSource1);
image2.setAttribute("src", imageSource2);

if (random1 > random2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (random2 > random1) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").textContent = "Draw!";
}