// Ex. 1 
function func1() {
	this.value = Number(this.value) + 1;
};

let inp = document.querySelectorAll('.inp');
for (let i of inp) {
    i.addEventListener('blur', func1);
};


// Ex. 2 
function func2() {
    this.textContent = Number(this.textContent) ** 2;
};

let elem = document.querySelectorAll('.elem');
for (i of elem) {
    i.addEventListener('click', func2);
}; 
