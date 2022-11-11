// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

// 1.Отримуємо доступ до інпуту
const userInput = document.querySelector(`#validation-input`);

// 2.Додаємо слухача на подію блюр та передаємо колбек-функцію
userInput.addEventListener(`blur`, verifyAmountSymbols);

// 3.Створюємо функцію на перевірку кількості символів

function verifyAmountSymbols(event) {
    
    if (event.currentTarget.value.length === Number(userInput.dataset.length)) {
        userInput.classList.add(`valid`);
        userInput.classList.remove(`invalid`);
    } else {
        userInput.classList.add(`invalid`);
        userInput.classList.remove(`valid`);
    }
    console.log(event.currentTarget.value.length);
}
