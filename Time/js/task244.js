let date = new Date();

// Ex. 1 
let day_start = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0);

console.log('С начала дня до настоящего момента времени прошло - ' + Math.round((date - day_start) / 1000) + ' секунд');


// Ex. 2 
let day_end = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);

console.log('До конца дня осталось - ' + Math.round((day_end - date) / 1000) + ' секунд');


// Ex. 3 
let day_ny = new Date(date.getFullYear() + 1, 0, 1);

console.log("До нового года осталось - " + Math.round((day_ny - date) / 1000 / 60 / 60 / 24)  + ' дней');


// Ex. 4 
let date_start = new Date(date.getFullYear(), 0);
let date_end = new Date(date.getFullYear(), 11);

count = 0
for (let month = date_start.getMonth(); month <= date_end.getMonth(); month++) {
    let date1 = new Date(date.getFullYear(), month, 13);
    if (date1.getDay() == 5) {
        count += 1;
    };
};

console.log('В этом году ' + count + ' пятниц 13');


// Ex. 5 
let year_3_month_back = new Date(date.getFullYear(), date.getMonth() - 3, date.getDate());

console.log('Три месяца назад был ' + year_3_month_back.getFullYear() + ' год');


// Ex. 6 
let last_day_month = new Date(date.getFullYear(), date.getMonth() + 1, 0);
let week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log('Последним днём недели текущего месяц будет - ' + week[last_day_month.getDay()]);


// Ex. 7 
let now_year = new Date(date.getFullYear(), 2, 0);

if (now_year.getDate() == 29) {
    console.log('Этот год високосный');
} else {
    console.log('Этот год невисокосный');
};
