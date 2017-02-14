function counter() {
	var count = 0;
	return function (symbol) {
		(symbol === '-') ? --count : ++count;
		return count;
	}
}