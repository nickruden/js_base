// Ex. 1 
let elem = document.querySelector('#elem');
let btn = document.querySelector('#btn');

btn.addEventListener('click', () => console.log(elem.cloneNode(true))); 
