// Ex. 1
let num = prompt("Упражнение №1. Введите число от 10 до 99: ");

if (num >= 10 && num <= 99){
    sum = (Number(num[0]) + Number(num[1]));
    console.log("Упражнение №1. Сумма цифр введённого ввами числа равняется: " + sum);
    if (sum <= 9){
        console.log("Сумма однозначна");
    } else {
        console.log("Сумма двухзначна");
    }
}