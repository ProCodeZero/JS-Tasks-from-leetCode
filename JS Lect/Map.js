// Для работы, когда ключи - различные типы данных (не только строки и символы)

const map = new Map([
    ['Hi', 'Привет'],
    [42, 'Ответ на главный вопрос жизни и все такое...']
]);
const map2 = new Map(map.entries());

map.set(['42', 'Ответ на главный вопрос жизни и все такое...']);
map.delete('42');
map.set('HTML', 'HyperText Markup Language')
   .set('CSS', 'Cascading Style Sheets')
   .set('JS', 'JavaScript');

const [[key, value], second, third, ...other] = map
console.log(map);
console.log(map.size);
console.log(map.get(42));
console.log(map.has('42'));
console.log(map.keys);
console.log(map.values);
console.log(map.entries);
console.log(map2);
console.log(key, value, second, third, ...other)


// for (let kv of map) {
//     console.log(kv);
// }
map.forEach((value, key, map) => console.log(value, key, map));