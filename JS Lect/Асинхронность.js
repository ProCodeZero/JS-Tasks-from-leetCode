console.log('start')

console.log('start2')

function timeout5sec() {
    console.log('timeout5sec');
}

window.setTimeout(function() {
    console.log('Inside timeout, after 2 seconds')
}, 2000)

window.setTimeout(timeout5sec, 5000);

console.log('end');
