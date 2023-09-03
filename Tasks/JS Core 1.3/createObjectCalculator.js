// Реализуйте функцию createObjectCalculator, которая принимает в 
// качестве аргументов два числа, а возвращает следующий объект:

// Объект calculator (калькулятор) с тремя методами:

// read(a, b) (читать) принимает два значения и сохраняет их как 
// свойства объекта. sum() (суммировать) возвращает сумму сохранённых 
// значений. mul() (умножить) перемножает сохранённые значения и 
// возвращает результат.

// Гарантируется, что оба числа, передаваемых в read всегда будут числами.

const createObjectCalculator = (initialA, initialB) => {
    const calculator = {
      sum: function() {
        return this.a + this.b;
      },
   
      mul: function() {
        return this.a * this.b;
      },
   
      read: function(a, b) {
        this.a = a;
        this.b = b;
      }
    }
    
    calculator.a = initialA;
    calculator.b = initialB;
    return calculator;
  };

const calculator = createObjectCalculator(2, 3);
console.log(calculator.sum()); // 2 + 3 = 5
console.log(calculator.mul()); // 2 * 3 = 6
calculator.read(12, 34);
console.log(calculator.sum()); // 12 + 34 = 46
console.log(calculator.mul()); // 12 * 34 = 408

// obj {
// read(a, b) (читать) принимает два значения и сохраняет их как свойства объекта. sum() (суммировать) возвращает сумму сохранённых значений.}
// mul() (умножить) перемножает сохранённые значения и возвращает результат.}
// Гарантируется, что оба числа, передаваемых в read всегда будут числами.