// Ex. 1 
let elem1 = document.querySelector('#elem1');
let value1 = elem1.getAttribute('value');

console.log(value1);


// Ex. 2 
let elem2 = document.querySelector('#elem2');
let class1 = elem2.getAttribute('class');

console.log(class1);


// Ex. 3 
let elem3 = document.querySelector('#elem3');
elem3.setAttribute('value', 'text');


// Ex. 4 
let elem4 = document.querySelector('#elem3');
elem4.setAttribute('class', 'valid');

console.log(elem4.className);


// Ex. 5 
let elem5 = document.querySelector('#elem5');
elem5.removeAttribute('value');


// Ex. 6 
let elem6 = document.querySelector('#elem6');
console.log(elem6.hasAttribute('value')); 
