const person = Object.create({}, {
    name: {
        value: 'Denis',
        enumerable: true,
        writable: true,
        configurable: true
    },
    birthYear: {
        value: 2002
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear;
        },
        set(value) {
            console.log('Set age', value);
        }
    }

});

for (let key in person) {
    console.log('Key', key);
}