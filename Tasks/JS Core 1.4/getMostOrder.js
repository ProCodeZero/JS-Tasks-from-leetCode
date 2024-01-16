// Дан список информации о людях.

// Необходимо вернуть массив, содержащий самого старшего человека в списке.
// Если несколько людей имеют одинаковый наибольший возраст, то нужно
//  вернуть массив, содержащий их всех.

// Возраст хранится в поле age.

const data =[
	{ firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 59, language: 'PHP' },
	{ firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
	{ firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
	{ firstName: 'Robert', lastName: 'J.', country: 'Greece', continent: 'Europe', age: 59, language: 'Java' },
];

//* 21.12.23
const getMostSenior = (humans) => {
	return humans.filter(human => {
		let maxAge = humans.find(h => Math.max(h.age)).age;
		if (human.age === maxAge){
			return human;
		}
	})
}
//* Old resolution
// const getMostSenior = (humans) => {
//     const arr = humans.map((human) => (human.age));
//     arr.sort((prev, next) => prev - next).reverse();
//     const maxAge = arr[0];
//     console.log(maxAge);
//     let mostSeniorArr = [];
//     humans.forEach((human) => {
//         if (human.age == maxAge){
//             mostSeniorArr.push(human);
//         }
//     });
//     return mostSeniorArr;
// };



const result = getMostSenior(data);
console.log(result);

// const getMostSenior = (humans) => {
    // const oldestUsers = [];
    // humans.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
    // humans.reverse();
    // for (i in humans) {
    //     if (humans[0].age === humans[(i)].age) {
    //         oldestUsers.push(humans[i]);
    //     }
    // };
    // return oldestUsers;
// };

// const getMostSenior = (humans) => {
//     let maxAgeHuman = humans.find(human => Math.max(human.age));
//     let maxAge = maxAgeHuman.age;
//     const mostSeniorArr = [];
//     humans.forEach((human) => {
//         if (human.age === maxAge){
//             mostSeniorArr.push(human);
//         };
//     });
//     return mostSeniorArr;
// };