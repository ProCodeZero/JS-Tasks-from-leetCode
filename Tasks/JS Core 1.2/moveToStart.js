// Реализуйте функцию moveToStart, которая принимает массив и число n. 
// Функция должна переставить n элементов массива из конца в начало.

// Если второй аргумент больше или равен длине массива, то должен быть 
// возвращен новый массив, порядок элементов которого совпадает с изначальным.

// Функция должна возвращать новый массив, а не мутировать старый.

console.log(moveToStart([1, 2, 3, 4, 5], 10)); // [1, 2, 3, 4, 5]
console.log(moveToStart([1, 2, 3, 4, 5], 3)); // [3, 4, 5, 1, 2]

// * 18.12.2023
function moveToStart (arr, n) {
	let arr2 = [...arr];
	return n>arr.length?arr2:
		[...arr2.splice(-n),...arr2.splice(arr2.length+1-n)];
}

//* Old resolution
// function moveToStart (arr, n) {
//     let newArr = arr.slice(0);
//     let num = n * (-1);
//     if (n >= newArr.length) {
//         return newArr;
//     }else {
//         let cutElemenst = newArr.slice(num, newArr.length);
//         newArr = newArr.splice(0, (newArr.length - n));
//         newArr = cutElemenst.concat(newArr);
//         return newArr;
//     }
// }
