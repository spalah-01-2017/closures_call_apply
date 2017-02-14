function add(a) {
	return function (b) {
		return a + b;
	};
};
var add3 = add(3);
add3(3);