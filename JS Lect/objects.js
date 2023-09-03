const user = {
    firstname: 'Denis',
    age: 30,
    isAdmin: true,
    email: 'denis.osipov.2017@inbox.ru',
    'user adress': {
        city: 'Belgorod',
        street: 'Korochanskaya'
    },
    skills: ['html', 'css', 'js']
};
let value;
let prop = 'skills';

value = user.firstname;
value = user['isAdmin'];
value = user['user adress'];
value = user['user adress'].city;
value = user['user adress'][city];
value = user[prop][0];

user.firstname = 'Den';
user.secondname = 'Osipov';
user.info = 'Some information';
user['skills'].python;


console.log(value);
console.log(user);
