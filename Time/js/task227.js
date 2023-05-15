// Ex. 1 
let date = new Date(2004, 1, 22);
let birthday = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(`День недели на мой день рождения - ${days[birthday]}`);