// Ex. 1, 2, 3 
let table1 = document.querySelector('#table1');

for (let i = 0; i < 10; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i < 5; i++) {
		let td = document.createElement('td');
		td.textContent = 'x'
		tr.appendChild(td);
	}
	
	table1.appendChild(tr);
};


// Ex. 4 
let inp2_1 = document.querySelector('#inp2_1');
let inp2_2 = document.querySelector('#inp2_2');
let btn2 = document.querySelector('#btn2');
let table2 = document.querySelector('#table2');

btn2.addEventListener('click', () => {
	for (let i = 0; i < inp2_1.value; i++) {
		let tr = document.createElement('tr');
		tr.style.border = '1px solid black';
		
		for (let i = 0; i < inp2_2.value; i++) {
			let td = document.createElement('td');
			td.textContent = 'x'
			tr.appendChild(td);
		}
		
		table2.appendChild(tr);
	};
}); 
