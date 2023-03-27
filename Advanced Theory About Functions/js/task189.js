// Ex. 1
function func11() {
    return function() {
        return 1;
    };
}

function func12() {
    return function() {
        return 2;
    };
}

let sumfunc = func11()() + func12()();
console.log(sumfunc);


// Ex. 2
function func2() {
    return function() {
        return function() {
            return function() {
                return function() {
                    return '!';
                };
            };
        };
    };
}
console.log(func2()()()()());


// Ex. 3
function func3(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        };
    };
}
console.log(func3(2)(3)(4));


// Ex. 4
function func4(num1) {
    return function(num2) {
        return function(num3) {
            return function(num4) {
                return function() {
                    return [num1, num2, num3, num4];
                };
            };
        };
    };
}
console.log(func4(2)(3)(4)(5)());