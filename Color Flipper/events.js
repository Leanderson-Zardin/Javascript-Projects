let button = document.querySelector("button");
let cor = document.querySelector("p");


function changeColor () {
  let random1 = Math.floor(Math.random() * 255)
  let random2 = Math.floor(Math.random() * 255)
  let random3 = Math.floor(Math.random() * 255)
  let color = document.querySelector(".main");
  color.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
  cor.innerText = `RGB(${random1}, ${random2}, ${random3})`;
}

button.addEventListener("click", changeColor);