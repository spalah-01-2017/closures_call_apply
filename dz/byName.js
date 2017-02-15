function byName(substr){
	return function filtr(student) {
		return student.name.indexOf(substr) >= 0;
	}
}