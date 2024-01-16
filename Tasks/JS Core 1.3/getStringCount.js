// Реализуйте (с использованием рекурсии) функцию getStringCount, 
// которая должна принимать массив или объект и считать количество 
// строк в массиве / значениях объекта с учетом вложенности.

console.log(getStringCount({
	first: '1',
	second: '2',
	third: false,
	fourth: ['anytime', 2, 3, 4, ['hello']],
	fifth: null,
}))

// * 18.12.2023
function getStringCount(object, acc = { result: 0 }) {
	for (let el in object) {
		if (typeof object[el] === "string") {
			acc.result++;
		} else if (Array.isArray(object[el])) {
			console.log('object :>> ', object[el]);
			getStringCount(object[el], acc);
		}
	}
	return acc;
}
//* Old resolution
// function getStringCount(object, acc = { result: 0 }) {
//     const values = Object.values(object);
//     for (let i = 0; i < values.length; i += 1) {
//       if (typeof values[i] === 'string') {
//           acc.result += 1;
//       } else if (typeof values[i] === 'object' && values[i] !== null) {
//          getStringCount(values[i], acc);
//       }
//     }
//     return acc.result;
// }

