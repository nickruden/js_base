// Ex. 1 
let date = new Date();
let last_date = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1, 12);

console.log('Между вчерашнем полднем и теущим моментом времени прошло - ' + Math.round((date - last_date) / 1000 / 60 / 60) + ' часов');
