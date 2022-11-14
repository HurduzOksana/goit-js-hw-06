// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color 
// і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Створити доступ до боді
const bodyEl = document.querySelector(`body`);

// Створити доступ до кнопки
const buttonEl = document.querySelector(`.change-color`);

// Створити доступ до спану
const spanEl = document.querySelector(`.color`);


// 2.Додаємо слухача на click
buttonEl.addEventListener(`click`, changeColor);

// Cтворюємо функцію для зв'язки кнопки і зміни кольору
function changeColor(event) {
  const color = getRandomHexColor();
  spanEl.textContent = color;
  bodyEl.style.backgroundColor = color;
}

