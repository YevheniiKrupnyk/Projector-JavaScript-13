'use strict';

// 1. Задача про обчислення різниці часу

// Напишіть функцію яка буде буде приймати 3 параметри

// — початкову дату (string)

// — кінцеву дату (string)

// — розмірність ('days',  'hours', 'minutes', seconds)

// Функція повертатиме часовий період між цими датами згідно розмірності.

// Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).

// Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.

function durationBetweenDates(startDate = '01 Jan 2000', endDate = '11 Aug 2024', dimension = 'days') {
  // значення по замовчуванню
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffMilliseconds = Math.abs(end - start); // різниця в мілісекундах

  let period;
  switch (dimension) {
    case 'days':
      period = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));
      break;
    case 'hours':
      period = Math.floor(diffMilliseconds / (1000 * 60 * 60));
      break;
    case 'minutes':
      period = Math.floor(diffMilliseconds / (1000 * 60));
      break;
    case 'seconds':
      period = Math.floor(diffMilliseconds / 1000);
      break;
    default:
      return 'Invalid dimension. Need "days", "hours", "minutes", or "seconds"';
  }

  // Повертаємо результат у вказаному форматі
  return `${period} ${dimension}`;
}

const firstDate = durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'); // поверне '86400 seconds'
const secondDate = durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'); // поверне '362 days'
const thirdDate = durationBetweenDates(); // поверне '8988 days'
console.log(firstDate);
console.log(secondDate);
console.log(thirdDate);

// 2. Задача про перетворення об'єкту
// Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одним словом), а значення - його ціна.
// Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.

function optimizer(data) {
  const modifiedData = {}; // новий пустий об'єкт

  for (const [key, value] of Object.entries(data)) {
    const lowercaseKey = key.toLowerCase();
    const roundedPrice = Number(parseFloat(value).toFixed(2));
    modifiedData[lowercaseKey] = roundedPrice; // додавання нових ключ/значення до об'єкту
  }

  return modifiedData;
}

// Приклад використання:
const priceData = {
  Apples: '23.4',
  BANANAS: '48',
  oRAngGEs: '48.7584',
};

console.log(optimizer(priceData));
