
class ExecutionError extends Error {

    constructor(element, name, stack, message){
        super(message);
        this.element = element
        this.name = name;
        this.stack = stack
    }
  
    getArgData() {
      return this.element
    }
  }
  
  function applyFn(dataArr, callback) {
    return dataArr.reduce(function(acc, currentElement, i) {
      const {succeeded, errors} = acc;
      try {
        succeeded.push(callback(currentElement))
      } catch(e) {
        errors.push(new ExecutionError(dataArr[i], e.name, e.stack));
      }
      return acc
    }, {
      succeeded: [],
      errors: [],
    })
  }

// {
//     succeeded: [...], // Массив данных после функции обработчика, как при вызове .map
//     errors: [...],    // Массив инстансов ExecutionError
//   }

const { succeeded, errors } = applyFn([1, 2, 3], (arg) => arg + 1);
//   succeeded: [2, 3, 4],
//   errors: [],

const dataArr = ['{"login":"login","password":"password"}', '{{}'];
const callback = JSON.parse;
const { succeeded1, errors1 } = applyFn(dataArr, callback);
//   succeeded: [{ login: 'login', password: "password" }],
//   errors: [ExecutionError],

errors[0].getArgData(); // '{{}'