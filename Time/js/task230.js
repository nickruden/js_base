// Ex. 1 
let date1 = new Date(2000, 8, 1);
let date2 = new Date(2010, 1, 15);

let diff_dates = date2 - date1;
console.log(`С ${date1.getFullYear()}/0${date1.getMonth() + 1}/0${date1.getDate()} по ${date2.getFullYear()}/0${date2.getMonth() + 1}/${date2.getDate()} прошло ${diff_dates} миллисекунд`); 


// Ex. 2 
let diff_in_days = diff_dates / 1000 / 60 / 60 / 24;
console.log(`С ${date1.getFullYear()}/0${date1.getMonth() + 1}/0${date1.getDate()} по ${date2.getFullYear()}/0${date2.getMonth() + 1}/${date2.getDate()} прошло ${Math.round(diff_in_days)} дня`); 


// Ex. 3 
let diff_in_months = diff_dates / 1000 / 60 / 60 / 24 / 30;
console.log(`С ${date1.getFullYear()}/0${date1.getMonth() + 1}/0${date1.getDate()} по ${date2.getFullYear()}/0${date2.getMonth() + 1}/${date2.getDate()} прошло ${Math.round(diff_in_months)} месяцев`); 


// Ex. 3 
let diff_in_years = diff_dates / 1000 / 60 / 60 / 24 / 30 / 12;
console.log(`С ${date1.getFullYear()}/0${date1.getMonth() + 1}/0${date1.getDate()} по ${date2.getFullYear()}/0${date2.getMonth() + 1}/${date2.getDate()} прошло ${Math.round(diff_in_years)} лет`); 
