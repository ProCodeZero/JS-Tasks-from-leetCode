// Напишите функцию, которая принимает число.
// Если число кратно 3, функция должна возвращать строку «Fizz».
// Если кратно 5, функция должна возвращать строку «Buzz».
// Если кратно и 3 и 5 - строку «FizzBuzz». В остальных случаях 
// функция должна вернуть переданное число.

console.log(fizzbuzz(15)); //«FizzBuzz»
console.log(fizzbuzz(7));  //7
console.log(fizzbuzz(9));  //«Fizz»
console.log(fizzbuzz(10)); //«Buzz»

// * 17.12.2023
function fizzbuzz(number) {
	return number % 3 == 0 && number % 5 == 0 ? 'FizzBuzz' :
		number % 3 == 0 ? 'Fizz' :
			number % 5 == 0 ? 'Buzz' : number;
}

//* Old resolution
// function fizzbuzz(number) {
//     if (number % 3 == 0 && number % 5 == 0) {
//         return 'FizzBuzz';
//     }else if (number % 5 == 0) {
//         return 'Buzz';
//     }else if (number % 3 == 0) {
//         return 'Fizz';
//     }else {
//         return number;
//     }
// }

// console.log(fizzbuzz(3));