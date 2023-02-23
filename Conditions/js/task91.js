/* Ex. 1
let test11 = true;
let test12 = true;

if (test11 === true && test12 === true) {
	console.log('+++');
} else {
	console.log('---');
} */
let test11 = true;
let test12 = true;

if (test11 && test12) {
	console.log('+++');
} else {
	console.log('---');
}


/* Ex. 2
let test21 = true;
let test22 = true;

if (test21 === true && test22 !== true) {
	console.log('+++');
} else {
	console.log('---');
} */
let test21 = true;
let test22 = true;

if (test21 && !test22) {
	console.log('+++');
} else {
	console.log('---');
}

/* Ex. 3
let test31 = true;
let test32 = true;

if (test31 !== true && test32 !== true) {
	console.log('+++');
} else {
	console.log('---');
} */
let test31 = true;
let test32 = true;

if (!test31 && !test32) {
	console.log('+++');
} else {
	console.log('---');
}


/* Ex. 4
let test41 = true;
let test42 = true;

if (test41 !== false && test42 === true) {
	console.log('+++');
} else {
	console.log('---');
} */
let test41 = true;
let test42 = true;

if (test41 && test42) {
	console.log('+++');
} else {
	console.log('---');
}


/* Ex. 5
let test51 = true;
let test52 = true;
let test53 = true;

if (test51 === true && test52 === true && test53 === true) {
	console.log('+++');
} else {
	console.log('---');
} */
let test51 = true;
let test52 = true;
let test53 = true;

if (test51 && test52 && test53) {
	console.log('+++');
} else {
	console.log('---');
}


/* Ex. 6
let test61 = true;
let test62 = true;
let test63 = true;

if (test61 === true || test62 === true && test63 === true) {
	console.log('+++');
} else {
	console.log('---');
} */
let test61 = true;
let test62 = true;
let test63 = true;

if (test61 || test62 && test63) {
	console.log('+++');
} else {
	console.log('---');
}


/* Ex. 7
let test71 = true;
let test72 = true;
let test73 = true;

if (test71 === true || test72 === false && test73 === false) {
	console.log('+++');
} else {
	console.log('---');
} */
let test71 = true;
let test72 = true;
let test73 = true;

if (test71 || !test72 && !test73) {
	console.log('+++');
} else {
	console.log('---');
}