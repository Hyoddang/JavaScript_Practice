const maxNum = document.querySelector(".maxNum");

const chooseNum = document.querySelector(".chooseNum");

const submitBtn = document.querySelector(".submitBtn");

const textInner = document.querySelector(".innerText");

const resultText = document.querySelector(".resultText");

function randomNumber(e) {
  e.preventDefault()

  let maxNumber = parseInt(maxNum.value, 10);
  let random = Math.ceil(Math.random() * maxNumber);

  if(chooseNum.value <= 0 || chooseNum.value === '') {
    return alert("Input Number or Number > 0");
  }

  if (parseInt(chooseNum.value) === random) {
    resultText.innerHTML = "You won !";
  } else {
    resultText.innerHTML = "You lost !";
  }
  textInner.innerHTML = `You Choose: ${chooseNum.value}, the machine chose: ${random}.`;
}

submitBtn.addEventListener("click", randomNumber);
