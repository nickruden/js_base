// Ex. 1
function checkarr1 (arr) {
    for (let i of arr1) {
        if (i % 2 != 0) {
            return false;
        }
    }
    return true;
}

let arr1 = [1, 2, 3, 4, 5];
if (checkarr1(arr1)) {
    console.log("Все элементы в массиве чётные числа");
} else {
    console.log("В массиве есть нечётные числа");
}


// Ex. 2
function checknum (num) {
    for (let i of String(num)) {
        if (i % 2 == 0) {
            return false;
        }
    }
    return true;
}

let x = 12345;
if (checknum(x)) {
    console.log("Все цифры числа являются нечётными");
} else {
    console.log("В числе есть чётные цифры");
}


// Ex. 3
function checkarr2 (arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] == arr[i+1]) {
            return true;
        }
    }
    return false;
}

let arr2 = [1, 2, 3, 3, 4];
if (checkarr2(arr2)) {
    console.log("В массиве есть два одинаковых элемента подряд");
} else {
    console.log("В массиве все элементы различны");
}