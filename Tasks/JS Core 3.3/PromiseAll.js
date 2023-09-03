const firstPromise = new Promise((resolve) =>
  setTimeout(() => resolve(300), 300)
);

const secondPromise = new Promise((resolve) =>
  setTimeout(() => resolve(200), 200)
);

const thirdPromise = new Promise((resolve) =>
  setTimeout(() => resolve(100), 100)
);

function promiseAll(promises) {
  // my code
  let len = promises.length;
  let answer = new Array(len);
  return new Promise((resolve, reject) => {
    if (len === 0) {
      resolve(answer)
    }
    for (let i = 0; i < len; i++) {
      promises[i].then((f) => {
        answer[i] = f;
        console.log(answer[i]);
        if (--len == 0) {
          resolve(answer);
        }
      });
    }
  });
}

promiseAll([firstPromise, secondPromise, thirdPromise]).then(console.log); // [300, 200, 100]
