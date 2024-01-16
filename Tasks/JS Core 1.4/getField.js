// Реализуйте функцию getField, которая принимает массив объектов в 
// качестве первого аргумента и ключ объекта в строке в качестве 
// второго. Функция должна вернуть новый массив. На месте объекта 
// должно находиться значение поля объекта, находящееся по ключу, 
// переданному в функцию вторым аргументом. Массив гарантированно 
// состоит из объектов. Если в данном объекте, нет такого поля, то 
// вместо значения поля должен быть undefined. Если массив не передан, 
// то функция должна вернуть пустой массив.

//* 21.12.23
const getField = (data, field) => {
 return data === undefined? undefined: data.map(object => object[field]);
}

//* Old resolution
// const getField = (data, field) => {
//     const arr = data.map((value) => (value[field]));
//     return arr;
// };

const data = [
    {
      name: 'Denis',
      age: 25,
    },
    {
      name: 'Ivan',
    },
    {
      name: 'Ann',
      age: 18,
    },
  ];
  
  console.log(getField(data, 'age'));  // [25, undefined, 18]