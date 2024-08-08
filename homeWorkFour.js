'use strict';

// 1. Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:
// Рішення має працювати незалежно від конкретних значень в масиві імен

const userNames1 = ['Петрик Oльга Іванівна', 'Гнатюк Петро Антонович', 'Рудко Андрій Опанасович'];

let initials = userNames1
  .map((name) => {
    return (
      name
        .split(' ')
        .map((part) => part[0])
        .join('.') + '.'
    );
  })
  .sort();

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

// 2. Задача на фільтрування масиву
const userNames2 = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

// через вбудований метод масивів
function filterVowels(names) {
  const vowels = ['А', 'Е', 'Є', 'И', 'І', 'Ї', 'О', 'У', 'Ю', 'Я'];
  function startsWithVowel(word) {
    return vowels.includes(word[0]);
  }
  return names.filter((name) => startsWithVowel(name));
}

let filteredNames1 = filterVowels(userNames2);
console.log(filteredNames1); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

// через умовну конструкцію
let filteredNames2 = [];
const vowels = ['А', 'Е', 'Є', 'И', 'І', 'Ї', 'О', 'У', 'Ю', 'Я'];
for (let i = 0; i < userNames2.length; i++) {
  if (vowels.includes(userNames2[i][0])) {
    filteredNames2.push(userNames2[i]);
  }
}

console.log(filteredNames2); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

// 3. Задача на розворот числа:
const currentMaxValue = 4589;
let reverseMaxValue = +currentMaxValue.toString().split('').reverse().join('');

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

// 4. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:
const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

productOfArray = resultsArray
  .flat(Infinity)
  .filter((item) => typeof item === 'number') // додатково додав фільтрацію по типу елементу масиву
  .reduce((product, num) => product * num, 1);

console.log(productOfArray); // 24
