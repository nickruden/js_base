// Ex. 1 
let elem1 = document.querySelector('#elem1');

elem1.addEventListener('focus', () => elem1.value = 1);
elem1.addEventListener('blur', () => elem1.value = 2);


// Ex. 2 
let elem2 = document.querySelector('#elem2');

elem2.addEventListener('blur', () => console.log(Number(elem2.value ** 2)));


// Ex. 3 
let elem3 = document.querySelector('#elem3');

elem3.addEventListener('focus', () => elem3.value = '');
