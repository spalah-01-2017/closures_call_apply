## Домашнее задание

### Теория

[Замыкания](https://learn.javascript.ru/closures)

[Лексическая область видимости функций в JavaScript (почитайте снова)](https://habrahabr.ru/post/149526/)

[Явное указание this: "call", "apply"](https://learn.javascript.ru/call-apply)

[Раздел Методы call() и apply()](http://getinstance.info/articles/javascript/call-apply-and-bind-functions/)

[Примеры с занятия](/example.js)

[Варианты реализаций прошлого домашнего задания](/example-hometask.js)

===
### Практика. Реализуйте следующие функции

(1) ⭐ Функция add, принимающая в качестве аргумента число и возвращающая другую функцию, принимающую аргументом тоже число и возвращающую сумму этих чисел:
```javascript
function add(n) {
	
}
var add5 = add(5);
add5(2); //7
var add3 = add(3);
add3(add5(10)); //18
```

(2) ⭐ Функция counter, которая ведет себя, как показано на примерах ниже:
```javascript
function counter() {

}

var c1 = counter();
c1(); //1
c1(); //2
c1(); //3
c1('-'); //2
c1('-'); //1
c1('-'); //0
c1('-'); //-1
```

(3) Функция filterArr уже реализована. Она принимает два аргумента: массив объектов (со свойствами name и mark) и функцию-предикат (функцию, возвращающую булев тип данных), на основании которой будет происходить фильтрация:
```javascript
function filterArr(arr, fun) {
	return arr.filter(fun);
}
```
Реализуйте функции byMarkGreater и byName, которые будут передваться функции filterArr и на основании которых будет выполняться следующее:
```javascript
var students = [
	{name: 'Taras', mark: 4},
	{name: 'Anna', mark: 8},
	{name: 'Anton', mark: 3},
	{name: 'Ashley', mark: 7},
	{name: 'Tom', mark: 5},
];

filterArr(students, byMarkGreater(5)); //[{name: 'Anna', mark: 8}, {name: 'Ashley', mark: 7}];
filterArr(students, byName('ara')); //[{name: 'Taras', mark: 4}]
filterArr(students, byName('An')); //[{name: 'Anna', mark: 8}, {name: 'Anton', mark: 3}]
```
Объяснение результатов выполнения функции:
- filterArr(students, byMarkGreater(5)); - все студенты, у которых оценка больше 5
- filterArr(students, byName('ara')); - один лишь студент, потому что подстрока 'ara' встречается только в имени одного студента - T**`ara`**s
- filterArr(students, byName('An')); - найдены два студента, в именах которых встречается подстрока 'An' - '**`An`**na' и '**`An`**ton'

При многократном вызове функции filterArr с массивом студентов, у нас заметно явное повторение - мы каждый раз передаем в функцию один и тот же массив. Поэтому, чтобы избежать повторение, можно использовать bind (на результат вашей работы это не должно никак повлиять):
```javascript
var filterStudents = filterArr.bind(null, students);
```
После чего можно работать таким образом:
```javascript
filterStudents(byMarkGreater(5)); //[{name: 'Anna', mark: 8}, {name: 'Ashley', mark: 7}];
filterStudents(byName('ara')); //[{name: 'Taras', mark: 4}]
filterStudents(byName('An')); //[{name: 'Anna', mark: 8}, {name: 'Anton', mark: 3}]
```

___
⭐ - обязательное задание
Все функции должны находиться в разных файлах (одна функция - один файл) с именем этой функции. Например, реализация функции counter должна находиться в файле counter.js.
