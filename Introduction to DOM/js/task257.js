// Ex. 1 
function func1() {
    console.log('Ты нажал на кнопку 1');
}

let btn1 = document.querySelector('.wrapper__button1').addEventListener('click', func1);


// Ex. 2 
function func2() {
    console.log('Ты навёл курсор на кнопку 2');
}

let btn2 = document.querySelector('.wrapper__button2').addEventListener('mouseover', func2);


// Ex. 3 
function func3() {
    console.log('Ты увёл курсор с кнопки 3');
}

let btn3 = document.querySelector('.wrapper__button3').addEventListener('mouseout', func3);


// Ex. 4 
function func4_1() {
    console.log('Ты навёл курсор на кнопку 4');
}
function func4_2() {
    console.log('Ты увёл курсор с кнопки 4');
}

let btn4 = document.querySelector('.wrapper__button4');

btn4.addEventListener('mouseover', func4_1);
btn4.addEventListener('mouseout', func4_2);
