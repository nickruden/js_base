// Ex. 1 
let tds = document.querySelectorAll('#table td');
let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
	for (let td of tds) {
		td.textContent *= 2;
	};
}); 
