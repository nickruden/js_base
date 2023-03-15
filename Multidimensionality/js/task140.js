// Ex. 1 [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
let arr1 = [];

for (let i = 0; i <= 2; i++) {
    arr1[i] = []

    for (let j = 0; j <= 4; j++) {
        arr1[i].push(j + 1);
    }
}
console.log("1) [" + arr1 + "]");


/* Ex. 2 [
	['x', 'x', 'x', 'x'],
	['x', 'x', 'x', 'x'],
	['x', 'x', 'x', 'x']
] */
let arr2 = [];

for (let i = 0; i <= 2; i++) {
    arr2[i] = [];

    for (let j = 0; j <= 3; j++) {
        arr2[i].push('x');
    }
}
console.log("2) [" + arr2 + "]");


/* Ex. 3 [
	[
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
	],
	[
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
	],
	[
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
	],
] */
let arr3 = []

for (let i = 0; i <= 2; i++) {
    arr3[i] = []

    for (let j = 0; j <= 1; j++) {
        arr3[i][j] = []

        for (let k = 0; k <= 4; k++) {
            arr3[i][j].push(k + 1);
        }
    }
}
console.log("3) [" + arr3 + "]");