// Для этой задачи вам нужно будет ознакомиться с методом массива filter, 
// который принимает функцию-коллбэк для фильтрации массива.

// Реализуйте набор готовых к использованию функций для arr.filter:

// inRange(a, b) – число находится между a и b (включительно).
// Если аргумент или элемент массива можно привести к числу,
// то функция должна сначала приводить его к числу, а потом проверять условие.
// Если a > b, то функция должна возвращать false для всех элементов массива

function inRange(a, b) {
    return function(e) {
        return a <= e && b >= e;
    }
};


function inArray(arr) {
    return function(e) {
        return arr.includes(e);
    }
}


function notInArray(arr) {
    return function(e) {
        return !arr.includes(e);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];

console.log(arr.filter(inRange(3, 6))); // [3, 4, 5, 6]
console.log(arr.filter(inArray([1, NaN, true, '8', 212]))); // [1, 2, undefined]
console.log(arr.filter(notInArray([1, 2, 3, 4, 5, 6, 7, true]))); // [undefined, NaN]