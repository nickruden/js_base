// Ex. 1
let num1 = 1200;
let last1 = String(num1);

if (last1[last1.length-1] == 0) {
    console.log("Упражнение №1. Последняя цифра числа равна 0");
} else {
    console.log("Упражнение №1. Последняя цифра числа не равна 0");
}


// Ex. 2
let num2 = 1234;
let last2 = String(num2);

if (last2[last2.length-1] == 0 || last2[last2.length-1] == 2 || last2[last2.length-1] == 4 || last2[last2.length-1] == 6 || last2[last2.length-1] == 8) {
    console.log("Упражнение №2. Число чётное");
} else {
    console.log("Упражнение №2. Число не чётное");
}