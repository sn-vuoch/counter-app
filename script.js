let decreaseBtn = document.querySelector(".decrease-btn");
let increaseBtn = document.querySelector(".increase-btn");
let resetBtn = document.querySelector(".reset-btn");
let number = document.querySelector(".number");

let count = 0;

function decrease() {
  return count--;
}

function increase() {
  return count++;
}

function reset() {
  return (count = 0);
}

function updateDisplay() {
  number.textContent = count;
}

function applyColor() {
  if (count > 0) {
    number.classList.add("green-color");
  } else if (count < 0) {
    number.classList.add("red-color");
  } else {
    number.classList.remove("green-color", "red-color");
  }
}

decreaseBtn.addEventListener("click", () => {
  decrease();
  applyColor();
  updateDisplay();
});

increaseBtn.addEventListener("click", () => {
  increase();
  applyColor();
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  reset();
  applyColor();
  updateDisplay();
});
