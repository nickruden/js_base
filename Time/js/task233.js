// Ex. 1 
function isLeap(year) {
    let date = new Date(year, 2, 0);
    if (date.getDate() == 29) {
        return true;
    } else {
        return false;
    };
};

console.log(isLeap(2020)); 
