// csvGenerator
// Нужно написать функцию, которая переводит двумерный массив 
// (массив массивов) в CSV формат и возвращать строку О формате: 
// https://ru.wikipedia.org/wiki/CSV (детали в разделе "Спецификация")

// Допустимые значения в качестве элементов массива - числа и строки 
// Если встречается функция - выбрасывать ошибку с текстом 
// "Unexpected value"

// Функция принимает: data - массив массивов, содержашие числа или 
// строки

// Функция возвращает: Строку в формате CSV

function arrayToCsv(array) {
    array = array.map(arr => arr.map(el => { 
        if (typeof el !== `number` && typeof el !== `string`) {
            throw new Error('Unexpected value');
        }
        if (typeof el === `string` && el.includes(',')) {
            return JSON.stringify(el);
        } else if (typeof el === `string` && el.includes("\"")) {
            let someStr = new String;
            someStr += (damnQuotes(el));
            return JSON.stringify(someStr);
        } else {
            return  el;
        }
    }).join(","))
    .join('\n')
    return array.replace(/\\/g, '');
}

function damnQuotes (str) {
    console.log( str.split(''));
     str = str.split('').map(function(element) {
        if (element === '\"') {
            element = '\"\"';
            return element;
        }
        return element;
    }).join('');
    let s = str.slice();
    return s;
}

console.log(arrayToCsv([[1, 2], ['a', '"text"']])); // '1,2\na,b'
console.log(arrayToCsv([[1, 2], ['a,b', 'c,d']])); // '1,2\n"a,b","c,d"'
console.log(arrayToCsv([['"text"', 'other "long" text']])); // """"text""","other ""long"" text""
