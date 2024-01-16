// Напишите функцию, которая принимает первым параметром объект, 
// вторым - массив из цепочки свойств, по которому нужно пройти, чтобы 
// получить значение.

// Если какое-то из свойств не найдено - функция возвращает undefined.

// * 18.12.2023
function optionalChaining(obj, chain) {
	if (chain.length === 0) {
		return undefined;
	} else {
		for (prop of chain) {
			if (obj[prop]) {
				obj = obj[prop];
			}
			else {
				return undefined;
			}
		}
		return obj;
	}
}

//* Old resolution
// function optionalChaining(obj, chain){
//     let cur = obj;
//     if (chain.length == 0) {
//         return undefined;
//     } else {
//         for(prop of chain){
//             if(cur[prop])
//                 cur = cur[prop];
//             else
//                 return undefined;
//         }
//         return cur;
//     }

// }

const obj = { a: { b: { c: { d: 'Привет!' } } } };

console.log(optionalChaining(obj, ['a', 'b', 'c', 'd']));
console.log(optionalChaining(obj, ['a', 'b', 'c', 'd', 'e']));
