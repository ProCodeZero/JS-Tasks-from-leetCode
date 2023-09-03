const plus = (a, b) => a + b;
const plusRes = plus(2, 3);

const withoutArgs = () => console.log('Hello world');
const sinleArg = (x) => x ** 2;

const moreActions = (a, b) => {
    a *= 2;
    b *= 3;
    return a + b;
};

const returnObj = (str = '') => {
    return {
        value: str,
        length: str.length
    }
}
// аналогичная запись
// const returnObj = (str = '') => ({
//     value: str,
//     length: str.length
// })

// в стрелочных нету arguments
function plusFoo(x, y) {
    console.log(arguments);
    return x + y;
}

plusFoo(1, 2, 3, 'hello');

const obj = {
    name: 'Denis',
    age: 21,
    getName() {
        console.log(this);
    },
    getAgeArrow: null,
    getAge() {
        // this.getAgeArrow = () => console.log(this); или
        setTimeout(() => console.log(this));
    }
    // getAge: () => console.log(this), будет работать не с объектом, а с window
};