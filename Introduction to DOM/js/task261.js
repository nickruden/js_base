// Ex. 1 
let elem1 = document.querySelector('#elem1');

let btn1 = document.querySelector('.wrapper__button1').addEventListener('click', () => elem1.value = 'text1');


// Ex. 2 
let elem2_1 = document.querySelector('#elem2');
let elem2_2 = document.querySelector('#wrapper__elem2');

let btn2 = document.querySelector('.wrapper__button2').addEventListener('click', () => elem2_2.textContent = elem2_1.value);


// Ex. 3 
let elem3_1 = document.querySelector('#elem3_1');
let elem3_2 = document.querySelector('#elem3_2');


let btn3 = document.querySelector('.wrapper__button3').addEventListener('click', () => elem3_2.value = elem3_1.value ** 2);


// Ex. 4 
let elem4_1 = document.querySelector('#elem4_1');
let elem4_2 = document.querySelector('#elem4_2');


let btn4 = document.querySelector('.wrapper__button4').addEventListener('click', () => {
    let elem = elem4_1.value;
    elem4_1.value = elem4_2.value;
    elem4_2.value = elem;
});


// Ex. 5 
let elem5_1 = document.querySelector('#elem5_1');
let elem5_2 = document.querySelector('#elem5_2');
let elem5_3 = document.querySelector('#elem5_3');
let elem5_4 = document.querySelector('#elem5_4');
let elem5_5 = document.querySelector('#elem5_5');
let elem5_6 = document.querySelector('#wrapper__elem5');

let btn5 = document.querySelector('.wrapper__button5').addEventListener('click', () => elem5_6.textContent = (Number(elem5_1.value) + Number(elem5_2.value) + Number(elem5_3.value) + Number(elem5_4.value) + Number(elem5_5.value)) / 2); 
