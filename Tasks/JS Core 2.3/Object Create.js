// Реализуйте аналог стандартной фунции Object.create - создаёт и 
// возвращает новый объект, прототипом которого является первый аргумент, 
// переданный в функцию. Если передан второй аргумент - устанавливает его 
// в качестве свойств для нового объекта.

// Ваша функция должна принимать два параметра:

// prototype (обязательный) - объект или null (но не undefined), который 
// будет являтся прототипом для созданного объекта.
// properties (optional) - аргумент, который установит свойства для нового 
// объекта (будет передан в Object.defineProperties).
// Если параметры фунции отсутствуют или prototype НЕ является объектом
// или null, то необходимо пробросить TypeError.

// В результате Object.create вернет созданный объект с внутренним 
// свойством [[Prototype]], установленным в значение переданного в 
// аргументе prototype. Если properties передан и НЕ является undefined, 
// то будет вызван Object.defineProperties(obj, properties), где obj - 
// объект,который должен быть возвращен из Object.create.

//* 01.01.2023
Object.create = function(proto, propertiesObject){
	return Object.defineProperties(Object.setPrototypeOf({}, proto), {...propertiesObject});
}
//* Old resolution
// Object.create = function(proto, propertiesObject) {
//     let newObj = {};
//     Object.setPrototypeOf(newObj, proto);
//     return Object.defineProperties(newObj, {...propertiesObject});
// };



const A = {
    objectName: 'Object A',
    getObjectName: function() {
      return `This is ${this.objectName}!`;
    },
  };
  
  const B = Object.create(A, {
    objectName: {
      value: 'Object B',
    },
  });
  
  A.getObjectName(); // This is Object A!
  B.getObjectName(); // This is Object B!
  
  A.hasOwnProperty('getObjectName'); // true
  A.hasOwnProperty('objectName'); // true
  
  B.hasOwnProperty('getObjectName'); // false
  B.hasOwnProperty('objectName'); // true