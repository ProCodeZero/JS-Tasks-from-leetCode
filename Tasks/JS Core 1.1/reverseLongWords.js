// Реализуйте функцию reverseLongWords, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой каждое
// слово, которое содержит 5 или больше символов, написана наоборот.

// * 14.12.2023
function reverseLongWords(s) {
	return s
		.split(' ')
		.map((el) => el.length < 5 ? el : el = el.split('').reverse().join(''))
		.join(' ');
}

//* Old resolution
// function reverseLongWords(s) {
//     let newString = s.split(' ').map(item => {
//       return item.length < 5 ? item : 
//       item.split('').reverse().join('');
//     }).join(' ');
//     return newString;
//   }

console.log(reverseLongWords('Stop spinning my words'))