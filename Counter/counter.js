let buttons = document.querySelectorAll(".btn");
let counter = document.querySelector("p");

let count = 0;

counter.innerHTML = count;

buttons.forEach(function(button) {
  button.addEventListener("click", getButton);

  // function getButton() {
  //   let operation = button.getAttribute('data-set')

  //   switch(operation) {
  //     case "decrease":
  //       count -= 1;
  //       break;
  //     case "increase":
  //       count += 1;
  //       break;
  //     case "reset":
  //       count = 0;
  //       break;
  //   }

  //   counter.innerHTML = count;
  // }

  function getButton() {
    let operation = button.classList;

    if (operation.contains("decrease")) {
      count -= 1;

    } else if (operation.contains("increase")) {
      count += 1;
    } else {
      count = 0;
    }

    if (count > 0) {
      counter.style.color = "green";
    } else if (count < 0) {
      counter.style.color = "red";
    } else {
      counter.style.color = "black";
    }

    counter.innerHTML = count;
  }
  
});