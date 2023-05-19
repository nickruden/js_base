// Ex. 1 
let elem1 = document.querySelector('#wrapper__elem1');

let btn1 = document.querySelector('.wrapper__button1').addEventListener('click', () => console.log(elem1.innerHTML));


// Ex. 2 
let elem2 = document.querySelector('#wrapper__elem2');

let btn2 = document.querySelector('.wrapper__button2').addEventListener('click', () => elem2.innerHTML = '<b>text2</b>'); 
