var students = [
    {name: 'Taras', mark: 4},
    {name: 'Anna', mark: 8},
    {name: 'Anton', mark: 3},
    {name: 'Ashley', mark: 7},
    {name: 'Tom', mark: 5},
];

var filterStudents = filterArr.bind(null, students);

function filterArr(arr, fun) {
    return arr.filter(fun);
}

function byMarkGreater (mark) {
	var mark = mark;
	return function (el) {
		return el.mark > mark;
	}
}

function byName (str) {
	var str = str;
	return function (el) {
		if (el.name.indexOf(str) === -1) return false;
		return true;
	}
}

console.log(filterStudents(byMarkGreater(4)));
console.log(filterStudents(byName('An')));
