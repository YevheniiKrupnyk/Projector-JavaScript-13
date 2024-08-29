'use strict';

// 1. Напишіть функцію addThemAll
// Вона буде знаходити суму усіх своїх аргументів незалежно від їх кількості (але без використання вбудованого об'єкту Math)
// Використайте оператор розширення

function addThemAll(...args) {
  return args.reduce((sum, current) => sum + current, 0);
}

console.log(addThemAll(2, 4)); // 6
console.log(addThemAll(1, 2, 3, 4)); // 10
console.log(addThemAll(5, 5, 10)); // 20

// 2. Напишіть функцію яка працює таким чином: multiply(a)(b)  // a * b

function multiply(a) {
  return function (b) {
    return a * b;
  };
}

console.log(multiply(5)(5)); // 25
console.log(multiply(2)(-2)); // -4
console.log(multiply(4)(3)); // 12

// 3. Напишіть функцію яка буде використовуватись для сортування масиву фільмів
// Функція буде приймати два аргумента:
// — властивість за якою треба посортувати.
// — опцію напрямку сортування (зростання чи спадання)

function byProperty(property, direction) {
  return function (a, b) {
    if (a[property] < b[property]) return direction === '>' ? 1 : -1;
    if (a[property] > b[property]) return direction === '>' ? -1 : 1;
    return 0;
  };
}

const movies = [
  {
    movieName: 'The Thing',
    releaseYear: 1982,
    directedBy: 'Carpenter',
    runningTimeInMinutes: 109,
  },
  {
    movieName: 'Aliens',
    releaseYear: 1986,
    directedBy: 'Cameron',
    runningTimeInMinutes: 137,
  },
  {
    movieName: 'Men in Black',
    releaseYear: 1997,
    directedBy: 'Sonnenfeld',
    runningTimeInMinutes: 98,
  },
  {
    movieName: 'Predator',
    releaseYear: 1987,
    directedBy: 'McTiernan',
    runningTimeInMinutes: 107,
  },
];

console.log(movies.sort(byProperty('releaseYear', '>')));
// console.log(movies.sort(byProperty('runningTimeInMinutes', '<')));
// console.log(movies.sort(byProperty('movieName', '>')));
// console.log(movies.sort(byProperty('directedBy', '<')));

// 4. Напишіть функцію яка відфільтрує масив унікальних значень Рішення має працювати незалежно від конкретних значень в масиві імен

const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
  return Array.from(new Set(array));
}

console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена']
