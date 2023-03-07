// Ex. 1
let arr1 = [];

for (let i = 1; i <= 10; i++) {
    arr1.push(i);
}
console.log("Упражнение №1. Массив чисел от 1 до 10: [" + arr1 + "]");


// Ex. 2
let arr2 = [];

for (let i = 1; i <= 10; i++) {
    arr2.push('x');
}
console.log("Упражнение №2. Массив с 10-ю буквами 'x': [" + arr2 + "]");


// Ex. 3
let arr31 = [21, 49, -10, 15, 64];
let arr32 = [];

for (let i = 0; i <= arr31.length - 1; i++) {
    if (arr31[i] >= 0) {
        arr32.push(arr31[i]);
    }
}
console.log("Упражнение №3. Перебор массива чисел и запись только положительных из них: [" + arr32 + "]");