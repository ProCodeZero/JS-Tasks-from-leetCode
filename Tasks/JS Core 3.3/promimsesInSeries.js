const firstPromise = () =>
  new Promise((resolve) => setTimeout(() => resolve(300)), 300);

const secondPromise = () =>
  new Promise((resolve) => setTimeout(() => resolve(200)), 200);

const thirdPromise = () =>
  new Promise((resolve) => setTimeout(() => resolve(100)), 100);

async function promisesInSeries(asyncFns) {
  let u = undefined;
  let x = asyncFns.length - 1 ;
  for (const item of asyncFns) {
    if (x != 0) {
      await item(u).then(f => u =f);
      console.log('u :>> ', u);
      console.log('item(u).then(f => u =f) :>> ', item(u).then(f => u =f));
      console.log('x :>> ', x);
      x--
    } else {
      return u
    }
  }
}
  
console.log(promisesInSeries([firstPromise, secondPromise, thirdPromise]))
// Выполнит resolve(300) через 300 мс, потом resolve(200) через 200 мс, потом resolve(100) через 100 мс
