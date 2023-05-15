//DATA

export let selectedNums = [];

export function addNums(num) {
  if (selectedNums.at(-1) === "." && num === ".") {
    throw new Error("cannot be used '.' in a row");
  }
  if (selectedNums.at(-1) === "-" && num === "-") {
    throw new Error("cannot be used '-' in a row");
  }
  if (selectedNums.at(-1) === "+" && num === "+") {
    throw new Error("cannot be used '+' in a row");
  }
  if (selectedNums.at(-1) === "*" && num === "*") {
    throw new Error("cannot be used '*' in a row");
  }
  if (selectedNums.at(-1) === "/" && num === "/") {
    throw new Error("cannot be used '/' in a row");
  }

  console.log(num);
  selectedNums = [...selectedNums, num];
  return selectedNums;
}

export function calculate() {
  return eval(selectedNums.join(""));
}

export function ac() {
  selectedNums = [];
  return selectedNums;
}

export function deleteLastNum() {
  selectedNums.splice(selectedNums.length - 1);
  return selectedNums;
}

function calc(calculation) {
  calculation.split("+").map();
}
export function playSound(sound) {
  sound = document.getElementById("sound");

  sound.play();
}
