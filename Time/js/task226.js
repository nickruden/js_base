// Ex. 1 
let date = new Date();
let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
let month = date.getMonth();

console.log(`Название текущего месяца - ${months[month]}`);