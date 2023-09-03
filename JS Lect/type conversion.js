let value;

// Number to string
value = String(10);
value = String(10+20);
value = (40).toString();

// Boolean to string
value = String(false);

// Array to string
value = String([1, 2, 3]);

//Object to string
value = String({name: 'Denis'})

value = 30 + '' + 30; // 3030
value = 30 * '5'; // 150
value = true + 10; // 11

// String to number
value = Number('23');
value = Number(false);
value = Number(null);
value = Number('false');
value = Number([1, 2, 3]);

value = parseInt("20px");
value = parseFloat('200.21px');

// All to boolean
value = Boolean('hello');
value = Boolean(-100)
value = Boolean(0)
value = Boolean(undefined)
value = Boolean(null)
value = Boolean([])
value = Boolean({})

console.log(value);
console.log(typeof value);