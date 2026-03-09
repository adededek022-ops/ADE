let btn = document.getElementById("btn");
let start = document.getElementById("start");
let content = document.getElementById("content");

btn.onclick = function () {
  start.style.display = "none";
  content.classList.remove("hidden");
};

/* efek bintang */

for (let i = 0; i < 60; i++) {
  let star = document.createElement("div");

  star.style.position = "absolute";
  star.style.width = "2px";
  star.style.height = "2px";
  star.style.background = "white";

  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";

  star.style.opacity = Math.random();

  document.body.appendChild(star);
}
