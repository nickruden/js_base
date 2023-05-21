// Ex. 1 
let elem1 = document.querySelector('.elem1').addEventListener('click', func1);

function func1() {
    this.textContent += this.href;
    this.removeEventListener('click', func1)
}; 


// Ex. 2 
let btn1 = document.querySelector('#btn1').addEventListener('click', func2);

function func2() {
    this.value++;
    if (this.value == 10) {
        this.removeEventListener('click', func2);
    };
}; 
