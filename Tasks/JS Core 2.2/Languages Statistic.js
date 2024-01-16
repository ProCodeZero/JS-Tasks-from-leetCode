// Реализуйте функцию getLanguagesStatistic, которая поможет IT журналу 
// подвести итоги 2019 года по популярности использования языков программирования. 
// На входе функция получает массив отзывов пользователей. Необходимо вернуть 
// объект в формате { languageName: count, anotherLanguageName: anotherCount, ... },
//  где languageName - название языка в строке, а count - число отзывов, которые 
//  оставили программисты, использующие этот язык. При этом следует учитывать 
//  только те отзывы пользователей, которые были оставлены в 2019 году. 
//  Год отзыва хранится в поле year, язык - в поле language.

//* 24.12.23
const getLanguagesStatistic = (feedbacks) => {
	return feedbacks.reduce((result, object) => {
		// if (object.year === 2019) {
		// 	if (!(result[object.language])) {
		// 		result[object.language] = 1;
		// 	} else {
		// 		result[object.language]++;
		// 	}
		// }
		// return result;
		object.year === 2019 && !(result[object.language]) ?
			result[object.language] = 1 : object.year === 2019 && (result[object.language]) ?
				result[object.language]++ : null;
		return result
	}, {})
}
//* Old resolution
// const getLanguagesStatistic = (feedbacks) => {
//     const fbs2019 = feedbacks.filter(elem => elem.year === 2019);
//     const langs = fbs2019.map(elem => elem.language);
//     const count = langs.reduce((acc, n) => {
//       console.log('acc :>> ', acc);
//       console.log('n :>> ', n);
//       console.log('acc[n] = acc[n] || 0 :>> ', acc[n]);
//       return (acc[n] = (acc[n] || 0) + 1, acc)
//     },{});
//     return count;
// };


// Отзыв: { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 }

// Данные на входе: 

const data = [
	{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 },
	{ firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', year: 2019 },
	{ firstName: 'Piter', lastName: 'G.', country: 'Sweden', continent: 'Europe', age: 30, language: 'JavaScript', year: 2019 },
	{ firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', year: 2014 },
	{ firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', year: 2016 },
];

// Данные на выходе:

console.log(getLanguagesStatistic(data));
// {
//   C: 1,
//   JavaScript: 2
// }