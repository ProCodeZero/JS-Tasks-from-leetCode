// const person = {
//     name: 'Denis',
//     age: 21,
//     greet: function() {
//         console.log('Greet');
//     }
// }

const person = new Object({
    name: 'Denis',
    age: 21,
    greet: function() {
        console.log('Greet');
}})


Object.prototype.sayHello = function() {
    console.log('Hello!');
};

const lena = Object.create(person);
lena.name = 'Elena';

const str = 'I am a string';



function Auto(brand, price, gas) {
    this.brand = brand;
    this.price = price;
    this.gas = gas;
    this.discount = '20%';
}

Auto.prototype.drive = function() {
    if (this.gas > 0) {
        this.gas = this.gas - 20;
        return this.gas;
    } else {
        console.log('Gas is gone!')
    }
}

Auto.prototype.discount = '70%';
Auto.prototype.info = function() {
    return `Cost ${this.price}`;
};

const bmw = new Auto('BMW', '100,000', 100);
const nissan = new Auto('Nissan', '250,000', 100);