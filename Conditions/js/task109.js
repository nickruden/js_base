// Ex. 1
let month = prompt("Упражнение №1. Введите число от 1 до 12: ");

if (month == 12 || month == 1 || month == 2) {
    console.log("Упражнение №1. Месяц под этим номером попадает в зимнюю пору года");
} 
else if (month >= 3 && month <= 5) {
    console.log("Упражнение №1. Месяц под этим номером попадает в весеннюю пору года");
}
else if (month >= 6 && month <= 8) {
    console.log("Упражнение №1. Месяц под этим номером попадает в летнюю пору года");
}
else if (month >= 9 && month <= 11) {
    console.log("Упражнение №1. Месяц под этим номером попадает в осеннюю пору года");
}
else {
    console.log("Упражнение №1. Месяца под этим номером не сущетсвует");
}

alert("Упражнение №1. Результат в консоли");


// Ex. 2
let str = 'abcde';

if (str[0] == 'a') {
    console.log("Упражнение №2. да");
} else {
    console.log("Упражнение №2. нет");
}


// Ex. 3
let num1 = 12345;
let first = String(num1);

if (first[0] == 1 || first[0] == 2 || first[0] == 3) {
    console.log("Упражнение №3. да");
} else {
    console.log("Упражнение №3. нет");
}


// Ex. 4
let num2 = 472;
let strnum2 = String(num2);
let sumnum2 = Number(strnum2[0]) + Number(strnum2[1]) + Number(strnum2[strnum2.length-1]);

console.log("Упражнение №4. Сумма цифр числа " + num2 + " равняется: " + sumnum2);


// Ex. 5
let num3 = 308492;
let strnum3 = String(num3);

let sumfirst = Number(strnum3[0]) + Number(strnum3[1]) + Number(strnum3[2]);
let sumlast = Number(strnum3[3]) + Number(strnum3[4]) + Number(strnum3[5]);

if ( sumfirst == sumlast ) {
    console.log("Упражнение №5. да");
} else {
    console.log("Упражнение №3. нет");
}