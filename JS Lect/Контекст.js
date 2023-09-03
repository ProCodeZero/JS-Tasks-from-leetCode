// function hello() {
//     console.log('Hello', this);
// };

// const person = {
//     name: 'Denis',
//     age: 21,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(window),
//     logInfo: function() {
//         console.group(`${this.name} info:`)
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//         console.log(`Job is ${this.job}`);
//         console.log(`Phone is ${this.age}`);
//     }
// };


// const lena = {
//     name: 'Elena',
//     age: 20
// }

// // this === window

// person.logInfo.bind(lena)();
// // const fnLenaInfoLog = person.logInfo.bind(lena, 'frontend', '8-905-123-12-13');
// // fnLenaInfoLog();

// const fnLenaInfoLog = person.logInfo.bind(lena);
// fnLenaInfoLog('frontend', '8-905-123-12-13');

// fnLenaInfoLog = person.logInfo.call(lena, 'frontend', '8-905-123-12-13');
// fnLenaInfoLog = person.logInfo.apply(lena, ['frontend', '8-905-123-12-13']);


const array = [1, 2, 3, 4, 5];

// const mul = (arr) => {arr.map((element) => element * 2)};

Array.prototype.multBy = function(n) {return this.map((i) => i * n)};

console.log(array.multBy(10));