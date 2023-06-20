const nom = document.querySelector("h1");
const image = document.querySelector("img");
const elemList = document.querySelectorAll(".list-item");
nom.addEventListener("mouseover", () => {
  nom.style.color = "orange";
});
nom.addEventListener("mouseout", () => {
  nom.style.color = "white";
});

for (let i = 0; i < elemList.length; i++) {
  elemList[i].style.fontSize = "35px";
}

function changeColor() {
  document.querySelector("img").style.borderColor = "orange";
  document.querySelector("img").style.borderWidth = "20px";
}
function backColor() {
  document.querySelector("img").style.borderColor = "blue";
  document.querySelector("img").style.borderWidth = "2px";
}
