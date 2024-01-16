// Реализовать класс Calc с методами sub / add / result

// В конструкторе можем передать начальное иммутабельное значение (по умолчанию 0),
// потом методами add и sum прибавлять и вычитать из него.
// Вызов add/sub можно объединять в цепочку (fluent interface), методы возвращают
// новый объект класса.
// По вызову result() получаем результат вычислений.

// Пример использования:

// const calc = new Calc();
// calc.result(); // 0
// calc.add(5).result(); // 0 + 5 = 5
// calc.add(3).sub(10).result(); // 0 + 3 - 10 = -7

// const ten = calc.add(10);
// ten.sub(5).result(); // 10 - 5 = 5
// ten.result(); // 10

//* 24.12.23
class Calc {
	constructor(defaultValue = 0) {
		this.defaultValue = defaultValue;
	}
	add(number) {
		let result = this.defaultValue + number
		return new Calc(result)
	}
	sub(number) {
		let result = this.defaultValue - number
		return new Calc(result)
	}
	result() {
		return this.defaultValue
	}
}
//* Old resolution
// class Calc {
//     constructor(num = 0) {
//         this.num = num
//     }
//     add(number) {
//         let res = this.num + number
//         return new Calc(res)
//     }
//     sub(number) {
//         let res = this.num - number
//         return new Calc(res)
//     }
//     result() {
//         return this.num
//     }
// }



const calc = new Calc();
console.log(calc.result()); // 0
console.log(calc.add(5).result()); // 0 + 5 = 5
console.log(calc.add(3).sub(10).result()); // 0 + 3 - 10 = -7

const ten = calc.add(10);
console.log(ten);
console.log(ten.sub(5).result()); // 10 - 5 = 5
console.log(ten.result()); // 10
console.log('--------------------------------------------')
const calc2 = new Calc(10);
console.log(calc2.result()); // 10
console.log(calc2.add(5).result()); // 10 + 5 = 15
console.log(calc2.add(3).sub(10).result()); // 10 + 3 - 10 = 3

const ten2 = calc2.add(10);
console.log(ten2);
console.log(ten2.sub(5).result()); // 10 - 5 = 15
console.log(ten2.result()); // 20