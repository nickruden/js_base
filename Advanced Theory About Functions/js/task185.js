// Ex. 1
function test1(func11, func12, func13) {
    console.log(func11() + func12() + func13());
}
test1(function() { return 1 }, function() { return 2 }, function() { return 3 });

// Ex. 2
function test2(func21, func22, func23) {
    return func21() + func22() + func23();
}

// Ex. 3 
function func31() {
    return 1;
}
function func32() {
    return 2;
}
function func33() {
    return 3;
}
console.log(test2(func31, func32, func33));

// Ex. 4
let func41 = function() {
    return 1;
};
let func42 = function() {
    return 2;
};
let func43 = function() {
    return 3;
};
console.log(test2(func41, func42, func43));

// Ex. 5
function test5(func5) {
	console.log(func5(3));
}
test5( function(num) { return num ** 3 });

// Ex. 6 
test5( function func6(num) { return num ** 3 });

// Ex. 7
let func7 = function(num) { return num ** 3 }
test5(func7);

// Ex. 8 
function test8(func8) {
	console.log(func8(2, 3));
}
test8(function(num1, num2) { return num1 + num2 });

// Ex. 9 
function test9(num9, func91, func92) {
	return func91(num9) + func92(num9);
}
console.log(test9(3, function(num9) { return num9 ** 2 }, function(num9) { return num9 ** 3 }));

// Ex. 10
function test10(arrnum10, func10) {
	for (let i = 0; i < arrnum10.length; i++) {
		arrnum10[i] = func10(arrnum10[i]);
	}
	
	return arrnum10;
}

let resfunc10 = test10([1, 2, 3, 4, 5], function(num) {
	return num ** 2;
});

console.log(resfunc10);

// Ex. 11 
let resfunc11 = test10([1, 2, 3, 4, 5], function(num) {
	return num ** 3;
});

console.log(resfunc11);