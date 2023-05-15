let date = new Date();

// Ex. 1 
let weeks_day = date.getDay();
console.log(`Сегодня день недели номер ${weeks_day} (по меркам js, конечно же)`);


// Ex. 2 
function day_type(day_number) {
    if (day_number == 0 && day_number == 6) {
        return 'Сегодня выходной день';
    } else {
        return 'Сегодня рабочий день';
    };
};
console.log(day_type(weeks_day));


// Ex. 3 
let count_days = 0
function days_to_sunday(day_number) {
    if (day_number == 0) {
        return 'Сегодня воскресенье';
    } else {
        while (day_number != 6) {
            count_days += 1;
            day_number += 1;
        };
        return count_days + 1;
    };
};

console.log(days_to_sunday(weeks_day));