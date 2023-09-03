// Напишите функцию, которая сравнивает два числа с определенной погрешностью.

function compareWithPrecision(a, b, precision) {
    let res = Math.abs(a) - Math.abs(b);
    return precision >= Math.abs(res) ? true : false
  }
  
  console.log(compareWithPrecision(11, 10, 1));