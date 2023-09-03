// Реализуйте функцию hasArrays, которая принимает массив данных разных 
// типов и возвращает true, если этот массив содержит массив внутри 
// себя. Если нет, функция должна вернуть false.

function hasArrays(arr) {
    let value = 0;
    arr.forEach(element => {
      if (Array.isArray(element)) {
        value ++
      }
    });
    if (value > 0) {
      return true;
    } else {
      return false;
    }
}

console.log(HasArrays([false, true, [1, 2], {}, [], 1, 0, NaN]))