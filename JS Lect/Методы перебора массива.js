const users = [
    {
        _id: '2hpfdsasdpf982hrsadf',
        index: 0,
        isActive: false,
        balance: 2399.63,
        age: 39,
        name: 'Lucile Finley',
        gender: 'female',
        company: 'ZOXY',
        email: 'lucilefinley@zoxy.com',
        phone: '+1 (842) 599-3328',
        registered: '2015-07-12T09:39:03 -03:00'
    },
    {
        _id: '03fsasasdpf982hrxdq1',
        index: 1,
        isActive: false,
        balance: 2212.56,
        age: 29,
        name: 'Alex Vas',
        gender: 'male',
        company: 'YouTube',
        email: 'alexvasxxx@zoxy.com',
        phone: '+1 (842) 599-3328',
        registered: '2017-10-07T12:02:59 -03:00'
    },
    {
        _id: '7kpfdsas55gs82hrsaf2',
        index: 2,
        isActive: true,
        balance: 2399.63,
        age: 21,
        name: 'Denis Osipov',
        gender: 'male',
        company: 'Yandex',
        email: 'denis.osipov.2288.02@gmail.com',
        phone: '+7 (904) 087-5439',
        registered: '2023-12-12T10:32:12 -02:00'
    },
]

// forEach
users.forEach((user, i, arr) => {
    console.log( + user, i, arr);
});

// filter
const userLess30 = users.filter(user => user.age < 30);
console.log(userLess30);
const activeUsers = users.filter(user => user.isActive);
console.log(activeUsers);

// map
const usersName = users.map((user) => ({name: user.name, company: user.company}));
console.log(usersName);

// reduce
const totalBalance = users.reduce((acc, user) => (acc += user.balance), 0);
console.log(totalBalance);

const usersObj = users.reduce((acc, user) => {
    acc[user._id] = user;
    return acc;
}, {});
console.log(usersObj);

// some/every
const isMale = users.some((user) => user.gender === 'male');
console.log(isMale);
const isAllMale = users.every((user) => user.gender === 'male');
console.log(isAllMale);
const isAllMore18 = users.every((user) => user.age > 18);
console.log(isAllMore18);

// sort
const strArr = ['Denis', 'Bill', 'Anna'];
strArr.sort();
const numArr = [10, 7, 44, 32];
numArr.sort((prev, next) => prev - next);
console.log(strArr);
console.log(numArr);

users.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
console.log(users);

// find
const user = users.find(user => user.name === 'Denis Osipov');
console.log(user);
