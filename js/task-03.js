// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. 
// Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.


const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



// // 1.Спочатку робимо одну картку, яку наповнюємо 
// const makeGalleryCard = ({ url, alt } = {}) => {
//   // Створюємо li
//   const galleryLi = document.createElement(`li`);
//   // Створюємо imq
//   const galleryLiElement = document.createElement(`imq`);
//   // Наповнюємо imq
//   galleryLiElement.src = url;
//   galleryLiElement.alt = alt;

//   // Приєднуємо imq в li
//   galleryLi.append(galleryLiElement);
//   // Повертаємо готову картку
//   return galleryLi;
// };

// // 2.Створюємо масив карток
// const galleryCardContainer = images.map((el, idx, arr) => {
//   // Викликаємо колбек функцію 
//   return makeGalleryCard(el);
// });
// console.log(galleryCardContainer);

// // 3.Розпаковуємо новий масив та додаємо його в ul (galleryList);
// galleryList.append(...galleryCardContainer);

// 1.Створюємо картку

const galleryList = document.querySelector(`.gallery`);

const makeGalleryCard = ({ url, alt } = {}) => {
  // 2.Створюємо шаблонний рядок
  return `
  <li>
  <img src="${url}" alt="${alt} width="250" height="250"/>
  </li>
  `
};

const galleryCardContainer = images.map((el, idx, arr) => {
  // Викликаємо колбек функцію 
  return makeGalleryCard(el);
});
console.log(galleryCardContainer);

galleryList.insertAdjacentHTML(`afterbegin`, galleryCardContainer.join(``));

// Додаємо стилі 
// galleryList.style.display = "flex";
// galleryList.style.gap = `30px`;
// galleryList.style.listStyle = "none";
// galleryList.style.justifyContent = "center";