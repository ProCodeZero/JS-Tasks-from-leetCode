// Замыкания

function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`;
    }
}

const comUrl = urlGenerator('com');
const ruUrl = urlGenerator('ru');

console.log(urlGenerator('com'));
console.log(comUrl('google'));

console.log(ruUrl('yandex'));

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {name: 'Misha', age: 22, job: 'Frontend'};
const person2 = {name: 'Sasha', age: 21, job: 'Backend'};

function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args)
    }
}