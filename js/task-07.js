// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text,
// оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

// 1.Робимо доступ до інпуту та спану

const userInput = document.querySelector(`#font-size-control`);
const userTextSpan = document.querySelector(`#text`);

// 2.Додаємо слухача на подію та передаємо колбек-функцію
userInput.addEventListener(`input`, changeTextSize);

// 3.Створюємо функцію 

function changeTextSize(event) {
    
    // Прирівняти розмір тексту до значення інпуту
    userTextSpan.style.fontSize = `${userInput.value}px`;
}
