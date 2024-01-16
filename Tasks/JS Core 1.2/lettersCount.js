// Реализуйте функцию lettersCount, которая принимает строку в качестве 
// аргумента и возвращает объект, в котором ключами являются все буквы, 
// которые есть в строке, а значениями - их количество в строке.

// Перед подсчетом буквы необходимо привести к нижнему регистру. 
// Большая буква и маленькая должны считаться одинаковой буквой.

console.log(lettersCount('aAAbbccde')); // {a: 3, b: 2, c: 2, d: 1, e: 1}

// * 18.12.2023
function lettersCount(str) {
	const obj = {};
	str.toLowerCase().split('').forEach((el) => {
		if (!(el in obj)) {
			obj[el] = 1;
		} else {
			obj[el] += 1;
		};
	})
	return obj;
}
//* Old resolution
// function lettersCount(str) {
//     str = str.toLowerCase();
//     var obj = {};
//     var arr = str.split('');
//     arr.forEach(function(element) {
//         if (obj[element] != undefined) {
//             ++obj[element];
//        }
//        else {
//         obj[element] = 1;
//        }
//     })
//     return obj;
// }

