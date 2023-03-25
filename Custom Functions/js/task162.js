// Ex. 1
function sqrt(num) {
	return Math.sqrt(num);
}

function round1(num) {
	return num.toFixed(3);
}
let result1 = round1(sqrt(2));
console.log(result1);


// Ex. 2
function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
let res1 = sum(sqrt(2), sqrt(3), sqrt(4));
console.log(res1);


// Ex. 3
function round2(num) {
	return num.toFixed(3);
}
let res2 = round2(sum(sqrt(2), sqrt(3), sqrt(4)));
console.log(res2);