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

let primaryValue = 33;

console.log('Початкове значення:', primaryValue);
console.log('Початковий тип:', typeof changeableValue);

// Перетворення на рядок
let stringValue = String(primaryValue);
console.log('Перетворення на рядок:', stringValue);
console.log('Тип після перетворення:', typeof stringValue);

// Перетворення на число
let numberValue = Number(primaryValue);
console.log('Перетворення на число:', numberValue);
console.log('Тип після перетворення:', typeof numberValue);

// Перетворення на булеве значення
let booleanValue = !!primaryValue;
console.log('Перетворення на булеве значення:', booleanValue);
console.log('Тип після перетворення:', typeof booleanValue);
