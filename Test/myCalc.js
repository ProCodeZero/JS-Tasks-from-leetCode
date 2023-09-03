function calculator(string) {

  const digits = { Z: 2000, M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

  function romeToArab(str) {
    if (!/^[IVXLCDMZ]+$/i.test(str)) throw new Error('Incorrect roman number format: ' + str)
    return str.toUpperCase().split('').reduce(function(r, v, i, arr) {
      const [a, b, c] = [digits[arr[i]], digits[arr[i + 1]], digits[arr[i + 2]]];
      if (b && c && a <= b && b < c)
        throw new Error('Incorrect roman number format: ' + str);
      return b > a ? r - a : r + a;
    }, 0)
  }

  function arabToRome(num) {
    if (num < 1) return '';
    let result = '';
    for (key in digits)
      while (num >= digits[key]) {
        result += key;
        num -= digits[key];
      }
    return result;
  }
  function sum(a, b) {
    return a + b
  }
  function sub(a, b) {
    return a - b
  }
  function div(a, b) {
    if (b == 0)
      throw Error ('Деление на ноль')
    else
      return parseInt(a / b)
  }
  function mul(a, b) {
    return a * b
  }

  // код пишите внутри этой функции

  let arr = string.split(' ')
  if (arr.length != '3') {
    throw Error('Неверная запись')
  }
  let num1str = arr[0]
  let op = arr[1]
  let num2str = arr[2]
  let n1
  let n2
  let n1RA
  let n2RA

  if (op != '+' && op != '-' && op != '*' && op != '/') {
    throw Error('Неправильный знак выражения')
  }

  if (isNaN(parseInt(num1str)) && isNaN(parseInt(num2str))) {
    n1RA = romeToArab(num1str)
    n2RA = romeToArab(num2str)

    if (n1RA < 1 || n1RA > 10 || n2RA < 1 || n2RA > 10) {
      throw Error('Значения чисел выходят за пределы дозволенных')
    }
    if (op == '+') {
      res = sum(n1RA, n2RA)
      return arabToRome(res)
    }
    else if (op == '-') {
      res = sub(n1RA, n2RA)
      return arabToRome(res)
    }
    else if (op == '*') {
      res = mul(n1RA, n2RA)
      return arabToRome(res)
    }
    else if (op == '/') {
      res = div(n1RA, n2RA)
      return arabToRome(res)
    }
  }
    
  else if (isNaN(parseInt(num1str)) == true && isNaN(parseInt(num2str)) == false) {
    throw Error('Числа в разных системах')
  }
    
  else if (isNaN(parseInt(num1str)) == false && isNaN(parseInt(num2str)) == true) {
    throw Error('Числа в разных системах')
  }
    
  else
    n1 = parseInt(num1str)
    n2 = parseInt(num2str)
  
  if (n1 < 1 || n1 > 10 || n2 < 1 || n2 > 10) {
    throw Error('Значения чисел выходят за пределы дозволенных')
  }
  
  if (op == '+') {
    res = sum(n1, n2)
    return String(res)
  }
    
  else if (op == '-') {
    res = sub(n1, n2)
    return String(res)
  }
    
  else if (op == '*') {
    res = mul(n1, n2)
    return String(res)
  }
    
  else if (op == '/') {
    res = div(n1, n2)
    return String(res)
  }
  
}

module.exports = calculator; // Не трогайте эту строчку