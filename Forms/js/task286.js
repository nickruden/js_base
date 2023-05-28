// Ex. 1 
let inp1 = document.querySelector('#inp1');
let btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', () => inp1.setAttribute('disabled', 'true'));


// Ex. 2 
let inp2 = document.querySelector('#inp2');
let btn2_1 = document.querySelector('#btn2_1');
let btn2_2 = document.querySelector('#btn2_2');

btn2_1.addEventListener('click', () => inp2.setAttribute('disabled', 'true'));
btn2_2.addEventListener('click', () => inp2.disabled = false);

// Ex. 3 
let inp3 = document.querySelector('#inp3');
let btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', () => console.log(inp3.hasAttribute('disabled'))); 
