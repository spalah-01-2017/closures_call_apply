function byMarkGreater(mark){
	return function filtr(student) {
		return student.mark > mark;
	}
}