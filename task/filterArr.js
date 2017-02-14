var students = [
    {name: 'Taras', mark: 4},
    {name: 'Anna', mark: 8},
    {name: 'Anton', mark: 3},
    {name: 'Ashley', mark: 7},
    {name: 'Tom', mark: 5},
];

function filterArr(arr, fun) {
    return arr.filter(fun);
}

var filterStudents = filterArr.bind(null, students);

function byMarkGreater(mark) {
	var mark = mark;
	return function(el) {
		return el.mark > mark;
	};
}

function byName(str) {
	var str = str;
	return function(el) {
		return (el.name.indexOf(str) !== -1);
	};
}
filterStudents(byName('T'));