function add (n) {
	return function (m) {
		return n + m;
	}
}

var add5 = add(5);
var add7 = add(7);

console.log(add5(4), add7(5));
