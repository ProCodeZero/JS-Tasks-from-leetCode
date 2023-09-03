// Реализуйте функцию, которая принимает на вход строку, состоящую только 
// из открывающих и закрывающих круглых скобок, и проверяет является ли 
// эта строка корректной. Пустая строка (отсутствие скобок) считается корректной.

// Строка считается корректной (сбалансированной), если содержащаяся в 
// ней скобочная структура соответствует требованиям:

// Скобки — это парные структуры. У каждой открывающей скобки должна 
// быть соответствующая ей закрывающая скобка.
// Закрывающая скобка не должна идти впереди открывающей.


function areBracketsBalanced(str) {
    let arr = str.split('');
    let openBal = [];
    let closeBal = [];
    var bool1 = true;
    var bool2 = true;
    console.log(arr);
    arr.forEach(function(value, index) {
        if (value == '(') {
            openBal.push(index);
        }else if (value == ')'){
            closeBal.push(index);
        }
    });
    if (openBal.length != closeBal.length){
        bool1 = false;
    }

    for (let i = 0; i < closeBal.length; i++) {
        let sub = openBal[i] - closeBal[i]
        console.log(sub);
        if ( sub > 0){
            bool2 = false;
            break;
        }
    }
    if (bool1 && bool2){
        return true;
    }else {
        return false;
    }
}

console.log(areBracketsBalanced('())('))