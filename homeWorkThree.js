'use strict';

// Напишіть функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.

function recursiveOddSumTo(number) {
  if (number <= 0) return 0; // Базовий випадок: number менше або дорівнює 0
  if (number % 2 !== 0) return number + recursiveOddSumTo(number - 1); // Додавання непарного number до суми
  return recursiveOddSumTo(number - 1); // Рекурсивний виклик recursiveOddSumTo у випадку парного number
}
console.log(recursiveOddSumTo(1)); // 1
console.log(recursiveOddSumTo(10)); // 25

// Напишіть функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.

function iterativeOddSumTo(number) {
  let sum = 0; 
  for (let i = 1; i <= number; i = i + 2) { // Починаючи з 1 додаємо +2 кожну ітерацію циклу доки цикл не доходить до значення number
    sum = sum + i; // Додаємо непарні числа до суми
  }
  return sum; // Повертаємо всю суму
}
console.log(iterativeOddSumTo(1)); // 1
console.log(iterativeOddSumTo(10)); // 25
