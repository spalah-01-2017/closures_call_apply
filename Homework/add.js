function add(n) {
	return function (a){
		return n + a;
	}
}
var add5 = add(5);
add5(2);