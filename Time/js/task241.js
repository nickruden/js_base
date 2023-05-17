// Ex. 1 
let date = new Date();
let day_start = new Date(date.getFullYear(), date.getMonth(), date.getDate());

console.log('Между текущем моментом времени и началом этого же дня прошло - ' + (date.getHours() - day_start.getHours()) + ' часов');
