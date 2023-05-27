// Ex. 1 
let elem1 = document.querySelector('#elem1');
elem1.firstElementChild.style.color = 'red';


// Ex. 2 
let elem2 = document.querySelector('#elem2');
elem2.lastElementChild.style.color = 'red';


// Ex. 3 
let elem3 = document.querySelector('#elem3');
let elem3_child = elem3.children;

for (let i of elem3_child) {
    i.textContent += '!';
};


// Ex. 4 
let elem4 = document.querySelector('#elem4');
elem4.parentElement.style.border = '1px solid red';


// Ex. 5 
let elem5 = document.querySelector('#elem5');
elem5.parentElement.style.border = '1px solid red';


// Ex. 6 
let elem6 = document.querySelector('#elem6');
console.log(elem6.closest('div'));


// Ex. 7 
let elem7 = document.querySelector('#elem7');
console.log(elem7.closest('.www'));


// Ex. 8 
let elem8 = document.querySelector('#elem8');
elem8.previousElementSibling.textContent += '!';


// Ex. 9 
let elem9 = document.querySelector('#elem9');
elem9.nextElementSibling.textContent += '!';


// Ex. 10 
let elem10 = document.querySelector('#elem10');
elem10.nextElementSibling.nextElementSibling.textContent += '!';


// Ex. 11 
let elem11 = document.querySelector('#elem11');
let next_text = elem11.nextElementSibling.textContent;
elem11.nextElementSibling.textContent = elem11.previousElementSibling.textContent;
elem11.previousElementSibling.textContent = next_text; 
