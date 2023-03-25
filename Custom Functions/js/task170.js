/* Ex. 1 
function func1() {
	console.log(3);
}
function func2() {
	console.log(5);
}

console.log( func1() + func2() ); */
function func11() {
	return 3;
}
function func12() {
	return 5;
}

console.log( func11() + func12() );


/* Ex. 2 
function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
		return res;
	}
}

console.log(sum([1, 2, 3, 4, 5])); */
function sum1(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
    return res;
}

console.log(sum1([1, 2, 3, 4, 5]));


/* Ex. 3 
let arr = [1, 2, 3, 4, 5];

function func(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	console.log(res);
} */
let arr1 = [1, 2, 3, 4, 5];

function func(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	console.log(res);
}
func(arr1);


/* Ex. 4 
function func1() {
	return 3;
}
function func2() {
	return 5;
}

console.log( func1 + func2 ); */
function func41() {
	return 3;
}
function func42() {
	return 5;
}

console.log( func41() + func42() );


/* Ex. 5 
let sum = sum([1, 2, 3, 4, 5]);
console.log(sum);

function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return elem;
} */
let summ1 = sum5([1, 2, 3, 4, 5]);
console.log(summ1);

function sum5(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum;
}


/* Ex. 6 
let res = sum([1, 2, 3, 4, 5]);
console.log(res);

function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
} */
let res1 = sum6([1, 2, 3, 4, 5]);
console.log(res1);

function sum6(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
    return sum;
}


/* Ex. 7 
function add(num) {
	if (num <= 9) {
		return '0' + num;
	}
} */
function add(num) {
	if (num <= 9) {
		return '0' + num;
	} else {
        return num;
    }
}
console.log(add(21));


/* Ex. 8 
let arr = [1, 2, 3, 4, 5];
let sum = sum(arr);
console.log(sum);

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res;
} */
let arr2 = [1, 2, 3, 4, 5];
let summ2 = sum8(arr2);
console.log(summ2);

function sum8(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res;
}


/* Ex. 9 
let num = 12345;
let res = getDigitsSum(num);
console.log(res);

function getDigitsSum(num) {
	let arr = num.split('');
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum;
} */
let num = 12345;
let res2 = getDigitsSum(num);
console.log(res2);

function getDigitsSum(num) {
	let arr = String(num).split('');
	let sum = 0;
	
	for (let elem of arr) {
		sum += Number(elem);
	}
	
	return sum;
}


/* Ex. 10 
console.log(isPrime(13)); // должен вывести true

function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i !== 0) {
			return true;
		} else {
			return false;
		}
	}
} */
console.log(isPrime(13)); // должен вывести true

function isPrime(num) {
	for (let i = 2; i < num - 1; i++) {
		if (num % i !== 0) {
			return true;
		} else {
			return false;
		}
	}
}