// Напишите две функции replaceItemsClear(arr, item, replaceItem) и 
// replaceItemsMutate(arr, item, replaceItem).

// Функция replaceItemsClear находит все элементы массива arr, равные 
// item, и возвращает новый массив, в котором на месте найденных 
// значений стоит replaceItem.

// Функция replaceItemsMutate реализует тот же функционал, только 
// мутирует входящий массив и возвращает его же.

console.log(replaceItemsClear([1, 2, 3, 4, 2], 2, 'a'));
console.log(replaceItemsMutate([1, 2, 3, 4, 2], 2, 'a'));

// * 18.12.2023
function replaceItemsClear(arr, item, replaceItem) {
	return arr.map((el) => {
		if (el === item) {
			return el = replaceItem;
		} else {
			return el;
		}
	})
}
function replaceItemsMutate(arr, item, replaceItem) {
	arr.forEach((el, index) => {
		el === item ? arr.splice(index, 1, replaceItem) : 0;
	});
	return arr;
}
//* Old resolution
// function replaceItemsClear(arr, item, replaceItem) {
//     let newArr = [];
//     arr.forEach(function(element) {
//        if (element !== item) {
//             newArr.push(element);
//        }else {
//             newArr.push(replaceItem);
//        }
//     });
//     console.log(newArr);
//     return newArr;
// }

// function replaceItemsMutate(arr, item, replaceItem) {
//     for (i in arr) {
//         if (arr[i] === item) {
//             arr[i] = replaceItem;
//         }
//         else {
//             continue;
//         }
//     }
//     return arr;
// }