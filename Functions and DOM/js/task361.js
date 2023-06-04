// Ex. 1 
function createTable(rows, cols) {
	let table = document.createElement('table');
	
	// тут создадим таблицу с rows рядами и cols колонками
	for (let i = 0; i < rows; i++) {
    let tr = document.createElement('tr');

		for (let j = 0; j < cols; j++) {
			let td = document.createElement('td');
            tr.appendChild(td);
		};

    table.appendChild(tr);
	};
	
	return table;
};

let div1 = document.querySelector('#elem1');

let table1 = createTable(3, 4);
table1.style.color = 'red';

div1.appendChild(table1);


// Ex. 2 
let div2 = document.querySelector('#elem2');

let table2 = createTable(4, 5);

div2.append(table2); 
