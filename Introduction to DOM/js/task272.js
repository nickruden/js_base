// Ex. 1 
let elem = document.querySelectorAll('.elem');

for (let i of elem) {
    i.addEventListener('click', func);
};

function func() {
    this.textContent += '!';
    this.removeEventListener('click', func);
}; 
