// Ex. 1 
let elem1 = document.querySelector('#elem1');
let btn1_1 = document.querySelector('#btn1_1');
let btn1_2 = document.querySelector('#btn1_2');

btn1_1.addEventListener('click', () => elem1.setAttribute('checked', 'true'));
btn1_2.addEventListener('click', () => elem1.removeAttribute('checked'));


// Ex. 2 
let elem2 = document.querySelector('#elem2');
let btn2 = document.querySelector('#btn2');
let p = document.getElementById('p2')

btn2.addEventListener('click', () => {
    if (elem2.checked == true) {
        p.innerHTML = 'привет';
    } else {
        p.innerHTML = 'пока';
    };
}); 
