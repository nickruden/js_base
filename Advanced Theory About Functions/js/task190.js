// Ex. 1  В консоль выведется цифра 3 
function test1() {
	let num1 = 1;
	let num2 = 2;
	
	return function() {
		return num1 + num2;
	}
}

let func1 = test1();
console.log(func1());


// Ex. 2  В консоль выведется цифра 3 
function test2() {
	let num1 = 1;
	let num2 = 2;
	
	return function() {
		return num1 + num2;
	}
}

console.log(test2()());


// Ex. 3  В консоль выведется цифра 3 
function test3() {
	let num1 = 1;
	
	return function() {
		return num1 + num2;
	}
}

let num2 = 2;
let func3 = test3();
console.log(func3());


// Ex. 4  В консоль выведется цифра 1 
function test4() {
	let num = 1;
	
	return function() {
		return num;
	}
}

let num4 = 2;
let func4 = test4();
console.log(func4());