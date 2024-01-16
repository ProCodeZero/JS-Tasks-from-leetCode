// Напишите функцию isEmpty, которая возвращает true, если у объекта 
// нет свойств(у самого объекта, не у прототипов), иначе возвращает false.

// const obj = Object.create(null);
// isEmpty(obj); // -> true
// isEmpty({ prop: 'value' }); // -> false
// Напишите функцию isEmptyWithProtos, которая возвращает true, если у 
// объекта и его прототипов(не включая Object.prototype) нет свойств, 
// иначе возвращает false.

//* 26.12.2023
function isEmpty(obj) {
	const res = [];
	for (el in obj) {
		if (el !== null) {
			res.push(el);
		}
	}
	return res.length === 0 ? true : false;
}
function isEmptyWithProtos(obj){
	const res = [];
	for (el in obj) {
		if (el !== null) {
			res.push(el);
		}
		if (el.proto){
			console.log('el.proto :>> ', el.proto);
			isEmptyWithProtos(el.proto)
		}
	}
	return res.length === 0 ? true : false;
}
//* Old resolution
// function isEmpty(obj) {
//     return res = !Object.keys(obj).length ? true : false;
// }

// function isEmptyWithProtos(obj) {
//     if (Object.keys(obj).length !== 0) {
//         return false;
//     }
//     for (let key in obj) {
//         if (!(obj.hasOwnProperty(key))) {
//             return false;
//         } 
//     }
//     return true;
// }

const obj1 = Object.create(null);
console.log(isEmpty(obj1)); // -> true
console.log(isEmpty({ prop: 'value' })); // -> false

const protoObj = Object.create(null);
const obj2 = Object.create(protoObj);
const protoObj1 = new Object({
	name: 'Denis',
	age: 21
})
const obj3 = Object.create(protoObj1);
const obj4 = new Object({
	name: 'Denis'
})

console.log(obj4);
console.log(obj3);
console.log(obj2);
console.log(obj1);
console.log(isEmptyWithProtos(obj4)); // -> false
console.log(isEmptyWithProtos(obj3)); // -> false
console.log(isEmptyWithProtos(obj2)); // -> true