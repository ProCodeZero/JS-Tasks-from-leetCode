const firstPromise = new Promise((resolve) =>
  setTimeout(() => resolve(300), 300)
);

const secondPromise = new Promise((resolve) =>
  setTimeout(() => resolve(200), 200)
);

const thirdPromise = new Promise((resolve) =>
  setTimeout(() => resolve(100), 100)
);

function promiseRace(promises) {
    const len = promises.length;
    return new Promise((resolve, reject) => {
      for (let i = 0; i<len; i++)  {
        promises[i].then(resolve, reject);
      }
    })
}

promiseRace([firstPromise, secondPromise, thirdPromise]); // 100