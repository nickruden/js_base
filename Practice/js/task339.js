// Ex. 1, 2 
let table = document.querySelector('#table');
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

for (let i of arr) {
	let tr = document.createElement('tr');

	for (let j of i) {
		let td = document.createElement('td');
		td.textContent = j ** 2;

		tr.appendChild(td);
	};

	table.appendChild(tr);
}; 
