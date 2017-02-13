var arr = [3, 5, 'mozilla', 'JavaScript', 'mozilla', 4, 5];
uniqueArray(arr); //[3, 5, 'mozilla', 'JavaScript', 4]

function uniqueArray(arr) {
    var resArr = [];
    arr.forEach(function(el) {
        if(resArr.indexOf(el) === -1) {
            resArr.push(el);
        }
    });    
    return resArr;
}

function uniqueArray(arr) {
    var resArr = [];
    arr.forEach(function(el,i) {
        if(arr.indexOf(el) === i) {
            resArr.push(el);
        }
    });    
    return resArr;
}

function uniqueArray(arr) {
    var resArr = [];
    var seen = {};
    arr.forEach(function(el) {
        //debugger
        if(!seen[el]) {
            resArr.push(el);
            seen[el] = true;
        }
    });    
    return resArr;
}

function uniqueArray(arr) {  
    return arr.filter(function(el,i) {
        return arr.indexOf(el) === i;
    });
}
/* console.time, console.timeEnd */

//////////////////////////

createObject(['name', 'mark'], ['John', 7]);
//{'name': 'John', 'mark': 7}
function createObject(arrOfKeys, arrOfValues) {
    var obj = {};
    arrOfKeys.forEach(function(el,i) {
        obj[el] = arrOfValues[i];
    });
    return obj;
}

///////////////////
var o1 = { a: 5 };
var o2 = copyObj(o1); 
o2; //{a: 5}

function copyObj(obj) {
    var resObj = {};
    Object.keys(obj).forEach(function(key) {
        resObj[key] = obj[key];
    });
    return resObj;
}

////////////////
function mergeObjects(o1,o2) {
    return Object.keys(o2).reduce(function(obj, key) {
        obj[key] = o2[key];
        return obj;
    }, o1);
}
//immutable
function mergeObjects(o1,o2) {
    return Object.keys(o2).reduce(function(obj, key) {
        return obj[key] = o2[key], obj;
    }, copyObj(o1));
}
