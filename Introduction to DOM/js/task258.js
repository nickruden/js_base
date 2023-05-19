// Ex. 1 
let elem1 = document.querySelector('#wrapper__elem1');

function func1() {
    console.log(elem1.textContent);
};

let btn1 = document.querySelector('.wrapper__button1').addEventListener('click', func1);


// Ex. 2 
let elem2 = document.querySelector('#wrapper__elem2');

function func2() {
    elem2.textContent = '111';
}

let btn2 = document.querySelector('.wrapper__button2').addEventListener('click', func2);


// Ex. 3 
let elem3_1 = document.querySelector('#wrapper__elem3_1');
let elem3_2 = document.querySelector('#wrapper__elem3_2');

function func3() {
    console.log(Number(elem3_1.textContent) + Number(elem3_2.textContent));
}

let btn3 = document.querySelector('.wrapper__button3').addEventListener('click', func3);


// Ex. 4 
let elem4_1 = document.querySelector('#wrapper__elem4_1');
let elem4_2 = document.querySelector('#wrapper__elem4_2');
let elem4_3 = document.querySelector('#wrapper__elem4_3');
let block1 = document.querySelector('.wrapper__block');

function func4() {
    block1.textContent = (Number(elem4_1.textContent) + Number(elem4_2.textContent) + Number(elem4_3.textContent));
}

let btn4 = document.querySelector('.wrapper__button4').addEventListener('click', func4);


// Ex. 5 
let elem5 = document.querySelector('#wrapper__elem5');

function func5() {
    elem5.textContent = Number(elem5.textContent) + 1;
}

let btn5 = document.querySelector('.wrapper__button5').addEventListener('click', func5);


// Ex. 6 
let elem6 = document.querySelector('#wrapper__elem6');

function func6() {
    elem6.textContent += '!';
}

let btn6 = document.querySelector('.wrapper__button6').addEventListener('click', func6);
