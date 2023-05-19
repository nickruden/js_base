// Ex. 1 
function func1() {
	console.log(1);
}

function func2() {
	console.log(2);
}

let btn1 = document.querySelector('#wrapper__button1');
let btn2 = document.querySelector('#wrapper__button2');

btn1.addEventListener('click', func1);
btn2.addEventListener('click', func2);
