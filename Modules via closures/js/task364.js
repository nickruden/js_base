// Ex. 1 
;(function() {
	let str1 = 'переменная модуля';
	let str2 = 'переменная модуля';
	let str3 = 'переменная модуля';
	
	function func1() {
		alert('функция модуля');
	}
	function func2() {
		alert('функция модуля');
	}
	function func3() {
		alert('функция модуля');
	}

    window.str1 = str1;
    window.func1 = func1;
    window.func2 = func2;
})();

console.log(str1);
func1();
func2();


// Ex. 2 
;(function() {
	let str1 = 'переменная модуля';
	let str2 = 'переменная модуля';
	let str3 = 'переменная модуля';
	
	function func1() {
		alert('функция модуля');
	}
	function func2() {
		alert('функция модуля');
	}
	function func3() {
		alert('функция модуля');
	}
	function func4() {
		alert('функция модуля');
	}
	function func5() {
		alert('функция модуля');
	}

    window.module = {func1, func2, func3, func4, func5, str1, str2};
})();

module.func1();
module.func2();
module.func3();
module.func4();
module.func5();
console.log(module.str1);
console.log(module.str2); 
