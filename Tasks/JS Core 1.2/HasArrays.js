// Реализуйте функцию hasArrays, которая принимает массив данных разных 
// типов и возвращает true, если этот массив содержит массив внутри 
// себя. Если нет, функция должна вернуть false.
console.log(hasArrays([false, true, [1, 2], {}, [], 1, 0, NaN])) //true
console.log(hasArrays([false, true, {}, 1, 0, NaN])) //true


// * 18.12.2023
function hasArrays(arr) {
	let hasIt;
	arr.forEach(function (el) {
		if (Array.isArray(el) === true) {
			hasIt = true;
		}
	});
	return hasIt === true ? true : false;
}

//* Old resolution
// function hasArrays(arr) {
//     let value = 0;
//     arr.forEach(element => {
//       if (Array.isArray(element)) {
//         value ++
//       }
//     });
//     if (value > 0) {
//       return true;
//     } else {
//       return false;
//     }
// }

