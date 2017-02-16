function counter() {
	var countCall = 0;

	return function(decrement) {
  	if ( decrement === '-' ) {
    	return --countCall
    } else {
    	return ++countCall;
    }
  }
}

var c1 = counter();
console.log( c1() ); //1
console.log( c1() ); //2
console.log( c1() ); //3
console.log( c1('-') ); //2
console.log( c1('-') ); //1
console.log( c1('-') ); //0
console.log( c1('-') ); //-1