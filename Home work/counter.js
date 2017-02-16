var c1 = counter();
c1(); //1
c1(); //2
c1(); //3
c1('-'); //2
c1('-'); //1
c1('-'); //0
c1('-'); //-1


function counter() {
  var current = 0;
  
  return function(a) {
    if (a === '-') {
      return --current;
    } 
      
      return ++current;
  }
}