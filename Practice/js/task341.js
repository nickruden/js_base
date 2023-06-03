// Ex. 1 
let table1 = document.querySelector('#table1');
let btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', () => {
	let tr = document.createElement('tr');

	for (let i = 0; i < 4; i++) {
		let td = document.createElement('td');
		td.textContent = 'text';

		tr.appendChild(td);
	};

	table1.appendChild(tr);
});


// Ex. 2 
let table2 = document.querySelector('#table2');
let btn2 = document.querySelector('#btn2');

btn2.addEventListener("click", function () {
	let trs = table2.querySelectorAll("tr");

	for (let tr2 of trs) {
	  const td2 = document.createElement("td");
	  tr2.appendChild(td2);
	};

	let tr2 = document.createElement("tr");
	for (let i = 0; i < trs[0].children.length; i++) {
	  let td2 = document.createElement("td");
	  tr2.appendChild(td2);
	};

	table2.appendChild(tr2);
}); 
