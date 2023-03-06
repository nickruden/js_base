// Ex. 1
let str1 = '';

for (let i = 0; i < 5; i++) {
    str1 += '-';
}
console.log("Упражнение №1. Строка с пятью дефисами: " + str1);


// Ex. 2
let str2 = '';

for (let i = 1; i <= 9; i++) {
    str2 += i;
}
console.log("Упражнение №2. Строка из чисел: " + str2);


// Ex. 3
let str3 = '';

for (let i = 9; i > 0; i--) {
    str3 += i;
}
console.log("Упражнение №3. Строка из чисел, которые расположены в обратном порядке: " + str3);


// Ex. 4
let str4 = '';

for (let i = 1; i <= 9; i++) {
    str4 += '-' + i;
}
console.log("Упражнение №4. Строка из чисел и дефисов: " + str4);
