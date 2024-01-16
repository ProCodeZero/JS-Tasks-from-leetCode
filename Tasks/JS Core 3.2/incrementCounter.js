
localStorage.setItem('counters', JSON.stringify({ testCounter: 10 }, { testCounter2: 11 }));

//* 01.01.2024
function incrementCounter(counterName) {
	let counters;
	try {
		counters = JSON.parse(localStorage.getItem('counters'));
	} catch (Error) {
		counters = {};
	}
	for (let key in counters) {
		if (typeof counters[key] !== 'number') {
			counterName[key] = 0;
		}
		counters[key]++;
		localStorage.setItem('counters', JSON.stringify(counters));
		return counters[key];
	}
}

//* Old resolution
// function incrementCounter(counterName){
//     let counters;

//     try {
//         counters = JSON.parse(localStorage.getItem('counters'));
// 				console.log('counters :>> ', counters);
//     } catch (Error) {
//         counters = {};
//     }
//     if (typeof counters[counterName] !== `number`) {

//         counters[counterName] = 0;
//     }
//     counters[counterName]++;
//     localStorage.setItem('counters', JSON.stringify(counters));

//     return counters[counterName];
// }


console.log(incrementCounter('counters')); // 11


console.log(localStorage.getItem('counters'));