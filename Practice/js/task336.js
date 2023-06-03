// Ex. 1, 2, 3, 4
let elem = document.querySelector('#elem');
let arr = [1, 2, 3, 4, 5];

for (let i of arr) {
	let li = document.createElement('li');
	li.textContent = i;

	li.addEventListener('click', function func() {
		console.log(li.textContent);
		li.textContent += '!';

		li.removeEventListener('click', func);
	});
	elem.appendChild(li);
}; 
