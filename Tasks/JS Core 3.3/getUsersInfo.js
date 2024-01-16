const data0 = {
  id1: {name: 'Denis',   age: 21},
  id2: {name: 'Wilson',     age: 30},
  id3: {name: 'Anna', age: 10},
};

const data1 = {
  id2: {name: 'Alex', age: 70},
  id6: {name: 'Elon'},
  id3: {"lastName": "Ivanov",
    "name": "Pavel",
    "profession": "programmer",
  },
  id4: {
    "name": "Petr",
  },
  id5: {
    "city": "St. Petersburg",
    "name": "Lena",
  },
  id7: {
    "age": 25,
    "hobbys": [
      "traveling",
      "macrame"
    ],
    "name": "Olesya",
  }
};

function onLoad(arr) {
  console.log('arr :>> ', arr);
}

function getUsersIds(cb) {
  setTimeout(() => cb(Object.keys(data0)), 100);

};
function getUserInfo(id, cb) {
  setTimeout(() => cb(data0[id]), 10*data0[id].age);
};




function getUsersInfo(onLoad) {
  getUsersIds((IDs) => {
    if (IDs.length === 0) {
      return onLoad([]);
    };
    const users = [];
    let c = IDs.length;

    IDs.forEach((el, index) => {
      getUserInfo(el, user => {
        users[index] = user;
        if (!--c) {
          onLoad(users);
        }
      })
    })
  });
};


console.log('getUsersInfo :>> ', getUsersInfo(onLoad));