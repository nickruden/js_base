// Ex. 1  В консоль выведется цифра 2. Так как внутри функции произошло переопределение глобальной переменной. 
let num1 = 1;

function func1() {
	num1 = 2;
}
func1();

console.log(num1);


// Ex. 2  В консоль выведется цифра 1. Так как внутри функции создаётся локальная переменная, просто с таким же именем как и глобальная, на значение глобальной переменной это не повлияет. Ошибки это не вызовет, так как области действия переменных разные.
let num2 = 1;

function func2() {
	let num2 = 2;
}
func2();

console.log(num2);