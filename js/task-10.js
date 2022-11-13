function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector('#controls')
const amountBoxInput = document.querySelector('#controls input');
const createBoxBtn = document.querySelector('#controls button[data-create]');
const destroyBoxBtn = document.querySelector('#controls button[data-destroy]');
const boxStorage = document.querySelector('#boxes')



// create

const createBoxes = (amount) => {
  let boxWidth = 30;
  let boxHeight = 30;
  
  if (boxStorage.lastElementChild !== null) {
    const lastElementWidth = parseInt(boxStorage.lastElementChild.style.width);
    const lastElementHeight = parseInt(boxStorage.lastElementChild.style.height);
    
    boxWidth = lastElementWidth + 10;
    boxHeight = lastElementHeight + 10;
  }
  
  const createdBoxesStorage = [];

  for (let index = 1; index <= amount; index += 1) {
    const box = document.createElement('div')

    box.style.width = `${boxWidth}px`
    box.style.height = `${boxHeight}px`
    box.style.backgroundColor = getRandomHexColor();

    

    boxWidth += 10;
    boxHeight += 10;

    createdBoxesStorage.push(box)
  }
  
  boxStorage.append(...createdBoxesStorage);
}


amountBoxInput.addEventListener('input', (event) => {
  if (parseInt(event.currentTarget.value) > parseInt(amountBoxInput.max)) {
    event.currentTarget.value = amountBoxInput.max
  }

})

createBoxBtn.addEventListener('click', () => {
    createBoxes(controls.querySelector('input').value)
  });



// destroy

const destroyBoxes = () => {
  const selectAllBoxesToDestoy = boxStorage.querySelectorAll('div')
  
  selectAllBoxesToDestoy.forEach(box => box.remove())
}



destroyBoxBtn.addEventListener('click', () => { destroyBoxes() })