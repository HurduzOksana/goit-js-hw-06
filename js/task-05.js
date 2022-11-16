// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name - output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>


// 1.Створюємо посилання на форму
const userTextInput = document.querySelector(`#name-input`);
// 2.Створюємо посилання на спан
const userTextOutput = document.querySelector(`#name-output`);
// 3.Додаємо слухача на подію інпут
userTextInput.addEventListener(`input`, onInputChange)

// 4.Створюємо функцію для зміни значення в спані
function onInputChange(event) {
    if (userTextInput.value !== ``) {
        return userTextOutput.textContent = userTextInput.value;
    }
    return userTextOutput.textContent = `Anonymous`;
}