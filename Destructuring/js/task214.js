// Ex. 1 
function func1() {
	return (new Date).getMonth();
}

function func2() {
	return (new Date).getFullYear();
}

let arr = [, , 21]
let [year = func2(), month = func1(), day] = arr;