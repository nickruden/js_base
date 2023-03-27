// Ex. 1  В консоль выведется цифра 1 
function test1() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
	
	func();
}

test1();


// Ex. 2  В консоль ничего не выведется 
function test2() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
}

test2();


// Ex. 3  В консоль ничего не выведется 
function test3() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
	
	func();
}


// Ex. 4  В консоль выведется сначала цфира 1, а потом цифра 2 
function test4() {
	let num;
	
	function func() {
		console.log(num);
	}
	
	num = 1
	func();
	
	num = 2
	func();
}

test4();


// Ex. 5  В консоль выведется цифра 3 
function test5(num1, num2) {
	function func() {
		console.log(num1 + num2);
	}
	
	func();
}

test5(1, 2);


// Ex. 6  В консоль выведется цифра 4 
function test6(num1, num2) {
	function func() {
		console.log(num1 + num2);
	}
	
	num1 = 2;
	func();
}

test6(1, 2);


// Ex. 7  В консоль выведется цифра 1 
function test7(num) {
	function func(localNum) {
		console.log(localNum);
	}
	
	func(num);
}

test7(1);


// Ex. 8  В консоль выведется цифра 2 
function test8(num) {
	function func(localNum) {
		console.log(localNum);
	}
	
	func(num + 1);
}

test8(1);


// Ex. 9  В консоль выведется цифра 1 
function test9(num) {
	function func(localNum) {
		console.log(num);
	}
	
	func(num + 1);
}

test9(1);


// Ex. 10  В консоль выведется цифра 1 
function test10(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	console.log(num);
}

test10(1);


// Ex. 11  В консоль ничего не вывдется, будет ошибка
function test11(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	console.log(localNum);
}

test11(1);


// Ex. 12  В консоль выведется цифра 2 
function test12(num) {
	function func(localNum) {
		num = 2;
	}
	
	func(num);
	console.log(num);
}

test12(1);

// Ex. 13  В консоль выведется цифра 1 
function test13(num) {
	function func(num) {
		console.log(num);
	}
	
	func(num);
}

test13(1);


// Ex. 14  В консоль выведется цифра 1 
function test14(num) {
	function func(num) {
		num = 2;
	}
	
	func(num);
	console.log(num);
}

test14(1);


// Ex. 15  В консоль выведется цифра  2 
function test15(num) {
	function func(num) {
		console.log(num);
	}
	
	num = 2;
	func(num);
}

test15(1);


// Ex. 16  В консоль выведется цифра 1
function test16(num) {
	function func(num) {
		console.log(num);
	}
	
	func(num);
	num = 2;
}

test16(1);