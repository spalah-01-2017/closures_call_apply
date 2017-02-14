function counter () {
	var count = 0;
	return function (arg) {
		if (arg === '-') return --count;
		return ++count;
	}
}

var c = counter();
