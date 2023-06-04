// Ex. 1 
function createTableByArr(arr) {
	let table = document.createElement('table');
	
	// тут создадим таблицу с rows рядами и cols колонками
	for (let rows of arr) {
    let tr = document.createElement('tr');

		for (let cols of rows) {
			let td = document.createElement('td');
            td.textContent = cols;
            tr.appendChild(td);
		};

    table.appendChild(tr);
	};
	
	return table;
};

let div = document.querySelector('#elem');

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let table = createTableByArr(arr);

div.appendChild(table); 
