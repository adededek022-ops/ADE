let btn = document.getElementById("btn");
let start = document.getElementById("start");
let content = document.getElementById("content");

btn.onclick = function () {
  start.style.display = "none";
  content.classList.remove("hidden");
};

/* love dan tulisan jatuh */

let container = document.getElementById("love-container");

let words = ["❤️", "🤍", "I LOVE YOU"];

for (let i = 0; i < 50; i++) {
  let love = document.createElement("div");

  love.className = "love";
  love.innerText = words[Math.floor(Math.random() * words.length)];

  love.style.left = Math.random() * 100 + "vw";
  love.style.animationDuration = 3 + Math.random() * 5 + "s";
  love.style.fontSize = 14 + Math.random() * 22 + "px";

  container.appendChild(love);
}
