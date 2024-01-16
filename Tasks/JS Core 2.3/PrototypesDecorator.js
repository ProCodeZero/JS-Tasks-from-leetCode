// Необходимо добавить возможность логирования в функцию add класса Addition

// Используя прототип класса Addition добавить декоратор к функции add,
// дающий возможность логировать ее вызов
// При этом результат выполнения add должен быть как и в оригинале, 
// но дополнительно при вызове выводить в консоль 'called'

// Менять изначальную функцию, класс или созданный объект нельзя.
// Код можно писать только в обозначенной зоне.


class Addition {
    constructor (num) {
    	this.num = num;
    }
    
    add (...nums) {
        console.log('called')
    	const sum = (a, b) => a + b;
    	return this.num + nums.reduce(sum);
    }
}

// write your code here
var add = Addition.prototype.add;

Addition.prototype.add = function(...nums) {
  console.log('called');
  return add.call(this, ...nums);
}
