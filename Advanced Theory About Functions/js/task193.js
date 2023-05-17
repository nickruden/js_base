// Ex. 1 
function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	};
	
	return result;
};

function cube(num) {
	return num ** 3;
};

let result = each([1, 2, 3, 4, 5], cube);

console.log(result);
