const hex = document.querySelector("#hex");
const rgb = document.querySelector("#rgb");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

function newGradient() {
  let gradient = (body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")");

  rgb.textContent = body.style.background + ";";
  hex.textContent = gradient + ";";
}

color1.addEventListener("input", newGradient);
color2.addEventListener("input", newGradient);
