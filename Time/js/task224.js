// Ex. 1 
function zero(num) {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}

let date = new Date();
let today = date.getFullYear() + '-' + zero(date.getMonth()) + '-' + zero(date.getDate());

let arrtoday = today.split('-').reverse().join('.');
console.log(arrtoday);