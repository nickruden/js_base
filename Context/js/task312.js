// Ex. 1 
"use strict";

let elem1 = document.querySelector('#elem1');
elem1.addEventListener('blur', func);

function func() {
    let self = this;

	alert( square() );

	function square() {
		return self.value * self.value;
	};
};


// Ex. 2 
"use strict";

let elem2 = document.querySelector('#elem2');
elem2.addEventListener('blur', func);

function func() {
	alert( square(this) );

	function square(self) {
		return self.value * self.value;
	};
};


// Ex. 3 
"use strict";

let elem3 = document.querySelector('#elem3');
elem3.addEventListener('blur', func);

function func() {
	let square = () => {
		return this.value * this.value;
	};

    alert( square() );
}; 
