// Ex. 1 
function func1() {
	console.log('1');
}

function func2() {
	console.log('2');
}

function func3() {
	console.log('3');
}

let p = document.querySelector('#wrapper__elem');
p.addEventListener('click', func1);
p.addEventListener('click', func2);
p.addEventListener('click', func3);
