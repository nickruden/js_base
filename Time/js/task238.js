// Ex. 2 
let date = new Date();
let date_month = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());

let week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log('В прошлом месяце, сегодняшний день месяца был день недели - ' + week[date_month.getDay()]);
