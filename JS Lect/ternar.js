let a = 1;
let b = 0;

if (a > 0) {
    b = a;
}else{
    b += 1;
}

console.log(b);

// выражение ? действие если выражение true : действие если выражение false;

/* не совсем верно:
let c = a > 0 ? b = a : b += 1;
console.log(`b: ${b}, c: ${c}`);
*/
// верный вариант:
b = a > 0 ? a : b + 1;
console.log(`b: ${b}`);

// выражение ? если true : выражение ? если true : если false;
// такое не удобно читать:
b = a > 0 ? 2 : a < 0 ? 3 : 0;
console.log(`b: ${b}`);

//switch case

let color = 'blue';

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    case 'green':
        console.log('color is green');
        break;
    default:
        console.log('default');
}

switch(color) {
    case 'red':
    case 'blue':
        console.log('color is blue or red');
        break;
    case 'green':
        console.log('color is green');
        break;
    default:
        console.log('default');
}