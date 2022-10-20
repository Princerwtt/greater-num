function findGreater() {
  const userInput1 = +document.getElementById('userInput1').value;
  const userInput2 = +document.getElementById('userInput2').value;
  const resultText = document.getElementById('resultText');

  if (userInput1 > userInput2) {
    resultText.textContent = `${userInput1} is a greater number`;
  } else {
    resultText.textContent = `${userInput2} is a greater number`;
  }
}
btn.addEventListener('click', findGreater);
