function add(n) {
	return function(m) {
  	return n + m;
  }
}

var add5 = add(5);
add5(2); //7
var add3 = add(3);
add3(add5(10)); //18