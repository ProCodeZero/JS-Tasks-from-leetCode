function calcValues(a, b) {
    return [
        a + b,
        a - b,
        undefined,
        a / b
    ];
};

console.log(calcValues(42, 10));



// const res = calcValues(42, 10);
// const sum = res[0];
// const sub = res[1];

const [sum,, mult = 'Умножения нет', ...other] = calcValues(42, 10);
console.log(sum, mult, other);

// Objects
const person = {
    name: 'Denis',
    age: 21,
    adress: {
        country: "Russia",
        city: 'Moscow'
    }
}
const {
    name,
    age,
    car = "Машины нет",
    adress: {city: homeTown, country}
} = person;

console.log(name, age, car, homeTown, country);