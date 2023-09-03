
localStorage.setItem('counters', JSON.stringify({testCounter: 10}, {testCounter2: 11}));

function incrementCounter(counterName){
    let counters;

    try {
        counters = JSON.parse(localStorage.getItem('counters'));
    } catch (Error) {
        counters = {};
    }
    if (typeof counters[counterName] !== `number`) {
        counters[counterName] = 0;
    }
    counters[counterName]++;
    localStorage.setItem('counters', JSON.stringify(counters));

    return counters[counterName];
}




console.log(incrementCounter('counters')); // 11


console.log(localStorage.getItem('counters'));