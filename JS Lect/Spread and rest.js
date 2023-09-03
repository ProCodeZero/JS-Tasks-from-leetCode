const citiesRussia = ["Москва", "Питер", "Белгород", "Казань"]
const citiesEurope = ["Parish", "Berlin", "London", "Praga"]


const citiesRussiaPopulation = {
    Москва: 15,
    Питер: 10,
    Белгород: 5,
};
const citiesEuropePopulation = {
    Parish: 8,
    Berlin: 7,
    London: 5,
    Praga: 10
}

// Spread
console.log(...citiesRussia);
console.log(...citiesEurope);

const allCities = [...citiesEurope, ...citiesRussia];
console.log(allCities);


console.log(citiesEuropePopulation);
console.log({...citiesEuropePopulation});
console.log({...citiesEuropePopulation, ...citiesRussiaPopulation});


// Practice
const numbers = [5, 37, 42, 18];
console.log(Math.max(5, 37, 42, 18));
console.log(Math.max.apply(null, numbers));
console.log(Math.max(...numbers));

const divs = document.querySelectorAll('div'); // Получаем NoteList
console.log(divs);
const nodes = [...divs]; // Конвертация в массив
console.log(nodes);

// Rest

function sum(a, b, ...rest) {
    console.log(rest);
    return a + b + rest.reduce((a, i) => a + i, 0);
}
const nums = [1, 2, 3, 4, 5];

console.log(sum(...nums));


// const a = nums[0];
// const b = nums[1];
// Либо так
// const [a, b] = nums;

const [a, b, ...other] = numbers;
console.log(other);

const person = {
    name: 'Denis',
    age: 21,
    city: 'Moskow',
    country: 'Russia'
};
const {name, age, ...aderss} = person;
console.log(name, age, aderss);