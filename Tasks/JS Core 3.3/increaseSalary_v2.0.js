async function increaseSalary() {
  let count = 0;
  let newBudget = 0;
  const users = await api.getEmployees();
  const len = users.length;
  const sum = users.reduce((acc, el) => {
    return acc + el.salary;
  }, 0);
  const mid = Math.floor(sum / len);
  try {
    for (const user of users) {
      let newSalary = 0;
      if (user.salary < mid) {
        try {
          newSalary = user.salary * 1.2;
          await api.setEmployeeSalary(user.id, newSalary);
          await api.notifyEmployee(user.id, `Hello, ${user.name}! Congratulations, your new salary is ${newSalary}!`);
          count++;
          newBudget += parseInt(user.salary * 1.2);
        } catch (err) {
          await api.notifyAdmin(err);
        }
      } else if (user.salary > mid) {
        try {
          newSalary = user.salary * 1.1;
          await api.setEmployeeSalary(user.id, newSalary);
          await api.notifyEmployee(user.id, `Hello, ${user.name}! Congratulations, your new salary is ${newSalary}!`);
          count++;
          newBudget += parseInt(user.salary * 1.1);
        } catch (err) {
          await api.notifyAdmin(err);
        }
      }
    }
  } catch (err) {
    await api.notifyAdmin(err);
  } finally {
    await api.sendBudgetToAccounting(newBudget);
  }
  console.log('count :>> ', count);
  console.log('newBudget :>> ', newBudget);
  return count;
}

const api = {
  _employees: [
    { id: 1, name: "Alex", salary: 120000 },
    { id: 2, name: "Fred", salary: 110000 },
    { id: 3, name: "Bob", salary: 80000 },
  ],

  getEmployees() {
    return new Promise((resolve) => {
      resolve(this._employees.slice());
    });
  },

  setEmployeeSalary(employeeId, newSalary) {
    return new Promise((resolve) => {
      const updatedEmployees = this._employees.map((employee) =>
        employee.id !== employeeId
          ? employee
          : {
              ...employee,
              salary: newSalary,
            }
      );
      this._employees = updatedEmployees;
      resolve(this._employees.find(({ id }) => id === employeeId));
    });
  },

  notifyEmployee(employeeId, text) {
    return new Promise((resolve) => {
      resolve(true);
    });
  },

  notifyAdmin(error) {
    return new Promise((resolve) => {
      resolve();
    });
  },

  setEmployees(newEmployees) {
    return new Promise((resolve) => {
      this._employees = newEmployees;
      resolve();
    });
  },

  sendBudgetToAccounting(newBudget) {
    return new Promise((resolve) => {
      resolve();
    });
  },
};

console.log(increaseSalary());
