// Ex. 1 
function func(...rest) {
    let summ = 0;

    for (let i of rest) {
        summ += i;
    }

    return summ / 2;
}
console.log(func(1, 2, 3, 4, 5));