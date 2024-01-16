// Реализуйте функцию, которая принимает на вход строку, состоящую только 
// из открывающих и закрывающих круглых скобок, и проверяет является ли 
// эта строка корректной. Пустая строка (отсутствие скобок) считается корректной.

// Строка считается корректной (сбалансированной), если содержащаяся в 
// ней скобочная структура соответствует требованиям:

// Скобки — это парные структуры. У каждой открывающей скобки должна 
// быть соответствующая ей закрывающая скобка.
// Закрывающая скобка не должна идти впереди открывающей.

console.log(areBracketsBalanced('())(')) // must be false
console.log(areBracketsBalanced('()(')) // must be false
console.log(areBracketsBalanced('(()())')) // must be true

// * 17.12.2023
function areBracketsBalanced(str) {
	var x = 0;
	var y = 0;
	let arr = str.split('');
	if (str === '') {
		return true;
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === '(') {
				x++;
				console.log('x :>> ', x);
			} else if (arr[i] === ')') {
				y++;
				console.log('y :>> ', y);
			}
			if (y>x){
				return false;
			}
		}
	}
	return x===y?true:false;
}


// //* Old resolution
// function areBracketsBalanced(str) {
//     let arr = str.split('');
//     let openBal = [];
//     let closeBal = [];
//     var bool1 = true;
//     var bool2 = true;
//     console.log(arr);
//     arr.forEach(function(value, index) {
//         if (value == '(') {
//             openBal.push(index);
//         }else if (value == ')'){
//             closeBal.push(index);
//         }
//     });
//     if (openBal.length != closeBal.length){
//         bool1 = false;
//     }

//     for (let i = 0; i < closeBal.length; i++) {
//         let sub = openBal[i] - closeBal[i]
//         console.log(sub);
//         if ( sub > 0){
//             bool2 = false;
//             break;
//         }
//     }
//     if (bool1 && bool2){
//         return true;
//     }else {
//         return false;
//     }
// }

