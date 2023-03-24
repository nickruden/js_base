// Ex. 1 
console.log("Упражнение №1. " + Math.pow(2, 10));

// Ex. 2
console.log("Упражнение №2. " + Math.sqrt(245));

// Ex. 3
let arr1 = [4, 2, 5, 19, 13, 0, 10];
let arr2 = [];
let summarr2 = 0;

for (let i of arr1) {
    arr2 += Math.pow(i, 3);
    for (let j of arr2) {
        summarr2 += j;
    }
}
console.log("Упражнение №3. " + Math.sqrt(summarr2));

// Ex. 4
let numsqrt4 = Math.sqrt(379);
console.log("Упражнение №4.1 " + Math.round(numsqrt4));
console.log("Упражнение №4.2 " + numsqrt4.toFixed(1));
console.log("Упражнение №4.3 " + numsqrt4.toFixed(2));

// Ex. 5
let numsqrt5 = Math.sqrt(587);
let meth = {'ceil': Math.ceil(numsqrt5), 'floor': Math.floor(numsqrt5)};
console.log(meth);

// Ex. 6
console.log(Math.max(4, -2, 5, 19, -130, 0, 10) +', ' + Math.min(4, -2, 5, 19, -130, 0, 10));

// Ex. 7
function randomnum1(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

console.log(randomnum1(1, 100));

// Ex. 8
let arr8 = [];

function randomnum2(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 0; i <= 10; i++) {
    arr8[i] = randomnum1(1, 100);
}
console.log(arr8);

// Ex. 9 
let a = 10;
let b = 4;
console.log(Math.abs(a-b))