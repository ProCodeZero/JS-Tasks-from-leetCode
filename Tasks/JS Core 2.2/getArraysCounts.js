// Реализуйте функцию getArraysCounts, которая принимает массив в 
// качестве аргумента. Функция должна вернуть Map, в котором ключи - 
// все уникальные элементы в массиве, а значения - количество этих 
// элементов в массиве.


const getArraysCounts = (arr) => {
    const map = new Map();
    const count = 0;
    arr.forEach(element => {
        if (!map.has(element)) {
            map.set(element, 1);
        } else {
            let value = map.get(element);
            map.set(element, value + 1);
        }
    });
    console.log(map);
    return map;
};

const obj = { name: 123 };
const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }];
const counts = getArraysCounts(data); // экземпляр Map
console.log(counts.get(1)); // 3
console.log(counts.get(2)); // 4
console.log(counts.get(true)); // 2
console.log(counts.get(obj)); // 2