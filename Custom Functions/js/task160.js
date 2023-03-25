// Ex. 1
function func1(num = 5) {
	console.log(num * num);
}
func1(2); // функция выведет 4
func1(3); // функция выведет 9
func1(); // функция выведет 25

// Ex. 2
function func2(num1 = 0, num2 = 0) {
	console.log(num1 + num2);
}
func2(2, 3); // функция выведет 5
func2(3); // функция выведет 3
func2(); // функция выведет 0