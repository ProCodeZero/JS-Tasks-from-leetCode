// Реализуйте функцию capitalize, которая принимает строку в качестве
// аргумента и возвращает новую строку, в которой первые буквы слов
// заглавные, а все остальные - строчные.

//* 14.12.2023
function capitalize(str) {
	return str.toLowerCase()
		.split(' ')
		.map(el => el = el
			.replace(el[0], el[0].toUpperCase()))
		.join(' ');
}

//* Old resolusion
// console.log(capitalize('hEllo mIster denis!'));
// function capitalize(str) {
//   str = str.toLowerCase();
//   let newString = str.split(' ').map(item => {
//     item = item.replace(item[0], item[0].toUpperCase());
//     return item;
//   }).join(' ');
//   return newString;
// }

console.log(capitalize('hEllo mIster denis!'));