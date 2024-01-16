function x() {
	for (let i = 1; i <= 5; i++) {
		setTimeout(() => {
			console.log('i :>> ', i);
		}, i * 1000);
	}
}
function y() {
	for (var i = 1; i <= 5; i++) {
		function close(x) {
			setTimeout(() => {
				console.log('i :>> ', x);
			}, x * 1000);
		}
		close(i);
	}
}
x();
y();