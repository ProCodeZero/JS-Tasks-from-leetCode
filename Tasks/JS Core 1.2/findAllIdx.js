// Напишите функцию findAllIdx(arr, value), которая возвращает массив 
// индексов элементов, у которых значение равно value.

function findAllIdx(arr, value) {
    var arr2 = [];
    if (typeof(value) == 'string'){
        arr.forEach(function(val, index) {
            if (val === value) {
                arr2.push(index);
            }
        });
    }else if (typeof(value) == 'number'){
        arr.forEach(function(val, index) {
            if (val === value) {
                arr2.push(index);
            }
        });
    }else if (typeof(value) == 'undefined') {
        value = String(value);
        arr.forEach(function(val, index) {
            val = String(val);
            if (val === value) {
                arr2.push(index);
            }
        });
    }
    return arr2;
    
}

console.log(findAllIdx([5, 2, 3, '5', 2, 5, 4], '5'));