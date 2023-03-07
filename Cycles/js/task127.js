// Ex. 1
let arr1 = [1, 2, 3, 4, 5];

for (let i = 0; i <= arr1.length - 1; i++) {
    arr1[i] = arr1[i] ** 2;
}
console.log("Упражнение №1. Каждый элемент массива, возведённый в квадрат: [" + arr1 + "]");


// Ex. 2
let arr2 = [5, 6, 7, 8, 9];

for (let i = 0; i <= arr2.length - 1; i++) {
    arr2[i] -= 1;
}
console.log("Упражнение №2. Каждый элемент массива уменьшен на 1: [" + arr2 + "]");


// Ex. 3
let arr3 = [1, 2, 3, 4, 5];

for (let i = 0; i <= arr3.length - 1; i++) {
    arr3[i] += 10;
}
console.log("Упражнение №3. Каждый элемент массива + 10: [" + arr3 + "]");