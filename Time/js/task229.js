// Ex. 1 
let date1_1 = new Date(1988, 2, 1);
let date1_2 = new Date(2000, 0, 10);

let diff_dates1 = date1_2.getTime() - date1_1.getTime();
let diff_days = diff_dates1 / 1000 / 60 / 60 / 24;
console.log(`С ${date1_1.getFullYear()}/0${date1_1.getMonth() + 1}/0${date1_1.getDate()} по ${date1_2.getFullYear()}/0${date1_2.getMonth() + 1}/0${date1_2.getDate()} прошло ${diff_days} дня`);


// Ex. 2 
let date2_1 = new Date(2004, 1, 22);
let date2_2 = new Date();

function zero(num) {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    };
};

let diff_dates2 = date2_2.getTime() - date2_1.getTime();
let diff_months = diff_dates2 / 1000 / 60 / 60 / 24 / 30;
console.log(`С ${date2_1.getFullYear()}/0${date2_1.getMonth() + 1}/${date2_1.getDate()} по ${date2_2.getFullYear()}/${zero(date2_2.getMonth() + 1)}/${zero(date2_2.getDate())} прошло ${Math.round(diff_months)} месяца`);