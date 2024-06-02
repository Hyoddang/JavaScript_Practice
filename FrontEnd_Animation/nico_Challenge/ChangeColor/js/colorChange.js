const select = document.querySelector("body");

function updateColor() {
  const modify = window.innerWidth;
  select.classList.remove("blueColor", "purpleColor", "orangeColor");

  if (modify < 600) {
    select.classList.add("blueColor");
  } else if (modify >= 600 && modify <= 900) {
    select.classList.add("purpleColor");
  } else if (modify > 900) {
    select.classList.add("orangeColor");
  }
}

updateColor();

window.addEventListener("resize", updateColor);