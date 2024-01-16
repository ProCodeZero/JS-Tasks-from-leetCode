// Реализуйте (с использованием рекурсии) функцию sequenceSum, которая 
// находит сумму последовательности целых чисел. Последовательность 
// задается двумя значениями: begin - начало последовательности, end - 
// конец последовательности. Например: begin = 2 и end = 6 дают нам 
// такую последовательность 2, 3, 4, 5, 6. Сумма такой 
// последовательности будет: 20.

console.log(sequenceSum(1, 1051));

//* 21.12.23
function sequenceSum(begin, end) {
	if (end < begin) {
		return 'begin value is bigger than end value';
	} else { }
	return begin === end ? begin : begin + sequenceSum(begin + 1, end);
}

//* Old resolution
// function sequenceSum(begin, end) {
//     if(begin == 0 && end == 0){
//         return 0;
//     }else if(begin == end){
//         return begin;
//     }else if(begin > end){
//         return NaN;
//     }
//     return begin + sequenceSum(begin + 1, end);
// }

 