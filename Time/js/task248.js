let date = new Date();

// Ex. 1 
let date_center_day = new Date(date.getFullYear(), date.getMonth(), 12);

if (date > date_center_day) {
    console.log('Полдень уже был');
} else if (date_center_day > date) {
    console.log('Полдня ещё не было');
} else {
    console.log('Сейчас полдень');
};


// Ex. 2 
let day_15_month = new Date(date.getFullYear(), date.getMonth(), 15);

if (date < day_15_month) {
    console.log('Половина этого месяца ещё не прошла');
} else if (date > day_15_month) {
    console.log('Половина этого месяца уже прошла');
} else {
    console.log('Сейчас ровно половина этого месяца');
};
