function counter() {

  var count = 0;

  return function (str) { 
	if(str === '-'){
		return --count;
	}
  	return ++count;
  }

}

var c1 = counter(); 

c1();