// Ex. 1 
let elem1 = document.querySelector('#elem1');
let btn1 = document.querySelector('.wrapper__button1').addEventListener('click', () => console.log(elem1.className));


// Ex. 2 
let elem2 = document.querySelector('#elem2');
let btn2 = document.querySelector('.wrapper__button2').addEventListener('click', () => elem2.className = 'ex2');


// Ex. 3 
let elem3 = document.querySelector('#elem3');
let btn3 = document.querySelector('.wrapper__button3').addEventListener('click', () => console.log(elem3.className.split(' '))); 
