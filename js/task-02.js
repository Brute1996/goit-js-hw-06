const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




const ingredientsListEl = document.querySelector('#ingredients');
  
const createIngridients = ingredients.map(ingredient => {
  let newIngridient = document.createElement('li')
  newIngridient.textContent = ingredient;
  newIngridient.classList.add('item')
  return newIngridient
});


ingredientsListEl.append(...createIngridients);
