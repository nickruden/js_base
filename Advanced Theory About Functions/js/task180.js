// Ex. 1  
function func() {
    let str = 'abcde';
    return str;
}

// Ex. 2 
console.log(func());

// Ex. 3
console.log(func);

// Ex. 4
func = 123;
console.log(func);

// Ex. 5
function func1() {
    return 3;
}

// Ex. 6
let func2 = func1;

// Ex. 7
console.log(func1() + func2());

// Ex. 8
let func21 = function() {
    return 1;
}

// Ex. 9 
let func22 = function() {
    return 2;
}

// Ex. 10
let summfunc = func21() + func22();
console.log(summfunc);