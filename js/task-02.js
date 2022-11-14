
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// const ingredList = document.querySelector("#ingredients");

// const ingredLiEl = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");

// ingredList.insertAdjacentHTML("beforeend", ingredLiEl);

const ingredientsRef = document.querySelector('#ingredients');

const itemsCreate = ingredients.map(e => {
  const itemRef = document.createElement('li');
  itemRef.textContent = e;
  return itemRef;
});

ingredientsRef.append(...itemsCreate);