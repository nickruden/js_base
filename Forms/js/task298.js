/* Ex. 1 
let textarea = document.querySelector('textarea');
let div = document.querySelector('div');

textarea.addEventListener('blur', function() {
	div.textContent = textarea.textContent;
}); */
let textarea = document.querySelector('textarea');
let div1 = document.querySelector('#elem1');

textarea.addEventListener('blur', function() {
	div1.innerHTML = textarea.value;
});


/* Ex. 2 
let checkbox = document.querySelectorAll('#checkbox');
let button = document.querySelectorAll('#button');
let div = document.querySelectorAll('#div');

btn.addEventListener('click', function() {
	if (checkbox.checked) {
		div.value = '111';
	} else {
		div.value = '222';
	}
}); */
let checkbox1 = document.querySelector('input[type="checkbox"]');
let btn2 = document.querySelector('#btn2');
let div2 = document.querySelector('#elem2');

btn2.addEventListener('click', function() {
	if (checkbox1.checked) {
		div2.innerHTML = '111';
	} else {
		div2.innerHTML = '222';
	};
});


/* Ex. 3 
let checkbox = document.querySelector('[type="checkbox"]');
let button = document.querySelector('button');

button.addEventListener('click', function() {
	if (checkbox.checked = true) {
		console.log('+++');
	} else {
		console.log('---');
	}
}); */
let checkbox2 = document.querySelector('#elem3');
let button = document.querySelector('#btn3');

button.addEventListener('click', function() {
	if (checkbox2.checked == true) {
		console.log('+++');
	} else {
		console.log('---');
	}
}); 
