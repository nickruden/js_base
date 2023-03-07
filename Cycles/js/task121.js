// Ex. 1
let arr1 = [12, 49, 0, 30, 57];

for (let i of arr1) {
    console.log("1) " + i);
    if (i == 0) {
        console.log("Встретился элемент со значением 0.")
        break;
    }
}


// Ex. 2
let arr2 = [12, 49, 0, 30, -5];
let sum1 = 0;

for (let i = 0; i <= arr2.length - 1; i++) {
    sum1 += arr2[i];
    console.log("2) " + sum1);
    if (i > 0) {
        console.log("Встретился первый отрицательный элемент.")
        break;
    }
}


// Ex. 3
let arr3 = [12, 49, 17, 30, 3];

for (let i = 0; i <= arr3.length - 1; i++) {
    if (arr3[i] == 3) {
        console.log("3) Позиция первого числа 3 в массиве: " + (i + 1));
        break;
    }
}


// Ex. 3
let sum2 = 0;
let i = 0;
let count = 0;

while (sum2 <= 100) {
    i++;
    sum2 += i;
    count += 1;
    if (sum2 > 100) {
        console.log("4) Для того, чтобы получилось число больше 100, нужно сложить: " + count + " целых чисел");
        break;
    }
}