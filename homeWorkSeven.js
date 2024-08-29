'use strict';

// 1. Напишіть функцію detonatorTimer(delay) використовуючи setInterval

function detonatorTimer(delay) {
  let count = delay;

  const timer = setInterval(() => {
    if (count > 0) {
      console.log(count);
      count--;
    } else {
      console.log('BOOM!');
      clearInterval(timer);
    }
  }, 1000);
}

detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

// 2. Напишіть функцію detonatorTimer(delay) використовуючи вкладений setTimeout

function detonatorTimer2(delay) {
  if (delay > 0) {
    console.log(delay);
    setTimeout(() => detonatorTimer2(delay - 1), 1000);
  } else {
    console.log('BOOM!');
  }
}

detonatorTimer2(3);
// Виведе:
// 3
// 2
// 1
// BOOM!

// 3. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи що ці властивості виводять.
let book = {
  title: 'Путівник Галактикою',
  author: 'Дуглас Адамс',
  yearPublished: 1979,
  language: 'англійська',
  genre: 'науково-фантастичний роман',
  editions: 5,
  lastEditionYear: 1992,
  isClassic: false,

  introduceBook() {
    console.log(`"${this.title}" - це роман пісьменніка на ім'я ${this.author}, вперше опублікований у ${this.yearPublished} році.`);
  },

  updateEdition(year) {
    this.editions++;
    this.lastEditionYear = year;
    console.log(`Вийшло нове видання "${this.title}" у ${year} році. Це вже ${this.editions}-е видання.`);
  },

  describeSignificance() {
    if (this.isClassic) {
      console.log(`"${this.title}" вважається класикою жанрі ${this.genre}.`);
    } else {
      console.log(`"${this.title}" є важливою книгою в жанрі ${this.genre}.`);
    }
  },
};

book.introduceBook();
book.updateEdition(2021);
book.describeSignificance();

// 4. А тепер зробіть всі свої методи з попередньої задачі прив'язаними до контексту свого об'єкту
// Аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:
let securedIntroduceBook = book.introduceBook.bind(book);
let securedUpdateEdition = book.updateEdition.bind(book);
let securedDescribeSignificance = book.describeSignificance.bind(book);

setTimeout(securedIntroduceBook, 1000);
setTimeout(() => securedUpdateEdition(2023), 2000);
setTimeout(securedDescribeSignificance, 3000);

book.introduceBook();
book.updateEdition(2021);
book.describeSignificance();

// 5. Напишіть функцію-декоратор яка вповільнює виконання довільної функції на вказану кількість секунд.
function someFunction(a, b) {
  const result = a + b;
  console.log(`Результат обчислення: ${result}`);
  return result;
}

function slower(func, seconds) {
  return function (...args) {
    console.log(`Chill out, you will get your result in ${seconds} seconds`);
    setTimeout(() => {
      func.apply(this, args);
    }, seconds * 1000);
  };
}

let slowedSomeFunction = slower(someFunction, 5);
slowedSomeFunction(3, 4);
