// Реализуйте функцию defaultTo, которая принимает значение первым аргументом
// и его значение по-умолчанию вторым. Если первое значение null, NaN или
// undefined, то должно быть возвращено значение по-умолчанию.
// Если нет, то нужно вернуть само значение (первый аргумент).

function defaultTo(value, defaultValue) {
    return (value === null || value === undefined || isNaN(value)) ? defaultValue : value
}

console.log(defaultTo(1, 10))
console.log(defaultTo(undefined, 10))
console.log(defaultTo(null, 10))
console.log(defaultTo("", 10))