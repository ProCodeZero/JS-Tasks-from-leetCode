// Реализуйте функцию, которая принимает на вход два числа и 
// арифметический оператор (имя которого в виде строки) и 
// возвращает результат соответстующей операции.

// Первые 2 аргумента это положительные целые числа

// Третий аргумент может быть одним из "add", "subtract", "divide", "multiply".


function arithmetic(a, b, op) {
    switch (op) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        default:
            return NaN;
    }
}