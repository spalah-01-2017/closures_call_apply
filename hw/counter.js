// Функция counter, которая ведет себя, как показано на примерах ниже:

function counter() {
    var num = 0;
    return function(sign) {
        if (sign === '-') {
            num=num-1;
            return num;
        }
        num=num+1;
        return num;
    }
}


var c1 = counter();
c1(); //1
c1(); //2
c1(); //3
c1('-'); //2
c1('-'); //1
c1('-'); //0
c1('-'); //-1