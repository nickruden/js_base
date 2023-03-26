// Ex. 1  В консоль выведется цифра 2. Так как внутри функции произошло переопределение значения глобальной переменной.
let num1 = 1;

function func1() {
	num1 = 2;
}
func1();

console.log(num1);


// Ex. 2  В консоль выведется цифра 1. Так как функция не была вызвана, то и действие описаное внутри неё не выполнилось, соответсвенно, значение глобальной переменной не поменялось.
let num2 = 1;

function func2() {
	num2 = 2;
}

console.log(num2);


// Ex. 3  В консоль выведется цифра 1. Так как внутри функции используется локальная переменная, просто с таким же именем как и глобальная. Соответсвенно, значение глоабльной переменной останется прежним.
let num3 = 1;

function func3() {
	let num3 = 2;
}
func3();

console.log(num3);


// Ex. 4  В консоль выведется цифра 1. Так как функция использует локальную переменную, просто с таким же именем как и глобальная переменная, соответсвенно, значение глобальной переменной не изменится. Также сама функция вызывается после вывода значения переменной в консоль, однако даже если вызвать функцию перед выводом значения в консоль, то ничего не изменится, по причине локальности переменной, используемой в функции.
let num4 = 1;

function func4() {
	let num4 = 2;
}

console.log(num4);
func4();


// Ex. 5  В консоль выведется цифра 1. Внутри функции переопределятеся значение глобальной переменной, но, по причине того, что функция вызывается после вывода значения переменной в консоль, переменная не поменяет своего значения, так как функция выполнит переопределение значения после вывода его в консоль.
let num5 = 1;

function func5() {
	num5 = 2;
}

console.log(num5);
func5();


// Ex. 6  В консоль выведется цифра 4. Так как функция использует глобальную переменную и при каждом вызове к её значению добавляет еденицу, меняя значние переменной для всей программы. Перед выводом значения переменной в консоль функция вызвана 3 раза, соответсвенно, к начальному значению переменной прибавится три.
let num6 = 1;

function func6() {
	num6++;
}

func6();
func6();
func6();
console.log(num6);


// Ex. 7  В консоль выведется цифра 1. Так как функция использует глобальную переменную, она меняет её значение, но из-за того, что вызов функции происходит после вывода значения переменной в консоль, переменная не поменяет своего значения.
function func7() {
	num7 = 2;
}

let num7 = 1;
console.log(num7);
func7();


// Ex. 8  В консоль выведется цифра 2. Фунция использует глобальную переменную и меняет её значение. Так как вызов функции был перед выводом значения переменной в консоль, то переменная поменяет значение.
function func8() {
	num8 = 2;
}

let num8 = 1;
func8();
console.log(num8);