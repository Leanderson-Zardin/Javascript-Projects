let button = document.querySelector("button");
let cor = document.querySelector("p");
let color = document.querySelector(".main");

// RGB COLOR
function rgbColor () {
  let random1 = Math.floor(Math.random() * 256)
  let random2 = Math.floor(Math.random() * 256)
  let random3 = Math.floor(Math.random() * 256)

  color.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
  cor.innerText = `RGB(${random1}, ${random2}, ${random3})`;
}

// HEX COLOR

let hex = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function hexColor() {
  let random1 = Math.floor(Math.random() * 16)
  let random2 = Math.floor(Math.random() * 16)
  let random3 = Math.floor(Math.random() * 16)
  let random4 = Math.floor(Math.random() * 16)
  let random5 = Math.floor(Math.random() * 16)
  let random6 = Math.floor(Math.random() * 16)

  color.style.backgroundColor = `#${hex[random1] + hex[random2] + hex[random3] + hex[random4] + hex[random5] + hex[random6]}`;

  cor.innerText = `#${hex[random1] + hex[random2] + hex[random3] + hex[random4] + hex[random5] + hex[random6]}`;
}

// COLOR NAME

let colors = ["Yellow", "Green", "Red", "Orange", "Blue", "Purple", "Pink", "Brown"];

function colorName () {
  let random = Math.floor(Math.random() * 8);
  
  console.log(random);
  color.style.backgroundColor = colors[random];
  cor.innerText = colors[random];
}

// Random Color

function randomColor() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      rgbColor();
      break;
    case 1:
      hexColor()
      break;
    case 2:
      colorName();
      break;
    default:
      alert("Something goes wrong!");
      break;
  };
}

button.addEventListener("click", randomColor);

// TOGGLE - NAVBAR

let toggleButton = document.querySelector("img");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
})