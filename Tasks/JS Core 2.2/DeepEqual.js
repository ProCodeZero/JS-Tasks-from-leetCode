// Напишите функцию, которая проверяет на равенство два объекта, учитывая их вложенность.
// Два объекта считаются равными, если у них все свойства одинаковы. В случае, если одно из свойств - само объект, мы сравниваем на равенство эти объекты по тому же алгоритму.

function deepEqual (x, y) {
  if (x === y) {
    return true;
  }
  else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length)
      return false;

    for (var prop in x) {
      if (y.hasOwnProperty(prop)) {  
        if (! deepEqual(x[prop], y[prop]))
          return false;
      }
      else
        return false;
    }

    return true;
  }
  else 
    return false;
}

const firstObject = {
    a: {
      b: {
        c: 1,
        d: 'string',
        e: {
          num: 1
        }
      }
    }
  };
  
  const secondObject = {
    a: {
      b: {
        e: {
          num: 1,
        },
        d: 'string',
        c: 1,
      }
    }
  };

console.log(deepEqual(firstObject, secondObject)); // true
console.log(deepEqual({ a:1, b: 3 }, { b: 2, a: 1})); // false
console.log(deepEqual(1, 2)); // false
console.log(deepEqual(true, false)); // false


//   Подсказка: entries, map, рекурсия, flat, sort, jsonstringify