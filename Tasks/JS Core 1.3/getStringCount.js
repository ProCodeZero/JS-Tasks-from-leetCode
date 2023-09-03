// Реализуйте (с использованием рекурсии) функцию getStringCount, 
// которая должна принимать массив или объект и считать количество 
// строк в массиве / значениях объекта с учетом вложенности.


function getStringCount(object, acc = { result: 0 }) {
    // Получаем все значения из объекта
    const values = Object.values(object);
    for (let i = 0; i < values.length; i += 1) {
      // Если элемент строка прибавляем в результат 1
      if (typeof values[i] === 'string') {
          acc.result += 1;
      // Если элемент объект и не null
      } else if (typeof values[i] === 'object' && values[i] !== null) {
         // Рекурсивно вызываем функцию передавая туда объект который нашли
         // и аккумулятор где содержится счетчик
         getStringCount(values[i], acc);
      }
    }
    return acc.result;
}

console.log(getStringCount({
    first: '1',
    second: '2',
    third: false,
    fourth: ['anytime', 2, 3, 4 ],
    fifth:  null,
  }))
