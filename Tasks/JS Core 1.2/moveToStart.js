// Реализуйте функцию moveToStart, которая принимает массив и число n. 
// Функция должна переставить n элементов массива из конца в начало.

// Если второй аргумент больше или равен длине массива, то должен быть 
// возвращен новый массив, порядок элементов которого совпадает с изначальным.

// Функция должна возвращать новый массив, а не мутировать старый.

function moveToStart (arr, n) {
    let newArr = arr.slice(0);
    let num = n * (-1);
    if (n >= newArr.length) {
        return newArr;
    }else {
        let cutElemenst = newArr.slice(num, newArr.length);
        newArr = newArr.splice(0, (newArr.length - n));
        newArr = cutElemenst.concat(newArr);
        return newArr;
    }
}
console.log(moveToStart([1, 2, 3, 4, 5], 3));