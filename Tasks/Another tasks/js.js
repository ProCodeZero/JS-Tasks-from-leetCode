function count() {
	let count = 0;
	return () => count++;
}

let counter = count();


for (let index = 0; index < 10; index++) {
	console.log('counter() :>> ', counter());
}