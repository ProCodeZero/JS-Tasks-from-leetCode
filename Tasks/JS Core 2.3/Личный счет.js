// Создайте 2 класса - Person для описания клиента и Account для работы 
// с банковским счетом частного лица.
// Считаем, что отрицательный баланс счета - это нормально, обрабатывать
// как ошибку не надо.


// Person
// const person = new Person('Johannes', 'Helms', '1983-01-02');

// Методы
// getAge() - Возвращает возраст владельца счета

// Свойства
// firstName - Имя
// lastName - Фамилия
// fullName - Имя вместе с фамилией, вычислямое свойство (используем геттер)

// Account
// new Account(person, 1000);

// Методы
// addMoney(amount, description) - Положить деньги на аккаунт с комментарием к переводу
// withdrawMoney(amount, description) - Вывести деньги с аккаунта с комментарием к переводу
// getAmount() - Получить текущее состояние счета
// getAccountHistory() - Возвращает массив с объектами формата 
// { timestamp: 1574434091131, target: 'in', amount: 10, description: 'ЗП' }. 
// Поле target может иметь значения in или out.
// transfer(fromAccount, toAccount, amount) - статический метод, переводит 
// деньги с одного счета на другой

// Свойства
// person - Владелец счета


class Person {
    constructor(firstName, lastName, birthday) {
        this.firstName  = firstName 
        this.lastName  = lastName 
        this.birthday = birthday
    }

    getAge() {
        let dateInTests = new Date('2019-05-23')
        let birthdayDate = new Date(this.birthday)
        let age = dateInTests.getFullYear() - birthdayDate.getFullYear()
        let m = dateInTests.getMonth() - birthdayDate.getMonth()
        if (m < 0 || (m === 0 && dateInTests.getDate() < birthdayDate.getDate())) {
            age--
        }
        return age
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Account {
    constructor(person, balance) {
        this.person = person
        this.balance = balance
        this.transactions = []
    }

    addMoney(amount, description) {
        this.balance += amount
        this.transactions.push({
            timestamp: Date.now(), 
            target: 'in', 
            amount: amount, 
            description: description
        })
        return `${this.balance} ${description}`
    }

    withdrawMoney(amount, description) {
        this.balance -= amount
        this.transactions.push({
            timestamp: Date.now(), 
            target: 'out', 
            amount: amount, 
            description: description
        })
        return `${this.balance} ${description}`
    }

    getAmount() {
        return this.balance
    }

    getAccountHistory() {
        return this.transactions
    }

    static transfer(fromAccount, toAccount, amount) {
        fromAccount.balance -= amount
        toAccount.balance += amount
        fromAccount.transactions.push({
            timestamp: Date.now(), 
            target: 'out', 
            amount: amount,
        })
        toAccount.transactions.push({
            timestamp: Date.now(), 
            target: 'in', 
            amount: amount,
        })
    }
}



const alex = new Person('Alexey', 'Petrov', '1994-05-22');
const alexAccount = new Account(alex, 1000);
const helen = new Person('Helen', 'Smith', '1990-06-06');
const helenAccount = new Account(helen, 400);

alexAccount.addMoney(1000, 'Зарплата');
const amount = alexAccount.getAmount();
console.log(alexAccount.withdrawMoney(amount * 0.1, 'Налоги'));
Account.transfer(alexAccount, helenAccount, 100);
console.log(helenAccount.getAmount()); // 500
console.log(alexAccount.getAmount()); // 1700

// console.log(alex);
// console.log(alex.getAge());
// console.log(alex.fullName);
// console.log(helen);
// console.log(helen.getAge());
// console.log(helen.fullName);