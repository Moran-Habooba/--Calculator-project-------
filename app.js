//RENDER
import {
  ac,
  addNums,
  calculate,
  deleteLastNum,
  selectedNums,
  playSound,
} from "./data.js";
const $previousScreen = document.querySelector(".previous-screen");
const $currentScreen = document.querySelector(".current-screen");
const $calculatorGrid = document.querySelector(".buttons");
let isCalculationDone = false;

document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Delete") {
    renderAc();
    renderDisplay();
    isCalculationDone = false;
  } else if (isCalculationDone) {
    return;
  }
  if (!isNaN(key) && key !== " ") {
    addNums(key);
    renderDisplay();
  } else if (["+", "-", "*", "/", "."].includes(key)) {
    addNums(key);
    renderDisplay();
  } else if (key === "Enter") {
    calculate();
    renderCalculate();
    renderDisplay();
  } else if (key === "Backspace") {
    deleteLastNum();
    renderDisplay();
  } else if (key === "Delete") {
    renderAc();
    renderDisplay();
  }
  playSound();
});

$calculatorGrid.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.matches("button")) {
    playSound();
    handleNewNum(e.target.innerHTML);
  }
});

function renderDisplay() {
  $previousScreen.innerHTML = selectedNums.join("");
}

function handleNewNum(num) {
  if (num === "AC") {
    renderAc();
    renderDisplay();
    isCalculationDone = false;
  } else if (isCalculationDone) {
    return;
  }
  if (num === "DEL") {
    deleteLastNum();
  } else if (num === "AC") {
    renderAc();
  } else if (num === "=") {
    calculate();
    renderCalculate();
  } else {
    addNums(num);
  }

  renderDisplay();
}

function renderAc() {
  ac();
  $currentScreen.innerHTML = "";
  renderDisplay();
}

function renderCalculate() {
  calculate();

  $currentScreen.innerHTML = calculate();
  isCalculationDone = true;
}
