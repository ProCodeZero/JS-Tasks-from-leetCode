// numbers
const num1 = 10;
const num2 = 20;
let value;

// + - * / %
value = num1 + num2;
value = value + 100;
value += 100;
//value = 4 % 2;
value++; // изменение после этой строки
value--; // изменение после этой строки
++value; // изменение на этой строке
--value; // изменение на этой строке

value = 0.6 + 0.7;
value = parseFloat(value.toFixed(1)) // округление

// Math
value = Math.PI;
value = Math.random();
value = Math.round(2.4);
value = Math.ceil(2.1); //округляет в большую сторону
value = Math.floor(2.9); //округляет в меньшую сторону
value = Math.min(1, 12, 34, 0);

value = Math.floor(Math.random() * 10 + 1); // случайное целое число от 0 до 10

const arr = ['black', 'red', 'white', 'pink', 'yellow' ]
value = Math.floor(Math.random() * arr.length);
console.log(value, arr[value]);
