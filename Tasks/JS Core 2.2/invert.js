// Напишите функцию, которая создает объект, состоящий из инвертированных 
// ключей и значений объекта.

// Если объект содержит повторяющиеся значения, последующие значения 
// перезаписывают присвоения свойств предыдущих значений.

console.log(invert({ a: 1, b: 2, c: 3 })) // { 1: a, 2: b, 3: c }
console.log(invert({ a: 1, b: 2, c: 3, d: 1 })) // { 1: d, 2: b, 3: c }

//* 24.12.23
//* V1
function invert(obj) {
return [obj].reduce((acc, object) => {
	for (i in object){
		acc[object[i]] = i;
	}
	return acc;
}, {});
}
//* V2
function invert(obj) {
	return [...Object.entries(obj)].reduce((object, arr) => {
		object[arr[1]] = arr[0];
		return object;
	}, {})}

//* Old resolution
// function invert(obj) {
//     const retObj = {};
//     for (i in obj) {
//       retObj[obj[i]] = i;
//     }
//     return retObj;
//   };