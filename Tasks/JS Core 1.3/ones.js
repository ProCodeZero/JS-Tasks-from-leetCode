// Реализуйте функцию once, которая принимает функцию в качестве 
// аргумента и возвращает новую функцию, которая вызывает функцию-аргумент, 
// но только единожды. Повторный вызов функции-результата once не должен 
// давать никакого эффекта.


// * 18.12.2023
const f = () => console.log('hi!');
const once = function (fn, count = { c: 0 }) {
	return () => {
		if (count.c === 0) {
			count.c++
			fn()
		}
	};
};
//* Old resolution
// const f = () => console.log('hi!'); 
// const once = fn => {
//     let fun = fn();
//     return () => fun;
// }; // тут надо что=то написать... но что?
const onceF = once(f); 
onceF(); // hi!
onceF(); // nothing