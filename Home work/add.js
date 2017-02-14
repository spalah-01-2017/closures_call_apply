function add(n) {
  return function(m) {
    return m + n;
  }
}

var add5 = add(5);
console.log(add5(2));

var add3 = add(3);
console.log(add3(add5(10)));