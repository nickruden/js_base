// Ex. 1 
let elem1 = document.querySelectorAll('.elem1');

let btn1 = document.querySelector('#btn1').addEventListener('click', () => {
    for (let i of elem1) {
        i.textContent = 'text';
    };
});


// Ex. 2 
let elem2 = document.querySelectorAll('.elem2');

let btn2 = document.querySelector('#btn2').addEventListener('click', () => {
    for (let i = 0; i <= elem2.length; i++) {
        elem2[i].textContent += (i + 1);
    };
});


// Ex. 3 
let inp = document.querySelectorAll('.inp');
let elem3 = document.querySelector('.elem3');

let btn3 = document.querySelector('#btn3').addEventListener('click', () => {
    let summ = 0;
    for (i of inp) {
        summ += Number(i.value);
    };
    elem3.textContent = summ;
}); 
