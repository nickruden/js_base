// Ex. 1 
"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
	console.log(this.value); // выведет значение атрибута value элемента input
	
	function child() {
		console.log(this.value); // выведет ошибку, так как this внутренней функции указывает на undefined при строгом режиме, а атрибутов у типа undefined нет
	}
	child();
}; 
