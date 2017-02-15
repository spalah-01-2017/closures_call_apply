function counter() {
    var tmp = 0;
    return function(param) {
        if (param === "-") {
            return --tmp;
        };
        return ++tmp;
    }
}