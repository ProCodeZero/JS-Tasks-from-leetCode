// Задача реализовать функцию partition которая принимает на вход массив и коллбэк функцию, а возвращает массив в котором два массива.

// partition(array, callback) => [trueArray, falseArray]
// Во время выполнения функция должна вызвать callback для каждого элемента массива array.

// Сигнатура функции callback

// callback(element) => boolean
// element - Элемент массива на котором была вызвана функция callback

// Если callback вернёт true то element с которым была вызвана функция должен попасть в массив trueArray

// Если callback вернёт false то element с которым была вызвана функция должен попасть в массив falseArray

// Функция должна правильно отрабатывать если callback возвращает приводимые к true false значения:

// Приводимые к true
// {} => true
// 1 => true
// ...
// совокупность таких значений называется truthy
// Приводимые к false
// undefined => false
// "" => false
// 0 => false
// ...
// совокупность таких значений называется falsey 
// Если callback не передан то truthy значения попадают в trueArray а falsey значения попадают в falseArray

function partition(array, callback) {
    let resArr = [[],[]];
    if (typeof callback !== 'function') {
        array.forEach(function(item) {
            if (item){
                resArr[0].push(item);
            }else {
                resArr[1].push(item);
            }
        });
        return resArr;
    }else {
        array.forEach(function(item) {
            if (callback(item)){
                resArr[0].push(item);
            }else {
                resArr[1].push(item);
            }
        });
        return resArr;
    }
}


console.log(partition(numbers2, callback2));
