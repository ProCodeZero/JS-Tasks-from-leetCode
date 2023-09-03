// Функции высшего порядка:

const arr = ['Denis', 'Ivan', 'Maks', 'Olga'];
// => [5, 4, 4, 4]

// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i].length);
// }
// console.log(newArr);

// let newArr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i].toUpperCase());
// }
// console.log(newArr);


let newArr = ['Denis', 'Ivan', 'Maks', 'Olga'];
function mapArray(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]));
    }
    return res;
}

function nameLength(el) {
    console.log(el);
    return el.length;
}

function nameToUpperCase(el) {
    return el.nameToUpperCase();
}


mapArray(newArr, nameLength);
mapArray(newArr, nameToUpperCase);

const result = mapArray(newArr, nameLength);
const result2 = mapArray(newArr, nameToUpperCase);
console.log(result);
console.log(result2);

function greeting(firstName) {
    return function(lastName) {
        return `Hello, ${firstName} ${lastName}`
    };
}


const testGreeting = greeting('Denis');
console.log(greeting);
const fullName = testGreeting('Osipov');
console.log(testGreeting);



// function question(job) {
//     if (job === 'developer') {
//         return function (name) {
//             return `${name}, что такое JS?`;
//         };
//     }else if (job === 'teacher') {
//         return function (name) {
//             return `${name}, какой предмет вы преподаете?`;
//         };
//     }
// }


// const developerQuestion = question('developer');
// console.log(developerQuestion('Denis'));
// const teacherQuestion = question('teacher');
// console.log(developerQuestion('Denis'));


function question(job) {
    const jobDictionary = {
        developer: 'что такое JS?',
        teacher: 'какой предмет вы преподаете?'
    };
    return function (name) {
        return `${name}, ${jobDictionary[job]}?`;
    };
}

const developerQuestion = question('developer')('Denis');
console.log(developerQuestion);
const teacherQuestion = question('teacher');
console.log(teacherQuestion('Denis'));