// Ex. 1, 2, 3 
let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
let table = document.querySelector('#table');

for (let i of employees) {
	let tr = document.createElement('tr');

	let td1 = document.createElement('td');
	td1.textContent = i.name;
	td1.addEventListener('click', () => td1.textContent += 1);
	tr.appendChild(td1);

	let td2 = document.createElement('td');
	td2.textContent = i.age;
	td2.addEventListener('click', () => td2.textContent++);
	tr.appendChild(td2);

	let td3 = document.createElement('td');
	td3.textContent = i.salary;
	td3.addEventListener('click', () => td3.textContent = Number(td3.textContent) + Math.round(Number(td3.textContent) * 0.1));
	tr.appendChild(td3);

	table.appendChild(tr);
}; 
