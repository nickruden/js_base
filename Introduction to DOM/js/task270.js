/* Ex. 1 
let divs = document.querySelectorAll('div');

for (let div of divs) {
	div.addEventListener('click', func);
}

function func() {
	this.textContent++;
} */

let divs = document.querySelectorAll('.div');

for (let div of divs) {
	div.addEventListener('click', function() {
        this.textContent++;
    });
}; 
