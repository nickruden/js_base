// /* Ex. 1
// for (let i = 0; i > 10; i++) {
// 	console.log(i);
// } */ 
// for (let i = 0; i <= 10; i++) {
// 	console.log(i);
// }


// /* Ex. 2 
// for (let i = 10; i > 0; i++) {
// 	console.log(i);
// } */
// for (let i = 10; i >= 0; i++) {
// 	console.log(i);
// }


// /* Ex. 3 
// for (let i = 10; i == 0; i--) {
// 	console.log(i);
// } */
// for (let i = 10; i >= 0; i--) {
// 	console.log(i);
// }


// /* Ex. 4 
// let i = 0;

// while (i >= 10) {
// 	console.log(i);
// 	i++;
// } */
// let i = 0;

// while (i <= 10) {
// 	console.log(i);
// 	i++;
// }


// /* Ex. 5 
// let res;

// for (let i = 1; i <= 10; i++) {
// 	res += i;
// }

// console.log(res); */
// let res5 = 0;

// for (let i = 1; i <= 10; i++) {
// 	res5 += i;
// }

// console.log(res5);


// /* Ex. 6 
// let res = 0;

// for (let i = 1; i <= 10; i++) {
// 	res *= i;
// }

// console.log(res); */
// let res6 = 1;

// for (let i = 1; i <= 10; i++) {
// 	res6 *= i;
// }

// console.log(res6);


// /* Ex. 7 
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let elem of arr) {
// 	sum += elem;
// }

// console.log(sum); // должно вывести 15 */
// let arr7 = ['1', '2', '3', '4', '5'];
// let sum7 = 0;

// for (let elem of arr7) {
// 	sum7 += Number(elem);
// }

// console.log(sum7); // должно вывести 15


// /* Ex. 8 
// let arr = ['1', '2', '3', '4', '5'];
// let sum = '';

// for (let elem of arr) {
// 	sum += +elem;
// }

// console.log(sum); // должно вывести 15 */
// let arr8 = ['1', '2', '3', '4', '5'];
// let sum8 = 0;

// for (let elem of arr8) {
// 	sum8 += Number(elem);
// }

// console.log(sum8); // должно вывести 15


// /* Ex. 9 
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let elem of arr) {
// 	sum = +elem;
// }

// console.log(sum); // должно вывести 15 */
// let arr9 = ['1', '2', '3', '4', '5'];
// let sum9 = 0;

// for (let elem of arr9) {
// 	sum9 = Number(elem);
// }

// console.log(sum9); // должно вывести 15


// /* Ex. 10 
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i <= arr.length; i++) {
// 	sum += +arr[i];
// }

// console.log(sum); // почему-то выводит NaN */
// let arr10 = ['1', '2', '3', '4', '5'];
// let sum10 = 0;

// for (let i = 0; i <= arr10.length; i++) {
// 	sum10 += Number(arr10[i]);
// }

// console.log(sum10); // почему-то выводит NaN


/* Ex. 11 
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length - 1; i++) {
	sum += +arr[i];
}

console.log(sum); // почему-то выводит не 15 */
let arr11 = ['1', '2', '3', '4', '5'];
let sum11 = 0;

for (let i = 0; i < arr11.length; i++) {
	sum11 += +arr11[i];
}

console.log(sum11); // почему-то выводит не 15


/* Ex. 12 
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
	sum += +i;
}

console.log(sum); // почему-то выводит не 15 */
let arr12 = ['1', '2', '3', '4', '5'];
let sum12 = 0;

for (let i = 0; i < arr12.length; i++) {
	sum12 += +arr12[i];
}

console.log(sum12); // почему-то выводит не 15


/* Ex. 13 
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	elem = elem ** 2;
}

console.log(arr); */
let arr13 = [1, 2, 3, 4, 5];
let arr132 = [];

for (let elem of arr13) {
	elem = elem ** 2;
	arr132.push(elem);
}

console.log(arr132);


/* Ex. 14 
let arr;

for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr); */
let arr14 = [];

for (let i = 1; i <= 5; i++) {
	arr14.push(i);
}

console.log(arr14);


/* Ex. 15 
let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let elem in obj) {
	sum += elem;
}

console.log(sum); */
let obj15 = {a: 1, b: 2, c: 3};
let sum15 = 0;

for (let elem in obj15) {
	sum15 += obj15[elem];
}

console.log(sum15);


/* Ex. 16 
let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let key in obj) {
	sum = +obj.key;
}

console.log(sum); */
let obj16 = {a: 1, b: 2, c: 3};
let sum16 = 0;

for (let key in obj16) {
	sum16 += obj16[key];
}

console.log(sum16);


/* Ex. 17 
let arr = [1, 2, 3, 4, 5];
let res = '';

for (let elem of arr) {
	if (elem === 3) {
		res = '+++';
	} else {
		res = '---';
	}
}

console.log(res); */
let arr17 = [1, 2, 3, 4, 5];
let res17 = '';

for (let elem of arr17) {
	if (elem == 3) {
		res17 = '+++';
		break;
	} else {
		res17 = '---';
	}
}

console.log(res17);


/* Ex. 18 
for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr); */
let arr18 = []

for (let i = 1; i <= 5; i++) {
	arr18.push(i);
}

console.log(arr18);


/* Ex. 19 
let arr = [1, 2, 3, 4, 5];
let res = false;

for (let elem of arr) {
	if (elem === 3) {
		let res = true;
		break;
	}
}

console.log(res); */
let arr19 = [1, 2, 3, 4, 5];
let res19 = false;

for (let elem of arr19) {
	if (elem === 3) {
		res19 = true;
		break;
	}
}

console.log(res19);


/* Ex. 20 
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem % 2 = 0) {
		console.log(elem);
	}
} */
let arr20 = [1, 2, 3, 4, 5];

for (let elem of arr20) {
	if (elem % 2 == 0) {
		console.log(elem);
	}
}


/* Ex. 21 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let elem of arr) {
	if (elem % 2 != 0) {
		res.push(elem);
	}
}

console.log(res); */
let arr21 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr212 = []

for (let elem of arr21) {
	if (elem % 2 != 0) {
		arr212.push(elem);
	}
}

console.log(arr212);