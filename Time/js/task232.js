// Ex. 1 
function last_day_month(month, year) {
    let date = new Date(year, month + 1, 0);
    return date;
}
console.log(last_day_month(11, 2000));


// Ex. 2 
let date = new Date(2025, 5, 0)
console.log(date);
