function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const changeColorBtnEl = document.querySelector('button.change-color');
const colorNameEl = document.querySelector('span.color')

changeColorBtnEl.addEventListener('click', () => {
  const randomHexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomHexColor;
  colorNameEl.textContent = randomHexColor;
})