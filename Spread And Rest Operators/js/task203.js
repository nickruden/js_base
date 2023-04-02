// Ex. 1 
let arr1 = [1, 2, 3, 4, 5];
function func1(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}
console.log(func1(...arr1));


// Ex. 2  В консоль выведется число 260 
function func2(n1, n2, n3, n4, n5, n6, n7, n8) {
	return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
}

console.log( func2(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]) );


// Ex. 3 
let arr3 = [1, 2, 3, 4, 5];
console.log(Math.min(...arr3));