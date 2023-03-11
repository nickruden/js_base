// Ex. 1
let arr1 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let count13 = 0;

for (let i of arr1) {
    if (i == 3) {
        count13 += 1;
    }
}
console.log("Количество цифр 3 в массиве [" + arr1 + "] равняется " + count13);


// Ex. 2
let arr2 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let count23 = 0;
let count22 = 0;

for (let i of arr2) {
    if (i == 3) {
        count23 += 1;
    } 
    else if (i == 2) {
        count22 += 1;
    }
}
console.log(`Количество цифр 3 в массиве [ ${arr2} ] равняется ${count23}
Количество цифр 2 в массиве [ ${arr2} ] равняется ${count22}`);