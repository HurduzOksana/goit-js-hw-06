// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// 1.Отримуємо доступ до кнопок та спану
const ref = {
    decrement: document.querySelector(`[data-action="decrement"]`),
    increment: document.querySelector(`[data-action="increment"]`),
    span: document.querySelector(`#value`),
};

// 2.Створюємо змінну counterValue
let counterValue = 0;

// 3.Додаємо слухачів до обидвох кнопок
ref.decrement.addEventListener(`click`, userDecrementClick);
ref.increment.addEventListener(`click`, userIncrementClick);

// 4.Створюємо функцію додавання по кліку
function userDecrementClick(event) {
    counterValue -= 1;
    // Прив'язуємо значення до спану
    ref.span.textContent = counterValue;
};

// 5. Створюємо функцію віднімання по кліку
function userIncrementClick(event) {
    counterValue += 1;
    // Прив'язуємо значення до спану
    ref.span.textContent = counterValue;
};
