function findGreater() {
  const userInput1 = +document.getElementById('userInput1').value;
  const userInput2 = +document.getElementById('userInput2').value;
  const para = document.getElementById('result');

  if (userInput1 > userInput2) {
    para.textContent = `${userInput1} is a greater number`;
  } else {
    para.textContent = `${userInput2} is a greater number`;
  }
}
btn.addEventListener('click', findGreater);
