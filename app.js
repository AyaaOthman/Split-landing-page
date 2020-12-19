const left = document.querySelector("#left-half");
const right = document.querySelector("#right-half");

function scaleLeft() {
  left.classList.add("active");
}
function scaleRight() {
  right.classList.add("active");
}

function bakeToBasicLeft() {
  left.classList.remove("active");
}
function bakeToBasicRight() {
  right.classList.remove("active");
}
