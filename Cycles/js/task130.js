// Ex. 1
let arr = ['a', 'b', 'c', 'd', 'e'];
let flag1 = false;

for (let i of arr) {
    if (i == 'c') {
        flag1 = true;
        break;
    }
}

if (flag1) {
    console.log("+++");
} else {
    console.log('---');
}


// Ex. 2
let num = 9;

for (let i = 2; i <= num; i++) {
    if (num % 1 == 0 && num % num == 0 && num & i != 0) {
        console.log("Число " + num + " является простым.");
        break;
    } else {
        console.log("Число " + num + " не является простым.");
        break;
    }
}