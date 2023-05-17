// Ex. 1 
let date_year = new Date();
let date = new Date(date_year.getFullYear(), 11, 31);

let week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log('31 декабря текущего года это день недели - ' + week[date.getDay()]);
