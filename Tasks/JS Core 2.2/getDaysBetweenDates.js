// Реализуйте функцию getDaysBetweenDates которая принимает на вход две 
// даты и возвращает количество полных дней между ними.

// getDaysBetweenDates('1-1-2020', '1-2-2020'); // -> 1

// Функция должна корректно работать с объектом Date
// getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0)); // -> 366

// Функция должна корректно рабоать со значениями в миллисекундах
// getDaysBetweenDates(1409796000000, 1409925600000); // -> 1

// Если входные параметры - невалидные даты, то функция вовращает NaN:
// getDaysBetweenDates('1-1-2020', 'дата'); // -> NaN

// Если аргументов меньше 2-х, то функция должна пробросить исключение TypeError
// getDaysBetweenDates(null); // -> TypeError

//* 24.12.23
const getDaysBetweenDates = (...dates) => {
	if (!dates[0] || !dates[1]) {
		throw new TypeError('Less then 2 arguments')
	} else {
		console.log('dates[0], dates[1] :>> ', dates[0], dates[1]);
		return Math.round(Math.abs((new Date(dates[0]) - new Date(dates[1])) / 86400000));
	}
}
//* Old resolution
// const getDaysBetweenDates = (...dates) => {
//     if (dates.length < 2) {
//         throw new TypeError('Less then 2 arguments');
//     } else if (typeof dates[0] === `number` && typeof dates[1] === `number`) {
//         const res = (dates[1] - dates[0]) / 1000 / 86400;
//         if (res < 0 && res < -1) {
//             return Math.ceil(res);
//         } else if (res < 0 && res > -1) {
//             return Math.abs(Math.ceil(res));
//         }else {
//             return Math.floor(res);
//         } 
//     } else {
//         let date1;
//         let date2;
//         if (dates[0] === null) {
//             date1 = 0;
//             date2 = Date.parse(dates[1]);
//             const res = (date2 - date1) / 1000 / 86400;
//             if (res < 0 && res < -1) {
//                 return Math.ceil(res);
//             } else if (res < 0 && res > -1) {
//                 return Math.abs(Math.ceil(res));
//             }else {
//                 return Math.floor(res);
//             }
//         }else if (dates[1] === null) {
//             date2 = 0;
//             date1 = Date.parse(dates[0]);
//             const res = (date2 - date1) / 1000 / 86400;
//             if (res < 0 && res < -1) {
//                 return Math.ceil(res);
//             } else if (res < 0 && res > -1) {
//                 return Math.abs(Math.ceil(res));
//             }else {
//                 return Math.floor(res);
//             }
//         } else{
//             date1 = Date.parse(dates[0]);
//             date2 = Date.parse(dates[1]);
//             const res = (date2 - date1) / 1000 / 86400;
//             if (res < 0 && res < -1) {
//                 return Math.ceil(res);
//             } else if (res < 0 && res > -1) {
//                 return Math.abs(Math.ceil(res));
//             }else {
//                 return Math.floor(res);
//             } 
//         }
//     }
//   };


console.log(getDaysBetweenDates('1-1-2020', '1-2-2020')); // -> 1);
console.log(getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0))); // -> 366);
console.log(getDaysBetweenDates(1409796000000, 1409925600000)); // -> 1);
console.log(getDaysBetweenDates('1-1-2020', 'дата')); // -> NaN
console.log(getDaysBetweenDates(null, '1-1-2020'));
console.log(getDaysBetweenDates('1-1-2020'));