// Функция filterByMark, которая принимает массив объектов и число в качестве аргумента и возвращает отфильтрованный массив студентов с оценкой выше указанного числа в качестве второго аргумента.

var studentsWithRandomMarks = [
	'Taras', 'Anna', 'John', 'Mila', 
	'Bohdan', 'Maria'].map(function(name) {
    return {
        name: name,
        mark: Math.floor(Math.random() * 10 + 1)
    };
});

function filterByMark(students, mark) {
    return students.filter(function(student) {
        return student.mark > mark;
    });
}

// filterByMark(studentsWithRandomMarks, 5);

// Напишите функцию congratStudents, которая будет принимать в качестве аргумента массив студентов и возвращать строку вида 'Congratulation to name1, name2,...'. Используйте reduce.

function congratStudents(students) {
    if(arguments.length === 0) return 'Nobody to congratulate.';
    return students.reduce(function(phrase, student, i) {
        return phrase + student.name + ((i === students.length - 1) ? '!' : ', ');
    }, 'Congratulation to ');
}
congratStudents(studentsWithRandomMarks);
congratStudents(filterByMark(studentsWithRandomMarks, 5));


//call, apply, bind
//Напишите функцию sum, которая будет принимать сколько угодно аргументов (чисел) и будет возвращать их сумму. Используйте reduce.

function sum() {
    var resArr = [];
    for(var i = 0; i < arguments.length; i++) {
        resArr.push(arguments[i]);
    }
    return resArr.reduce(function(a,b) {
        return a + b;
    });
}

//////////подмена контекста

var o = {
  nums: [1,2,3,4],
  sum: function() {
    return this.nums.reduce(function(a,b) {
      return a + b;
    }, 0)
  }
}

var o2 = {nums: [1,1]}
o.sum.call(o2) //2
// (function() {
// 	return o2.nums.reduce(function(a,b) {
// 	  return a + b;
// 	}, 0)
// })()
////////////
function sum() {
	//var args = arguments.slice(); // не сработает, потому что у объекта arguments нет метода slice
    var args = [].slice.call(arguments); // заимствуем метод slice у массива и вызываем его на объекте arguments
    return args.reduce(function(a,b) {
        return a + b;
    });
}

function sum() {
    var args = [].slice.apply(arguments, [1,3]);
    return args.reduce(function(a,b) {
        return a + b;
    });
}

function sum() {
    return [].reduce.call(arguments, function(a,b) {
        return a + b;
    }, 0);
}


////////////////
//Замыкание
//1.

function foo() {
    var bar = 'bar';

    function baz() {
    	var b = 5;
        console.log(bar);
    }

    bam(baz);
}

function bam(baz) {
	var bar = 'new bar';
    baz(); //
}

foo(); // 'bar'

//2.
function foo() {
    var bar = 'bar';

    return function() {
        console.log(bar);
    };
}

function bam() {
    foo()(); //
}

bam(); //'bar'

// //3. Лексическая область видимости, т.е. функция "помнит" ту область видимости, в которой была объявлена. Поэтому в результате получим 10, а не 20.
var a = 10;
function testFn() {
  alert(a);
}
 
(function (funArg) {
  var a = 20;
  funArg();
})(testFn);

//То же, что и выше
var a = 10;
function testFn() {
  alert(a);
}
 
(function () {
  var newFunc = testFn;
  var a = 20;
  newFunc();
})();

//4. Похожий пример на (3), здесь внутренняя функция тоже помнит свою область видимости объявления, то бишь переменную а.
function mult(a) {
  return function(b) {
    return b * a;
  }
}

var multByTwo = mult(2);
var multByTen = mult(10);
multByTwo(10); //20
multByTen(10); //?
////////////////////////////

//5. Замыкание "помнит" внутреннее состояние
function log() {
    var inner = 'initial';
    return function() {
        if (arguments.length) {
            inner = arguments[0];
        }
        console.log(inner);
    }
}

var logger = log();
logger(); // 
logger('new value'); //
logger(); // 'new value'
