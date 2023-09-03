// Реализуйте функцию reverseLongWords, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой каждое
// слово, которое содержит 5 или больше символов, написана наоборот.

function reverseLongWords(s) {
    let newString = s.split(' ').map(item => {
      return item.length < 5 ? item : 
      item.split('').reverse().join('');
    }).join(' ');
    return newString;
  }

console.log(reverseLongWords('Stop spinning my words'))