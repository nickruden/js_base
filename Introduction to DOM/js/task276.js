// Ex. 1 
let elem1 = document.querySelector('.elem1');
let btn1 = document.querySelector('.btn1').addEventListener('click', function func1() {
    elem1.style.width = '200px';
    elem1.style.height = '50px';
    elem1.style.border = '1px solid black';
    elem1.removeEventListener('click', func1);
});


// Ex. 2 
let elem2 = document.querySelector('.elem2');
let btn2 = document.querySelector('.btn2').addEventListener('click', function func2() {
    elem2.style.fontSize = '20px';
    elem2.style.borderTop = '5px solid black';
    elem2.style.backgroundColor = 'green';
    elem2.removeEventListener('click', func2);
});


// Ex. 3 
let elem3 = document.querySelectorAll('.elem3');
let btn3 = document.querySelector('.btn3').addEventListener('click', function func3() {
    for (let i of elem3) {
        i.style.cssFloat = 'left';
        i.removeEventListener('click', func3);
    };
}); 
