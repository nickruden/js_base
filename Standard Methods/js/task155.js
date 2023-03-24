/* Ex. 1 
let num = 12345;
let arr = num.split('');

let sum = 0;
for (let digit of arr) {
	sum += digit;
}

console.log(sum); */
let num1 = 12345;
let arr1 = String(num1).split('');

let sum1 = 0;
for (let digit of arr1) {
	sum1 += Number(digit);
}

console.log(sum1);


/* Ex. 2
let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
	sum += digit;
}

console.log(sum); */
let num2 = 12345;
let arr2 = String(num2).split('');

let sum2 = 0;
for (let digit of arr2) {
	sum2 += Number(digit);
}

console.log(sum2);


/* Ex. 3
let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
	sum = Number(digit);
}

console.log(sum); // почему-то выводит 5, а не 15 */
let num3 = 12345;
let arr3 = String(num3).split('');

let sum3 = 0;
for (let digit of arr3) {
	sum3 += Number(digit);
}

console.log(sum3);


/* Ex. 4
let num = 12345;
let arr = String(num).split('');

let sum = '';
for (let digit of arr) {
	sum += Number(digit);
}

console.log(sum); */
let num4 = 12345;
let arr4 = String(num4).split('');

let sum4 = 0;
for (let digit of arr4) {
	sum4 += Number(digit);
}

console.log(sum4);


/* Ex. 5
let num = 12345;
let arr = String(num).split('');

let prod = 0;
for (let digit of arr) {
	prod *= digit;
}

console.log(prod); */
let num5 = 12345;
let arr5 = String(num5).split('');

let prod = 0;
for (let digit of arr5) {
	prod *= Number(digit);
}

console.log(prod);