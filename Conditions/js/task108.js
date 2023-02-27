/* Ex. 1
let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
} */

let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}


/* Ex. 2
let num21 = '1';
let num22 = '2';

if (num21 + num22 === 3) {
	console.log('+++');
} else {
	console.log('---');
} */

let num21 = '1';
let num22 = '2';

if (Number(num21) + Number(num22) === 3) {
	console.log('+++');
} else {
	console.log('---');
}


/* Ex. 3
let num31 = '1';
let num32 = '2';

if (Number(num31 + num32) === 3) {
	console.log('+++');
} else {
	console.log('---');
} */

let num31 = '1';
let num32 = '2';

if (Number(num31) + Number(num32) === 3) {
	console.log('+++');
} else {
	console.log('---');
}


/* Ex. 4
let num4 = 123;

if (num4[0] === 1) {
	console.log('+++');
} else {
	console.log('---');
} */

let num4 = 123;

if (num4[0] = 1) {
	console.log('+++');
} else {
	console.log('---');
}


/* Ex. 5
let num5 = 123;

if (String(num5[0]) === 1) {
	console.log('+++');
} else {
	console.log('---');
} */

let num5 = 123;

if (num5[0] = 1) {
	console.log('+++');
} else {
	console.log('---');
}


/* Ex. 6
let num6 = 123;

if (String(num6)[0] === 1) {
	console.log('+++');
} else {
	console.log('---');
} */

let num6 = 123;
let str6 = String(num6);

if (str6[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}


/* Ex. 7
let num7 = 123;
let first7 = String(num7)[0];

if (first7 === 1) {
	console.log('+++');
} else {
	console.log('---');
} */

let num7 = 123;
let first7 = String(num7);

if (first7[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}


/* Ex. 8
let num8 = 12;

if (num8.length === 2) {
	console.log('+++');
} else {
	console.log('---');
} */

let num8 = 12;

if (String(num8).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}



/* Ex. 9
let num9 = 12;
let str9 = Number(str9);

if (str9.length === 2) {
	console.log('+++');
} else {
	console.log('---');
} */

let num9 = 12;
let str9 = String(num9);

if (str9.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}


/* Ex. 10
let num10 = 12;

if (String(num10.length) === 2) {
	console.log('+++');
} else {
	console.log('---');
} */

let num10 = 12;

if (String(num10).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}


/* Ex. 11
let num11 = 12;

if (String(num11).length === String(2)) {
	console.log('+++');
} else {
	console.log('---');
} */

let num11 = 12;

if (String(num11).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}


/* Ex. 12
let num12 = 12;

if (String(num12).lenght === 2) {
	console.log('+++');
} else {
	console.log('---');
} */

let num12 = 12;

if (String(num12).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}


/* Ex. 13
let num13 = '123033'; // берем в кавычки, чтобы обращаться к цифрам

let sum1 = num[0] + num[1] + num[2];
let sum2 = num[3] + num[4] + num[5];

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
} */

let num13 = '123033'; // берем в кавычки, чтобы обращаться к цифрам
let str13 = Number(num13);

let sum1 = num13[0] + num13[1] + num13[2];
let sum2 = num13[3] + num13[4] + num13[5];

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}