/* Ex. 1
let key = 'x';

let obj = {
	key: 1,
	y: 2,
	z: 3
}; */
let key = 'x';

let obj1 = {
	[key]: 1,
	y: 2,
	z: 3
};


// Ex. 2
let key1 = 'x';
let key2 = 'y';
let key3 = 'z';
let obj2 = {
	[key1]: 1,
	[key2]: 2,
	[key3]: 3
};
console.log(obj2)