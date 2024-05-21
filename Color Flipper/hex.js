let button = document.querySelector("button");
let cor = document.querySelector("p");

let hex = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function changeColor() {
  let random1 = Math.floor(Math.random() * 16)
  let random2 = Math.floor(Math.random() * 16)
  let random3 = Math.floor(Math.random() * 16)
  let random4 = Math.floor(Math.random() * 16)
  let random5 = Math.floor(Math.random() * 16)
  let random6 = Math.floor(Math.random() * 16)

  let color = document.querySelector(".main");

  color.style.backgroundColor = `#${hex[random1] + hex[random2] + hex[random3] + hex[random4] + hex[random5] + hex[random6]}`;
  
  cor.innerText = `#${hex[random1] + hex[random2] + hex[random3] + hex[random4] + hex[random5] + hex[random6]}`;
}

button.addEventListener("click", changeColor)

// TOGGLE - NAVBAR

let toggleButton = document.querySelector("img");
let navbar = document.querySelector("nav");
let header = document.querySelector(".main");
let toggleImage = true;

toggleButton.addEventListener("click", () => {
  navbar.classList.toggle("active");
  header.classList.toggle("active");
  
  if (toggleImage) {
    toggleButton.src = "assets/barras-cruzadas.svg";
  } else {
    toggleButton.src = "assets/barras-paralelas.svg";
  }
  toggleImage = !toggleImage
})