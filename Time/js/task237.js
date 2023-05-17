let date = new Date();
let week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];


// Ex. 1 
let date_year = new Date(date.getFullYear() + 1, 11, 31);
console.log('31 декабря следущего года, будет день недели - ' + week[date_year.getDay()]);


// Ex. 2 
let date_year_next = new Date(date.getFullYear() + 1, date.getMonth(), date.getDate());
console.log('В следующем году, такой же день как сегодня, будет день недели - ' + week[date_year_next.getDay()]);


// Ex. 3 
let date_year_last = new Date(date.getFullYear() - 1, date.getMonth(), date.getDate());
console.log('В прошлом году, такой же день как сегодня, был день недели - ' + week[date_year_last.getDay()]);
