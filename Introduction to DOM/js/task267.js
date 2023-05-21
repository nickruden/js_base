// Ex. 1 
function func1() {
    this.textContent += '!';
};

let elem1 = document.querySelector('.elem1').addEventListener('click', func1);
let elem2 = document.querySelector('.elem2').addEventListener('click', func1);
let elem3 = document.querySelector('.elem3').addEventListener('click', func1);
let elem4 = document.querySelector('.elem4').addEventListener('click', func1);
let elem5 = document.querySelector('.elem5').addEventListener('click', func1);


// Ex. 2 
function func2() {
    this.value = Number(this.value) ** 2;
};

let inp1 = document.querySelector('#inp1').addEventListener('blur', func2);
let inp2 = document.querySelector('#inp2').addEventListener('blur', func2);
let inp3 = document.querySelector('#inp3').addEventListener('blur', func2); 
