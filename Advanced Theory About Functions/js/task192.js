function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	};
	
	return result;
};

// Ex. 1 
let arr = [1, 2, 3, 4, 5];

let result1 = each(arr, function(elem) {
    return elem * 2;
});

console.log(result1);


// Ex. 2 
let arr_str = ['abc', 'def', 'ghi'];

let result2 = each(arr_str, function(elem) {
    return elem.split('').reverse().join('');
});

console.log(result2);


// Ex. 3 
let arr_str2 = ['abc', 'def', 'ghi'];

let result3 = each(arr_str2, function(elem) {
    return elem[0].toUpperCase() + elem.slice(1);
});

console.log(result3);
