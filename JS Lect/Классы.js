// function Car(brand, color) {
//     this.brand = brand;
//     this.color = color;
// }

// Car.prototype.start = function() {
//     console.log(`${this.brand} is start!`);
// }

// Car.prototype.stop = function() {
//     console.log(`${this.brand} is stop!`);
// }


// const tesla = new Car('Tesla', 'silver');
// const nissan = new Car('Nissan', 'red');
// console.log(tesla);

// Тоже, но с помощью классов

class Car {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    start() {
        console.log(`${this.brand} is start!`);
    }
    stop() {
        console.log(`${this.brand} is stop!`);
    }
    static discount() {
        console.log('Общая скидка - 10%');
    }
    set rating(value) {
        this.score = value.toUpperCase();
    }
    get rating() {
        return this.score;
    }
    drive() {
        if (this.gas > 0) {
            this.gas = this.gas - 20;
            return this.gas;
        } else {
            console.log('Gas is gone!')
        }
    }
    gas() {
        if (this.gas < 100) {
            this.gas = this.gas + 20;
            return this.gas;
        } else {
            console.log('Gas full !')
        }
    }
}

class HIbridCar extends Car {
    constructor(brand, model) {
        super(brand)
        this.brand = brand;
        this.color = color;
    }
    autoParking() {
        console.log('auto parking is active')
    }
}

const tesla = new Car('Tesla', 'silver');
const nissan = new Car('Nissan', 'red');

tesla.rating = 'five';