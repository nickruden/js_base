// Ex. 1
let employees1 = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

for (let employee of employees1) {
	console.log("1) " + employee.name + ': ' + employee.salary); 
}


// 2
let employees2 = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
let summ1 = 0;
for (let item of employees2) {
    summ1 += item.salary;
};
console.log("2) " + summ1)


// 3
let employees3 = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];
let summ2 = 0;
for (let item of employees3) {
    if (item.age >= 30) {
        summ2 += item.salary
    };
};
console.log("3) " + summ2);