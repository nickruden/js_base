// Ex. 1 
let elem1 = document.querySelector('#elem1');

let btn1 = document.querySelector('.wrapper__button1').addEventListener('click', () => console.log(elem1.type));


// Ex. 2 
let elem2 = document.querySelector('#elem2');

let btn2 = document.querySelector('.wrapper__button2').addEventListener('click', () => elem2.type = 'submit');


// Ex. 3 
let elem3_1 = document.querySelector('#elem3_1');
let elem3_2 = document.querySelector('#elem3_2');

let btn3 = document.querySelector('.wrapper__button3').addEventListener('click', () => elem3_2.textContent = elem3_1.href);

// Ex. 4 
let elem4 = document.querySelector('#elem4');

let btn4 = document.querySelector('.wrapper__button4').addEventListener('click', () => elem4.textContent += '(' + elem4.href + ')'); 
