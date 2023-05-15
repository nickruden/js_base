// Ex. 1 
let date = new Date(2025, 0, 1);
let timestamp_date = date.getTime();

console.log(`На момент наступления ${date.getFullYear()}/0${date.getMonth() + 1}/0${date.getDate()} с 1-го января 1970 года пройдёт ${timestamp_date} миллисекунд`);