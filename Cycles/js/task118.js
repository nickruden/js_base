// Ex. 1
let arr1 = [2, 5, 9, 3, 1, 4];
let sum1 = 0;

for (let i of arr1) {
    sum1 += i;
}
console.log("Упражнение №1. Сумма элементов массива равна: " + sum1);


// Ex. 2
let arr2 = [2, 5, 9, 3, 1, 4];
let sum2 = 0;

for (let i of arr2) {
    if (i % 2 == 0) {
        sum2 += i;
    }
}
console.log("Упражнение №2. Сумма элементов массива, которые являются чётными числами, равна: " + sum2);


// Ex. 3
let arr3 = [2, 5, 9, 3, 1, 4];
let sum3 = 0;

for (let i of arr3) {
    sum3 += i**2;
}
console.log("Упражнение №3. Сумма квадратов элементов массива равна: " + sum3);


// Ex. 4
let arr4 = [2, 5, 9, 3, 1, 4];
let mul = 1;

for (let i of arr4) {
    mul *= i;
}
console.log("Упражнение №4. Произведение элементов массива: " + mul);