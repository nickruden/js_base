// Ex. 1 
function checkDate(year, month, day) {
    let date = new Date(year, month, day);
    if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
        return true;
    } else {
        return false;
    };
};

console.log(checkDate(2025, 0, 31)); // выведет true
console.log(checkDate(2025, 0, 32)); // выведет false