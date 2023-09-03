// Реализуйте функцию lettersCount, которая принимает строку в качестве 
// аргумента и возвращает объект, в котором ключами являются все буквы, 
// которые есть в строке, а значениями - их количество в строке.

// Перед подсчетом буквы необходимо привести к нижнему регистру. 
// Большая буква и маленькая должны считаться одинаковой буквой.


function lettersCount(str) {
    str = str.toLowerCase();
    var obj = {};
    var arr = str.split('');
    arr.forEach(function(element) {
        if (obj[element] != undefined) {
            ++obj[element];
       }
       else {
        obj[element] = 1;
       }
    })
    return obj;
}

console.log(lettersCount('aAAbbccde'));