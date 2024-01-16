// Реализуйте функцию merge, которая будет принимать неограниченное 
// количество объектов в качестве аргументов и возвращать новый объект, 
// который должен содержать все поля со всех объектов. Если ключи в 
// объектах повторяются, то каждый последующий объект при совпадении 
// ключей должен иметь больший приоритет над предыдущим. Порядок полей в 
// результирующем объекте не важен.

//* 24.12.23
const merge = (...obj) => {
	return obj.reduce((res, object) => {
		Object.assign(res, object);
		return res;
	}, {})
}
//* Old resolution
// const merge = (...obj) => {
//     let newObj = {};
//     obj.forEach(function(elem) {newObj = Object.assign(newObj, elem);});
//     return newObj;
// };

console.log(
	merge(
		{
			name: 'John',
			age: 22,
		},
		{
			surname: 'Klein',
			age: 20,
			profession: 'student',
		},
		{
			profession: 'frontend developer',
			country: 'USA',
		}
	)
);

// {
//   name: 'John',
//   surname: 'Klein',
//   age: 20,
//   profession: 'frontend developer',
//   country: 'USA',
// }