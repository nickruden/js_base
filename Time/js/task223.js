// Ex. 1 
let date = new Date();

function zero(num) {
    if ( num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}
console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ' ' + zero(date.getDate()) + '.' + zero(date.getMonth()) + '.' + date.getFullYear()); 
