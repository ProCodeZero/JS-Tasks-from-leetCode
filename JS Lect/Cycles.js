// while, do while, for, for of, for in

let i = 10;
while(i--) {
    console.log(i);
}

do{
    console.log('action')
} while(i > 0);

for (let i = 0; i < 10; i++) {
    console.log(i)
}

let str = 'Hello';
let res = '';

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    res += str[i] + '*';
}
console.log(res);

let colors = ['white', 'black', 'yellow'];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
    colors[i].toUpperCase();
}

console.log(colors);

for (let i = 0; i < str.length; i++) {
    if (i === 5){
        continue;
    } if (i === 8){
        break;
    }
    console.log(str[i]);
    res += str[i] + '*';
}


const users = [
    {
        name: 'Denis',
        age: 30
    },
    {
        name: 'Misha',
        age: 34
    },
    {
        name: 'Anastasia',
        age: 20
    }
]
const usersObj = {};
for (let i = 0; i < users.length; i++){
    console.log(users[i].name);
    usersObj[users[i].name] = users[i];
        
}
console.log(usersObj);

const user = {
        name: 'Denis',
        age: 30
}

for (let key in user) {
    console.log(key);
    console.log(usersObj[key]);
}


for (let value of users) {
    console.log(value);
}