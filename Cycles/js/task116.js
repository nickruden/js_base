// Ex. 1
let arr = [2, 5, 9, 15, 1, 4];

for (let i of arr) {
    if (i > 3 && i < 10) {
        console.log("1) Элемент массива: " + i);
    }
}


// Ex. 2
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

for (let key in obj) {
    if (obj[key] % 2 !== 0) {
        console.log("2) Элемент объекта: " + obj[key]);
    }
}