/* Ex. 1 
let result = every([1, 2, 3, 4, 5], function(elem) {
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
}); */

let result1 = every([1, 2, 3, 4, 5], elem => elem > 0);


/* Ex. 2 
let result = every([1, 2, 3, 4, 5], function(elem, index) {
	if (elem * index > 10) {
		return true;
	} else {
		return false;
	}
}); */

let result2 = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);


/* Ex. 3 
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = each(arr, function(elem, index) {
	if (elem * index > 10) {
		return true;
	} else {
		return false;
	}
}); */

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result3 = every(arr, (elem, index) => elem * index > 10);
