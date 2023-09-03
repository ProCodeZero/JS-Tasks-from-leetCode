// Реализуйте (с использованием рекурсии) функцию sequenceSum, которая 
// находит сумму последовательности целых чисел. Последовательность 
// задается двумя значениями: begin - начало последовательности, end - 
// конец последовательности. Например: begin = 2 и end = 6 дают нам 
// такую последовательность 2, 3, 4, 5, 6. Сумма такой 
// последовательности будет: 20.

function sequenceSum(begin, end) {
    if(begin == 0 && end == 0){
        return 0;
    }else if(begin == end){
        return begin;
    }else if(begin > end){
        return NaN;
    }    
    return begin + sequenceSum(begin + 1, end);
}

console.log(sequenceSum(1, 5));