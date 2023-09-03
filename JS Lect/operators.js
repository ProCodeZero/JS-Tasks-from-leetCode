// <, <, >=, <=, ==, ===, !=, !==

let value;

value = 1 > 2; // true
value = 2 <= 2; // true
value = 1 == 1; // true
value = 1 == '1'; // 1 == 'true' тоже самое // true
value = 1 === '1'; //false
value = 1 != '1'; //false
value = 1 !== '1'; // true
value = 'a' > 'A'; // true
value = 'a'.charCodeAt();

console.log(value);

// if/else
/*
if (условие) {
    Действия при выполнении условия
}
else {
    Действия, при невыполнении условия
}
*/

value = 10;

if (value !== 10) {
    console.log('value = 10');
}
else {
    console.log('value != 10');
}

if (value) {
    console.log('some action', value);
    
}
else {
    // при value = undefined, null, NaN, 0, пустая строка
    console.log('another action');
}

// ||(или) &&(и) !(логическое не)
value = NaN
if (!value){
    console.log(value, 'false')
}

value = [];

if (value.length) {
    console.log(value);
}else {
    console.log('array is empty');
}

let user = {
    name: 'Denis'
};

if (user.name) {
    console.log(user.name);
}else {
    console.log('else');
}

if (user.hasOwnProperty('name')) {
    console.log(user.name);
}else {
    console.log('else');
}

// ||

value = 1 || 0;
let age = 10;
if (age < 16 || age >65) {
    console.log('do some action');
}else {
    console.log(age);
}

let serverNickmane = 'Denis';
let nickname = serverNickmane || 'default nickname';

// &&

value = 1 && 0 && 3;

console.log(value);

let price = 10;

if (price >= 5 && price <= 20) {
    console.log('take it');
}else {
    console.log('don\'t take it');
}

value = 10;

if (value < 10) {
    console.log('value < 10');
}else if (value >= 10) {
    console.log('value >=10');
}