// Ex. 1 
let date = new Date();
let day_end = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);

console.log('До конца текущего дня осталось - ' + ((day_end.getHours() - date.getHours()) + 1) + ' часов');
