// Сет исп-ют при необходимости уникальности
const set = new Set(['button', 'active', 'small']);
const set2 = new Set(['button']);
const set3 = new Set('button');
const set4 = new Set(42);
const setCopy = new Set(set);

set
    .add('big') 
    .add('something')
    .add(buttanRef);

set.delete('active');
console.log(set);
console.log(...set);
console.log(set.values);
console.log(...set.values);
console.log(set.keys);
console.log(...set.keys);
console.log(set.entries);
console.log(...set.entries);
console.log(set2);
console.log(set3);
console.log(set4);
console.log(setCopy);
console.log(set.has('button'));
console.log([...set]); // or
console.log(Array.from(set));

for (let item of set) {
    console.log(item);
};

set.forEach(item, item2, set => console.log(item, item2, set));