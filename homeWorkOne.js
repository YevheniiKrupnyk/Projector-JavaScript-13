'use strict';

// 1. Створіть 2 змінні з типом number. Проведіть з ними такі математичні операції:
const num1 = 9;
const num2 = 3;

let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let exp = num1 ** num2;
let sqr = Math.sqrt(num2);

console.log('Сума num1 і num2 = ' + sum);
console.log('Різниця num1 і num2 = ' + sub);
console.log('Добуток num1 і num2 = ' + mul);
console.log('Частка num1 і num2 = ' + div);
console.log('Ступінь num1 до num2 = ' + exp);
console.log('Квадратний корінь num2 = ' + sqr);
console.log('-----------------------------------');

//2. Створіть змінну довільного типу. Проведіть наступні перетворення з нею:

let arb;
console.log(typeof arb);

arb = 'string';
console.log(typeof arb);

arb = 10;
console.log(typeof arb);

arb = true;
console.log(typeof arb);
