function counter(){
	var num = 0;
	return function(){
		if(arguments[0] === '-')
			return --num;
		else
			return ++num;
	}
}