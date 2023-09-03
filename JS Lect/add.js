const firstName = 'Denis';
const lastName = 'Osioov';
const age = 20;

let str;

str = 'Hello, my name is ' + firstName + ' ' + lastName;

str = '<ul>' + 
        '<li>First name: ' + firstName + '</li>' +
        '<li>Last name: ' + lastName + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '</ul>'
//console.log(str);

// ES6
str = `
    <ul>
        <li>First name: ${firstName}</li>
        <li>Last name: ${lastName}</li>
        <li>Age: ${age}</li>
        <li>Math.random: ${Math.round(Math.random() * 10 + 1)}</li>
    </ul>
`;

document.body.innerHTML = str